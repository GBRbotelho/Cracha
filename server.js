const express = require("express");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const { google } = require("googleapis");
const credenciais = require("./credenciais.json");
const arquivo = require("./arquivo.json");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
const arquivo2 = require("./arquivo2.json");
let fs = require("fs");
var nomeArquivo = "nomeArquivo";
var ID = "";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, "Arquivo" + path.extname(file.originalname));
    nomeArquivo = path.extname(file.originalname);
  },
});

const upload = multer({ storage });

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Fazer com que o Node sirva os arquivos do app em React criado
app.use(express.static(path.resolve(__dirname, "./client/build")));

// Todas as outras solicitações GET não tratadas retornarão nosso app em React
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const getDoc = async () => {
  const doc = new GoogleSpreadsheet(arquivo.id);

  await doc.useServiceAccountAuth({
    client_email: credenciais.client_email,
    private_key: credenciais.private_key.replace(/\\n/g, "\n"),
  });
  await doc.loadInfo();
  return doc;
};
getDoc().then((doc) => {
  console.log(doc.title);
});

app.get("/api/mensagem", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.post("/addcadastro", (req, res) => {
  const novoCadastro = {
    pg: req.body.PG,
    om: req.body.OM,
    nome: req.body.Nome,
    cpf: req.body.CPF,
    rg: req.body.RG,
    cnh: req.body.CNH,
    marca: req.body.Marca,
    modelo: req.body.Modelo,
    cor: req.body.Cor,
    placa: req.body.Placa,
    base: req.body.Base64,
  };
  let sheet;
  getDoc().then((doc) => {
    sheet = doc.sheetsByIndex[2];
    sheet
      .addRow({
        Graduação: novoCadastro.pg,
        Nome: novoCadastro.nome,
        RG: novoCadastro.rg,
        CPF: novoCadastro.cpf,
        CNH: novoCadastro.cnh,
        Marca: novoCadastro.marca,
        Modelo: novoCadastro.modelo,
        Cor: novoCadastro.cor,
        Placa: novoCadastro.placa,
        OM: novoCadastro.om,
        Base: novoCadastro.base,
      })
      .then(() => {
        console.log("dado salvo!");
      });
  });
  console.log(novoCadastro.base);
  res.send("Teste");
  //res.redirect("/");
});

app.post("/addbicicleta", upload.single("Arquivo"), (req, res) => {
  const novoCadastro = {
    nome: req.body.Nome,
    Nascimento: req.body.Nascimento,
    cpf: req.body.CPF,
    rg: req.body.RG,
    Telefone: req.body.Telefone,
    CEP: req.body.CEP,
    Rua: req.body.Rua,
    Bairro: req.body.Bairro,
    Cidade: req.body.Cidade,
    Dependentes: req.body.Dependentes,
    ID: "",
  };
  fs.rename(
    `./uploads/arquivo${nomeArquivo}`,
    `./uploads/${novoCadastro.cpf + nomeArquivo}`,
    function (err) {
      //Caso a execução encontre algum erro
      if (err) {
        //A execução irá parar e mostrará o erro
        throw err;
      } else {
        //Caso não tenha erro, apenas a mensagem será exibida no terminal
        console.log("Arquivo renomeado");
      }
    }
  );
  nomeArquivo = novoCadastro.cpf + nomeArquivo;

  async function uploadFile() {
    try {
      const auth = new google.auth.GoogleAuth({
        keyFile: "./credenciais.json",
        scopes: ["https://www.googleapis.com/auth/drive"],
      });

      const driveService = google.drive({
        version: "v3",
        auth,
      });

      const fileMetaData = {
        name: `${nomeArquivo}`,
        parents: ["1LMWRGHAKv1U6FkG88ibmuPiZX4WYTSU3"],
      };

      const media = {
        mimeType: "image/jpg",
        body: fs.createReadStream(`./uploads/${nomeArquivo}`),
      };

      const response = await driveService.files.create({
        resource: fileMetaData,
        media: media,
        field: "id",
      });
      ID = "https://drive.google.com/uc?export=view&id=" + response.data.id;
      return response.data.id;
    } catch (err) {
      console.log("Upload file error", err);
    }
  }

  uploadFile().then((data) => {
    console.log(data);

    let sheet;
    getDoc().then((doc) => {
      sheet = doc.sheetsByIndex[0];
      sheet
        .addRow({
          Nome: novoCadastro.nome,
          Nascimento: novoCadastro.Nascimento,
          RG: novoCadastro.rg,
          CPF: novoCadastro.cpf,
          Cel: req.body.Telefone,
          Rua: novoCadastro.Rua,
          Bairro: novoCadastro.Bairro,
          Cidade: novoCadastro.Cidade,
          CEP: novoCadastro.CEP,
          Dependentes: novoCadastro.Dependentes,
          ID: ID,
          Status: "Pendente",
        })
        .then(() => {
          console.log("dado salvo!");
          try {
            fs.unlink(`./uploads/${nomeArquivo}`, function () {});
          } catch (err) {
            // handle the error
            console.log("Erro");
            console.log(err.message);
          }
        });
    });
  });

  res.redirect("/sucessobicicleta");
});

app.post("/addcivil", upload.single("Arquivo2"), (req, res) => {
  const novoCadastro = {
    nome: req.body.Nome,
    cpf: req.body.CPF,
    rg: req.body.RG,
    cnh: req.body.CNH,
    marca: req.body.Marca,
    modelo: req.body.Modelo,
    cor: req.body.Cor,
    placa: req.body.Placa,
    Categoria: req.body.Categoria,
    Empresa: req.body.Empresa,
    Telefone: req.body.Telefone,
    Rua: req.body.Rua,
    Bairro: req.body.Bairro,
    Cidade: req.body.Categoria,
    CEP: req.body.CEP,
    Motivo: req.body.Motivo,
    Outro: req.body.Outro,
    Nascimento: req.body.Nascimento,
  };

  fs.rename(
    `./uploads/arquivo${nomeArquivo}`,
    `./uploads/${novoCadastro.cpf + nomeArquivo}`,
    function (err) {
      //Caso a execução encontre algum erro
      if (err) {
        //A execução irá parar e mostrará o erro
        console.log(err);
      } else {
        //Caso não tenha erro, apenas a mensagem será exibida no terminal
        console.log("Arquivo renomeado");
      }
    }
  );
  nomeArquivo = novoCadastro.cpf + nomeArquivo;

  async function uploadFile() {
    try {
      const auth = new google.auth.GoogleAuth({
        keyFile: "./credenciais.json",
        scopes: ["https://www.googleapis.com/auth/drive"],
      });

      const driveService = google.drive({
        version: "v3",
        auth,
      });

      const fileMetaData = {
        name: `${nomeArquivo}`,
        parents: ["1KRswfPABopzcoSt5_7d3EBm_P8FV2SJf"],
      };

      const media = {
        mimeType: "image/jpg",
        body: fs.createReadStream(`./uploads/${nomeArquivo}`),
      };

      const response = await driveService.files.create({
        resource: fileMetaData,
        media: media,
        field: "id",
      });
      ID = "https://drive.google.com/uc?export=view&id=" + response.data.id;
      return response.data.id;
    } catch (err) {
      console.log("Upload file error", err);
    }
  }

  uploadFile().then((data) => {
    console.log(data);

    let sheet;
    getDoc().then((doc) => {
      sheet = doc.sheetsByIndex[1];
      sheet
        .addRow({
          Nome: novoCadastro.nome,
          Nascimento: novoCadastro.Nascimento,
          RG: novoCadastro.rg,
          CPF: novoCadastro.cpf,
          CNH: novoCadastro.cnh,
          Categoria: novoCadastro.Categoria,
          Empresa: novoCadastro.Empresa,
          Cel: novoCadastro.Telefone,
          Rua: novoCadastro.Rua,
          Bairro: novoCadastro.Bairro,
          Cidade: novoCadastro.Cidade,
          CEP: novoCadastro.CEP,
          Marca: novoCadastro.marca,
          Modelo: novoCadastro.modelo,
          Cor: novoCadastro.cor,
          Placa: novoCadastro.placa,
          Motivo: novoCadastro.Motivo,
          Outro: novoCadastro.Outro,
          ID: ID,
          Status: "Pendente",
        })
        .then(() => {
          console.log("dado salvo!");
          try {
            fs.unlink(`./uploads/${nomeArquivo}`, function () {});
          } catch (err) {
            // handle the error
            console.log("Erro");
            console.log(err.message);
          }
        });
    });
  });

  res.redirect("/sucessoCadastro");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
