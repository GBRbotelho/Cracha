import styles from "./Home.module.css";
import LogoPE from "../img/LogoPE.png";

function Home() {
  return (
    <section className={styles.home_container}>
      <img src={LogoPE}></img>
      <h1>Realize o seu cadastro</h1>
      <p>Comece a gerenciar</p>
    </section>
  );
}

export default Home;
