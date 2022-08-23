import styles from "./Input.module.css";
import success from "../img/success-icon.svg";
import error from "../img/error-icon.svg";

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div id="div" className={styles.form_control_error}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
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

export default Input;
