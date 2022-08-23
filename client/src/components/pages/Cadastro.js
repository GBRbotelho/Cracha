import ProjectForm from "../project/ProjectForm";
import styles from "./Cadastro.module.css";

function Cadastro() {
  return (
    <div className={styles.cadastro_container}>
      <h1>CADASTRO DE VEICULO:</h1>
      <p>Preencha os dados abaixo</p>
      <ProjectForm btnText="Cadastrar" />
    </div>
  );
}

export default Cadastro;
