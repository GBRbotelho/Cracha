import styles from "./Input.module.css";
import success from "../img/success-icon.svg";
import error from "../img/error-icon.svg";

function Select3({ text, name, option, handleOnChange, value }) {
  function mostrarCampo() {
    var valorSelect = document.querySelector("#Motivo");
    var InputOutros = document.querySelector("#Outro");
    if (valorSelect.value === "Escolha uma opção") {
      InputOutros.parentElement.style.display = "block";
    }
    if (valorSelect.value === "Outro") {
      InputOutros.parentElement.style.display = "block";
    } else if (valorSelect === "Escolha uma opção") {
      InputOutros.parentElement.style.display = "none";
    } else {
      InputOutros.parentElement.style.display = "none";
    }
  }

  return (
    <div className={styles.form_control}>
      <div>
        <label htmlFor={name}>{text}:</label>
        <select
          name={name}
          id={name}
          onChange={mostrarCampo}
          onLoad={mostrarCampo}
        >
          <option selected disabled hidden>
            Escolha uma opção
          </option>
          <option>Funcionario Embrapa</option>
          <option>Parente de militar residente na área da Fazenda</option>
          <option>Funcionário da Escola Viva</option>
          <option>Pensionista</option>
          <option>Fornecedor</option>
          <option>Cessionário</option>
          <option>Membro A.C.T</option>
          <option>Prestador de serviço ao FUSEX</option>
          <option>Membro da U.C.A</option>
          <option>Funcionário civil do Exército</option>
          <option>Membro Grupo de Escoteiro</option>
          <option>Outro</option>
        </select>
        <i>
          <img id="success" src={success} alt="Sucesso" />
        </i>
        <span>
          <img id="error" src={error} alt="Erro" />
        </span>
        <br />
        <small>Error message</small>
      </div>
    </div>
  );
}

export default Select3;
