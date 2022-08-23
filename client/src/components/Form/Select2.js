import styles from "./Select2.module.css";
import success from "../img/success-icon.svg";
import error from "../img/error-icon.svg";

function Select2({ text, name, option, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option selected disabled hidden>
          Escolha uma opção
        </option>
        <option>Civil</option>
        <option>Soldado EV</option>
        <option>Soldado EP</option>
        <option>Cabo</option>
        <option>3º Sargento</option>
        <option>2º Sargento</option>
        <option>1º Sargento</option>
        <option>SubTenente</option>
        <option>Aspirante</option>
        <option>2º Tenente</option>
        <option>1º Tenente</option>
        <option>Capitão</option>
        <option>Major</option>
        <option>Tenente Coronel</option>
        <option>Coronel</option>
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

export default Select2;
