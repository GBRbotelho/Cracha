import Input from "../Form/Input";
import Select from "../Form/Select";
import Select2 from "../Form/Select2";
import SubmitButton from "../Form/SubmitButton";
import styles from "./ProjectForm.module.css";
import React from "react";
import InputE from "../Form/InputE";
import InputS from "../Form/InputS";

function ProjectForm({ btnText }) {
  function handleSubmit(e) {
    e.preventDefault();
    var Erro = document.querySelector("#Erro").parentElement.className;
    var Sucesso = document.querySelector("#Sucesso").parentElement.className;
    var Nome = document.querySelector("#Nome");
    var CPF = document.querySelector("#CPF");
    var RG = document.querySelector("#RG");
    var CNH = document.querySelector("#CNH");
    var Marca = document.querySelector("#Marca");
    var Modelo = document.querySelector("#Modelo");
    var Cor = document.querySelector("#Cor");
    var Placa = document.querySelector("#Placa");
    var PG = document.querySelector("#PG");
    var OM = document.querySelector("#OM");
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
    if (CNH.value === "") {
      CNH.parentElement.className = Erro;
      CNH.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      CNH.parentElement.className = Sucesso;
    }
    if (Marca.value === "") {
      Marca.parentElement.className = Erro;
      Marca.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      Marca.parentElement.className = Sucesso;
    }
    if (Modelo.value === "") {
      Modelo.parentElement.className = Erro;
      Modelo.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      Modelo.parentElement.className = Sucesso;
    }
    if (Cor.value === "") {
      Cor.parentElement.className = Erro;
      Cor.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      Cor.parentElement.className = Sucesso;
    }

    if (Placa.value === "") {
      Placa.parentElement.className = Erro;
      Placa.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      Placa.parentElement.className = Sucesso;
    }

    if (OM.value === "Selecione uma opção") {
      OM.parentElement.className = Erro;
      OM.parentElement.querySelector("small").innerText = "Preencha esse campo";
    } else {
      OM.parentElement.className = Sucesso;
    }

    if (PG.value === "Escolha uma opção") {
      PG.parentElement.className = Erro;
      PG.parentElement.querySelector("small").innerText = "Preencha esse campo";
    } else {
      PG.parentElement.className = Sucesso;
    }

    if (
      OM.parentElement.className === Sucesso &&
      PG.parentElement.className === Sucesso &&
      Placa.parentElement.className === Sucesso &&
      Cor.parentElement.className === Sucesso &&
      Modelo.parentElement.className === Sucesso &&
      Marca.parentElement.className === Sucesso &&
      CNH.parentElement.className === Sucesso &&
      RG.parentElement.className === Sucesso &&
      CPF.parentElement.className === Sucesso &&
      Nome.parentElement.className === Sucesso
    ) {
      e.currentTarget.submit();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="/addcadastro"
      className={styles.form}
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
        <Input type="text" text="CPF" name="CPF" placeholder="Insira o CPF" />
      </div>
      <div className={styles.row}>
        <Input type="text" text="RG" name="RG" placeholder="Insira o RG" />
        <Input
          type="text"
          text="CNH"
          name="CNH"
          placeholder="Insira o n° da CNH"
        />
      </div>
      <div className={styles.row}>
        <Select2 name="PG" text="Posto/Graduação" />
        <Select name="OM" text="OM Vinculado" />
      </div>
      <h1>DADOS DO VEICULO</h1>

      <div className={styles.row}>
        <Input
          type="text"
          text="Marca"
          name="Marca"
          placeholder="Digite a Marca do Veiculo"
        />
        <Input
          type="text"
          text="Modelo"
          name="Modelo"
          placeholder="Digite o Modelo do veiculo"
        />
      </div>
      <div className={styles.row}>
        <Input
          type="text"
          text="Cor"
          name="Cor"
          placeholder="Digite a Cor do Veiculo"
        />
        <Input
          type="text"
          text="Placa"
          name="Placa"
          placeholder="Digite a Placa do Veiculo Ex:ABC-0000"
        />
      </div>

      <SubmitButton text={btnText} />
      <div className={styles.invi}>
        <InputE type="text" text="Erro" name="Erro" />
        <InputS type="text" text="Sucesso" name="Sucesso" />
      </div>
    </form>
  );
}

export default ProjectForm;
