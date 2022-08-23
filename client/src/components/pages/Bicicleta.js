import ProjectForm3 from "../project/ProjectForm3";
import styles from "./Bicicleta.module.css";

function Registro() {
  return (
    <div className={styles.cadastro_container}>
      <ProjectForm3 btnText="Cadastrar" />
    </div>
  );
}

export default Registro;
