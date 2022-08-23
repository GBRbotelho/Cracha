import ProjectForm2 from "../project/ProjectForm2";
import styles from "./Civil.module.css";

function Civil() {
  return (
    <div className={styles.cadastro_container}>
      <h1>CADASTRO DE VEICULO:</h1>
      <p>Preencha os dados abaixo</p>
      <ProjectForm2 btnText="Cadastrar" />
    </div>
  );
}

export default Civil;
