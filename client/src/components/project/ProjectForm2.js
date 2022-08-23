import Input from "../Form/Input";
import Input2 from "../Form/Input2";
import Select3 from "../Form/Select3";
import SubmitButton from "../Form/SubmitButton";
import styles from "./ProjectForm.module.css";
import React from "react";
import InputE from "../Form/InputE";
import InputS from "../Form/InputS";

function ProjectForm2({ btnText }) {
  function handleSubmit(e) {
    e.preventDefault();
    var Erro = document.querySelector("#Erro").parentElement.className;
    var Sucesso = document.querySelector("#Sucesso").parentElement.className;
    var Nome = document.querySelector("#Nome");
    var Data = document.querySelector("#Nascimento");
    var CPF = document.querySelector("#CPF");
    var RG = document.querySelector("#RG");
    var CNH = document.querySelector("#CNH");
    var Categoria = document.querySelector("#Categoria");
    var Empresa = document.querySelector("#Empresa");
    var Telefone = document.querySelector("#Telefone");
    var Endereço = document.querySelector("#Endereço");
    var Bairro = document.querySelector("#Bairro");
    var Cidade = document.querySelector("#Cidade");
    var CEP = document.querySelector("#CEP");
    var Marca = document.querySelector("#Marca");
    var Modelo = document.querySelector("#Modelo");
    var Cor = document.querySelector("#Cor");
    var Placa = document.querySelector("#Placa");
    var PG = document.querySelector("#PG");
    var OM = document.querySelector("#OM");
    var Motivo = document.querySelector("#Motivo");
    var Outro = document.querySelector("#Outro");
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

    if (Data.value === "") {
      Data.parentElement.className = Erro;
      Data.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      Data.parentElement.className = Sucesso;
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

    if (Categoria.value === "") {
      Categoria.parentElement.className = Erro;
      Categoria.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      Categoria.parentElement.className = Sucesso;
    }
    if (Empresa.value === "") {
      Empresa.parentElement.className = Erro;
      Empresa.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      Empresa.parentElement.className = Sucesso;
    }

    if (Telefone.value === "") {
      Telefone.parentElement.className = Erro;
      Telefone.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      Telefone.parentElement.className = Sucesso;
    }

    if (Endereço.value === "") {
      Endereço.parentElement.className = Erro;
      Endereço.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      Endereço.parentElement.className = Sucesso;
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

    if (Motivo.value === "Escolha uma opção") {
      Motivo.parentElement.className = Erro;
      Outro.parentElement.className = Erro;
      Motivo.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else if (Motivo.value === "Outro" && Outro.value === "") {
      Motivo.parentElement.className = Erro;
      Outro.parentElement.className = Erro;
      Outro.parentElement.querySelector("small").innerText =
        "Preencha esse campo";
    } else {
      Motivo.parentElement.className = Sucesso;
      Outro.parentElement.className = Sucesso;
    }

    if (
      Placa.parentElement.className === Sucesso &&
      Cor.parentElement.className === Sucesso &&
      Modelo.parentElement.className === Sucesso &&
      Marca.parentElement.className === Sucesso &&
      CNH.parentElement.className === Sucesso &&
      RG.parentElement.className === Sucesso &&
      CPF.parentElement.className === Sucesso &&
      Nome.parentElement.className === Sucesso &&
      Data.parentElement.className === Sucesso &&
      Categoria.parentElement.className === Sucesso &&
      Empresa.parentElement.className === Sucesso &&
      Telefone.parentElement.className === Sucesso &&
      Endereço.parentElement.className === Sucesso &&
      Bairro.parentElement.className === Sucesso &&
      Cidade.parentElement.className === Sucesso &&
      CEP.parentElement.className === Sucesso &&
      Outro.parentElement.className === Sucesso
    ) {
      e.currentTarget.submit();
    }

    console.log(CEP.value);
    console.log(Data.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="/addcivil"
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
          text="CNH"
          name="CNH"
          placeholder="Insira o n° da CNH"
        />
        <Input
          type="text"
          text="Categoria"
          name="Categoria"
          placeholder="Insira a categoria da CNH"
        />
      </div>
      <div className={styles.row}>
        <Input
          type="text"
          text="Empresa que trabalha"
          name="Empresa"
          placeholder="Insira o nome da empresa em que trabalha"
        />
        <Input
          type="text"
          text="N° de Telefone"
          name="Telefone"
          placeholder="Insira o numero de telefone"
        />
      </div>
      <div className={styles.row}>
        <Input
          type="text"
          text="Endereço de sua residencia"
          name="Endereço"
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
        <Input type="text" text="CEP" name="CEP" placeholder="Insira o CEP" />
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
      <h1>MOTIVO DA SOLICITAÇÃO</h1>
      <div className={styles.row}>
        <Select3 text="Motivo" name="Motivo" />
        <Input2
          type="text"
          text="Informe o motivo"
          name="Outro"
          placeholder="Digite Aqui"
        />
      </div>
      <div className={styles.invi}>
        <InputE type="text" text="Erro" name="Erro" />
        <InputS type="text" text="Sucesso" name="Sucesso" />
      </div>
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm2;
