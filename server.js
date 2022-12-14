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

let fs = require("fs");
var nomeArquivo = "nomeArquivo";
var nomeArquivo2 = "nomeArquivo2";
var nomeArquivo3 = "nomeArquivo3";
var nomeArquivo4 = "nomeArquivo4";
var nomeArquivo5 = "nomeArquivo5";

var IDRG = "a";
var IDCP = "";
var IDCNH = "";
var IDCRLV = "";
var IDM = "";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/", (err) => {
      cb(null, "./uploads/");
    });
  },
  filename: function (req, file, cb) {
    if (file.fieldname === "Arquivo") {
      cb(null, "Arquivo" + path.extname(file.originalname));
      nomeArquivo = path.extname(file.originalname);
    }
    if (file.fieldname === "Arquivo2") {
      cb(null, "Arquivo2" + path.extname(file.originalname));
      nomeArquivo2 = path.extname(file.originalname);
    }
    if (file.fieldname === "Arquivo3") {
      cb(null, "Arquivo3" + path.extname(file.originalname));
      nomeArquivo3 = path.extname(file.originalname);
    }
    if (file.fieldname === "Arquivo4") {
      cb(null, "Arquivo4" + path.extname(file.originalname));
      nomeArquivo4 = path.extname(file.originalname);
    }
    if (file.fieldname === "Arquivo5") {
      cb(null, "Arquivo5" + path.extname(file.originalname));
      nomeArquivo5 = path.extname(file.originalname);
    }
  },
});

const upload = multer({ storage });

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Fazer com que o Node sirva os arquivos do app em React criado
app.use(express.static(path.resolve(__dirname, "./client/build")));

// Todas as outras solicita????es GET n??o tratadas retornar??o nosso app em React
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
        Gradua????o: novoCadastro.pg,
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

app.post(
  "/addbicicleta",
  upload.fields([
    { name: "Arquivo", maxCount: 1 },
    {
      name: "Arquivo3",
      maxCount: 1,
    },
  ]),
  (req, res) => {
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
      `./uploads/Arquivo${nomeArquivo}`,
      `./uploads/${novoCadastro.cpf + nomeArquivo}`,
      function (err) {
        //Caso a execu????o encontre algum erro
        if (err) {
          //A execu????o ir?? parar e mostrar?? o erro
          throw err;
        } else {
          //Caso n??o tenha erro, apenas a mensagem ser?? exibida no terminal
          console.log("Arquivo renomeado " + novoCadastro.cpf + nomeArquivo);
        }
      }
    );
    fs.rename(
      `./uploads/Arquivo3${nomeArquivo3}`,
      `./uploads/${novoCadastro.rg + nomeArquivo3}`,
      function (err) {
        //Caso a execu????o encontre algum erro
        if (err) {
          //A execu????o ir?? parar e mostrar?? o erro
          throw err;
        } else {
          //Caso n??o tenha erro, apenas a mensagem ser?? exibida no terminal
          console.log("Arquivo renomeado3 ");
        }
      }
    );
    nomeArquivo = novoCadastro.cpf + nomeArquivo;
    nomeArquivo3 = novoCadastro.rg + nomeArquivo3;
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
        IDRG = "https://drive.google.com/uc?export=view&id=" + response.data.id;
        return response.data.id;
      } catch (err) {
        console.log("Upload file error", err);
      }
    }
    async function uploadFile2() {
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
          name: `${nomeArquivo3}`,
          parents: ["1LMWRGHAKv1U6FkG88ibmuPiZX4WYTSU3"],
        };

        const media = {
          mimeType: "image/jpg",
          body: fs.createReadStream(`./uploads/${nomeArquivo3}`),
        };

        const response = await driveService.files.create({
          resource: fileMetaData,
          media: media,
          field: "id",
        });
        IDCP = "https://drive.google.com/uc?export=view&id=" + response.data.id;
        return response.data.id;
      } catch (err) {
        console.log("Upload file error", err);
      }
    }

    uploadFile().then((data) => {
      console.log(data);
    });

    uploadFile2().then((data) => {
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
            IDRG: IDRG,
            IDCP: IDCP,
            Status: "Pendente",
          })
          .then(() => {
            console.log("dado salvo!");
            try {
              fs.unlink(`./uploads/${nomeArquivo}`, function () {});
              fs.unlink(`./uploads/${nomeArquivo3}`, function () {});
            } catch (err) {
              // handle the error
              console.log("Erro");
              console.log(err.message);
            }
          });
      });
    });
    res.redirect("/sucessobicicleta");
  }
);

