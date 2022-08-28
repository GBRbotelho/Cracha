import LogoPE from "../img/LogoPE.png";
import styles from "./SucessoBicicleta.module.css";

function SucessoCadastro() {
  return (
    <div className={styles.cadastro_container}>
      <div>
        <h1>CADASTRADO COM SUCESSO!</h1>
        <h1>
          Retire o crachá após 10 dias uteis na 2ª Seção do 11º Pelotão de
          Polícia do Exército
        </h1>
        <img src={LogoPE} />
      </div>
    </div>
  );
}

export default SucessoCadastro;
