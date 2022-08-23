const express = require("express");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const credenciais = require("./credenciais.json");
const arquivo = require("./arquivo.json");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const path = require("path");

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
  };
  let sheet;
  getDoc().then((doc) => {
    sheet = doc.sheetsByIndex[1];
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
      })
      .then(() => {
        console.log("dado salvo!");
      });
  });
  res.redirect("/");
});

app.post("/addbicicleta", (req, res) => {
  const novoCadastro = {
    nome: req.body.Nome,
    Nascimento: req.body.Nascimento,
    cpf: req.body.CPF,
    rg: req.body.RG,
    Telefone: req.body.Telefone,
    CEP: req.body.CEP,
    Endereço: req.body.Endereço,
    Bairro: req.body.Bairro,
    Cidade: req.body.Cidade,
    Dependentes: req.body.Dependentes,
  };
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
        CEP: novoCadastro.CEP,
        Endereço: novoCadastro.Endereço,
        Bairro: novoCadastro.Bairro,
        Cidade: novoCadastro.Cidade,
        Dependentes: novoCadastro.Dependentes,
      })
      .then(() => {
        console.log("dado salvo!");
      });
  });
  res.redirect("/");
});

app.post("/addcivil", (req, res) => {
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
    Endereço: req.body.Endereço,
    Bairro: req.body.Bairro,
    Cidade: req.body.Categoria,
    CEP: req.body.CEP,
    Motivo: req.body.Motivo,
    Outro: req.body.Outro,
    Nascimento: req.body.Nascimento,
  };

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
        Endereço: novoCadastro.Endereço,
        Bairro: novoCadastro.Bairro,
        Cidade: novoCadastro.Cidade,
        CEP: novoCadastro.CEP,
        Marca: novoCadastro.marca,
        Modelo: novoCadastro.modelo,
        Cor: novoCadastro.cor,
        Placa: novoCadastro.placa,
        Motivo: novoCadastro.Motivo,
        Outro: novoCadastro.Outro,
      })
      .then(() => {
        console.log("dado salvo!");
      });
  });
  res.redirect("/sucessoCadastro");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
