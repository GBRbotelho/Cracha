import styles from "./Button.module.css";

function Button({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  href,
}) {
  return (
    <div id="div" className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <a href={href}>
        <button type={type} name={name} id={name} value={value}>
          Cadastrar
        </button>
      </a>
    </div>
  );
}

export default Button;
