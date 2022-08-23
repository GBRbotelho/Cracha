import Button from "../Form/Button";
import styles from "./CadastroCivil.module.css";

function CadastroCivil() {
  return (
    <div className={styles.cadastro_container}>
      <Button name="botao" text="Cadastro de Veiculo" href="/veiculo" />
      <Button
        name="botao"
        text="Cadastro de Pessoa a Pé/Bicicleta"
        href="/bicicleta"
      />
    </div>
  );
}

export default CadastroCivil;
