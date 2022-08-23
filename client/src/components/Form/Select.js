import styles from "./Select.module.css";
import success from "../img/success-icon.svg";
import error from "../img/error-icon.svg";

function Select({ text, name, option, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option selected disabled hidden>
          Selecione uma opção
        </option>
        <option>Comando da 11ª Brigada de Infantaria Mecanizada</option>
        <option>2º Batalhão Logistico</option>
        <option>2º Companhia de Comunicações Mecanizada</option>
        <option>11º Pelotão de Polícia do Exército</option>
        <option>28º Batalhão de Infantaria Mecanizada</option>
        <option>Posto Médica da Guarnição de Campinas</option>
        <option>Companhia de Comando</option>
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
  );
}

export default Select;