app.post(
  "/addcivil",
  upload.fields([
    { name: "Arquivo2", maxCount: 1 },
    { name: "Arquivo4", maxCount: 1 },
    { name: "Arquivo5", maxCount: 1 },
  ]),
  (req, res) => {
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
      `./uploads/Arquivo2${nomeArquivo2}`,
      `./uploads/${novoCadastro.cpf + nomeArquivo2}`,
      function (err) {
        //Caso a execu????o encontre algum erro
        if (err) {
          //A execu????o ir?? parar e mostrar?? o erro
          console.log(err);
        } else {
          //Caso n??o tenha erro, apenas a mensagem ser?? exibida no terminal
          console.log("Arquivo renomeado");
        }
      }
    );
    nomeArquivo2 = novoCadastro.cpf + nomeArquivo2;

    fs.rename(
      `./uploads/Arquivo4${nomeArquivo4}`,
      `./uploads/${novoCadastro.rg + nomeArquivo4}`,
      function (err) {
        //Caso a execu????o encontre algum erro
        if (err) {
          //A execu????o ir?? parar e mostrar?? o erro
          console.log(err);
        } else {
          //Caso n??o tenha erro, apenas a mensagem ser?? exibida no terminal
          console.log("Arquivo renomeado4");
        }
      }
    );
    nomeArquivo4 = novoCadastro.rg + nomeArquivo4;

    fs.rename(
      `./uploads/Arquivo5${nomeArquivo5}`,
      `./uploads/${novoCadastro.placa + nomeArquivo5}`,
      function (err) {
        //Caso a execu????o encontre algum erro
        if (err) {
          //A execu????o ir?? parar e mostrar?? o erro
          console.log(err);
        } else {
          //Caso n??o tenha erro, apenas a mensagem ser?? exibida no terminal
          console.log("Arquivo renomeado5");
        }
      }
    );
    nomeArquivo5 = novoCadastro.placa + nomeArquivo5;

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
          name: `${nomeArquivo2}`,
          parents: ["1KRswfPABopzcoSt5_7d3EBm_P8FV2SJf"],
        };

        const media = {
          mimeType: "image/jpg",
          body: fs.createReadStream(`./uploads/${nomeArquivo2}`),
        };

        const response = await driveService.files.create({
          resource: fileMetaData,
          media: media,
          field: "id",
        });
        IDCNH =
          "https://drive.google.com/uc?export=view&id=" + response.data.id;
        return response.data.id;
      } catch (err) {
        console.log("Upload file error", err);
      }
    }

    async function uploadFile3() {
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
          name: `${nomeArquivo5}`,
          parents: ["1KRswfPABopzcoSt5_7d3EBm_P8FV2SJf"],
        };

        const media = {
          mimeType: "image/jpg",
          body: fs.createReadStream(`./uploads/${nomeArquivo5}`),
        };

        const response = await driveService.files.create({
          resource: fileMetaData,
          media: media,
          field: "id",
        });
        IDM = "https://drive.google.com/uc?export=view&id=" + response.data.id;
        return response.data.id;
      } catch (err) {
        console.log("Upload file error", err);
      }
    }

    async function uploadFile2() {
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
          name: `${nomeArquivo4}`,
          parents: ["1KRswfPABopzcoSt5_7d3EBm_P8FV2SJf"],
        };

        const media = {
          mimeType: "image/jpg",
          body: fs.createReadStream(`./uploads/${nomeArquivo4}`),
        };

        const response = await driveService.files.create({
          resource: fileMetaData,
          media: media,
          field: "id",
        });
        IDCRLV =
          "https://drive.google.com/uc?export=view&id=" + response.data.id;
        return response.data.id;
      } catch (err) {
        console.log("Upload file error", err);
      }
    }

    uploadFile().then((data) => {
      console.log(data);
    });

    uploadFile3().then((data) => {
      console.log(data);
    });

    uploadFile2().then((data) => {
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
            IDCNH: IDCNH,
            IDCRLV: IDCRLV,
            IDM: IDM,
            Status: "Pendente",
          })
          .then(() => {
            console.log("dado salvo!");
            try {
              fs.unlink(`./uploads/${nomeArquivo2}`, function () {});
              fs.unlink(`./uploads/${nomeArquivo4}`, function () {});
              fs.unlink(`./uploads/${nomeArquivo5}`, function () {});
            } catch (err) {
              // handle the error
              console.log("Erro");
              console.log(err.message);
            }
          });
      });
    });

    res.redirect("/sucessoCadastro");
  }
);

app.listen(port, () => console.log(`Listening on port ${port}`));
