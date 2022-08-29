import Input from "../Form/Input";
import SubmitButton from "../Form/SubmitButton";
import styles from "./ProjectForm.module.css";
import React from "react";
import InputE from "../Form/InputE";
import InputS from "../Form/InputS";

function ProjectForm3({ btnText }) {
  function handleSubmit(e) {
    e.preventDefault();
    var Erro = document.querySelector("#Erro").parentElement.className;
    var Sucesso = document.querySelector("#Sucesso").parentElement.className;
    var Nome = document.querySelector("#Nome");
    var Nascimento = document.querySelector("#Nascimento");
    var CPF = document.querySelector("#CPF");
    var RG = document.querySelector("#RG");
    var Telefone = document.querySelector("#Telefone");
    var Rua = document.querySelector("#Rua");
    var Bairro = document.querySelector("#Bairro");
    var Cidade = document.querySelector("#Cidade");
    var CEP = document.querySelector("#CEP");
    var Dependentes = document.querySelector("#Dependentes");
    var Arquivo = document.querySelector("#Arquivo");
    var Arquivo3 = document.querySelector("#Arquivo3");

    const regex = /[0-9]/;

    if (Nome.value === "") {
      Nome.parentElement.className = Erro;
      Nome.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else if (regex.test(Nome.value)) {
      Nome.parentElement.className = Erro;
      Nome.parentElement.querySelector("small").innerText =
        "Não digite numeros";
    } else {
      Nome.parentElement.className = Sucesso;
    }

    if (Nascimento.value === "") {
      Nascimento.parentElement.className = Erro;
      Nascimento.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      Nascimento.parentElement.className = Sucesso;
    }

    if (CPF.value === "") {
      CPF.parentElement.className = Erro;
      CPF.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      CPF.parentElement.className = Sucesso;
    }

    if (RG.value === "") {
      RG.parentElement.className = Erro;
      RG.parentElement.querySelector("small").innerText = "Preencha esse campo";
    } else {
      RG.parentElement.className = Sucesso;
    }

    if (Telefone.value === "") {
      Telefone.parentElement.className = Erro;
      Telefone.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      Telefone.parentElement.className = Sucesso;
    }

    if (Rua.value === "") {
      Rua.parentElement.className = Erro;
      Rua.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      Rua.parentElement.className = Sucesso;
    }

    if (Bairro.value === "") {
      Bairro.parentElement.className = Erro;
      Bairro.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      Bairro.parentElement.className = Sucesso;
    }

    if (Cidade.value === "") {
      Cidade.parentElement.className = Erro;
      Cidade.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      Cidade.parentElement.className = Sucesso;
    }

    if (CEP.value === "") {
      CEP.parentElement.className = Erro;
      CEP.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      CEP.parentElement.className = Sucesso;
    }

    if (Dependentes.value !== "") {
      Dependentes.parentElement.className = Sucesso;
    }
    if (Arquivo.value === "") {
      Arquivo.parentElement.className = Erro;
      Arquivo.parentElement.querySelector("small").innerText =
        "Anexe o arquivo";
    } else {
      Arquivo.parentElement.className = Sucesso;
      console.log(Arquivo.value);
    }

    if (Arquivo3.value === "") {
      Arquivo3.parentElement.className = Erro;
      Arquivo3.parentElement.querySelector("small").innerText =
        "Anexe o Arquivo";
    } else {
      Arquivo3.parentElement.className = Sucesso;
    }

    if (
      RG.parentElement.className === Sucesso &&
      CPF.parentElement.className === Sucesso &&
      Nome.parentElement.className === Sucesso &&
      Nascimento.parentElement.className === Sucesso &&
      Telefone.parentElement.className === Sucesso &&
      Rua.parentElement.className === Sucesso &&
      Bairro.parentElement.className === Sucesso &&
      Cidade.parentElement.className === Sucesso &&
      CEP.parentElement.className === Sucesso &&
      Arquivo.parentElement.className === Sucesso &&
      Arquivo3.parentElement.className === Sucesso
    ) {
      e.currentTarget.submit();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="/addbicicleta"
      className={styles.form}
      encType="multipart/form-data"
      method="POST"
    >
      <h1>DADOS DO SOLICITANTE</h1>
      <div className={styles.row}>
        <Input
          type="text"
          text="Nome Completo"
          name="Nome"
          placeholder="Insira o nome do solicitante"
        />
        <Input type="date" text="Data de Nascimento" name="Nascimento" />
      </div>
      <div className={styles.row}>
        <Input type="text" text="RG" name="RG" placeholder="Insira o RG" />
        <Input
          type="text"
          text="CPF"
          name="CPF"
          placeholder="Insira o n° do CPF"
        />
      </div>

      <div className={styles.row}>
        <Input
          type="text"
          text="N° de Telefone"
          name="Telefone"
          placeholder="Insira o numero de telefone"
        />
        <Input type="text" text="CEP" name="CEP" placeholder="Insira o CEP" />
      </div>
      <div className={styles.row}>
        <Input
          type="text"
          text="Nome da Rua e o N° da Casa"
          name="Rua"
          placeholder="Insira o nome da rua e o numero da casa"
        />
        <Input
          type="text"
          text="Bairro"
          name="Bairro"
          placeholder="Insira o bairro"
        />
      </div>
      <div className={styles.row}>
        <Input
          type="text"
          text="Cidade"
          name="Cidade"
          placeholder="Insira a cidade"
        />
        <Input
          type="text"
          text="Informe os Dependentes"
          name="Dependentes"
          placeholder=""
        />
      </div>
      <div className={styles.row}>
        <Input type="file" text="Anexe uma Foto do RG" name="Arquivo" />
        <Input
          type="file"
          text="Anexe uma Foto do Comprovante de Residência"
          name="Arquivo3"
        />
        <div className={styles.form2}>
          <p>Anexe um arquivo PDF contendo os seguintes documentos:</p>
          <ul>
            <li>Foto do RG.</li>
            <li>Comprovante de Residência</li>
          </ul>
        </div>
      </div>
      <SubmitButton text={btnText} />
      <div className={styles.invi}>
        <InputE type="text" text="Erro" name="Erro" />
        <InputS type="text" text="Sucesso" name="Sucesso" />
      </div>
    </form>
  );
}

export default ProjectForm3;
