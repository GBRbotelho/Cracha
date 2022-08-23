import LogoPE from "../img/LogoPE.png";
import styles from "./SucessoBicicleta.module.css";

function SucessoBicicleta() {
  return (
    <div className={styles.cadastro_container}>
      <div>
        <h1>CADASTRADO COM SUCESSO!</h1>
        <h1>
          Sua entrada esta liberada após a entrega dos documentos abaixo na 2ª
          Seção do 11º Pelotão de Polícia do Exército:
        </h1>
        <h1>-Cópia do RG e do Comprovante de Endereço.</h1>
        <h2>AVISOS:</h2>
        <h2>
          Só é permitido transitar pela Av. Soldado Passarinho, no período de
          06:00 às 18:00 horas.
        </h2>
        <h2>Não é permitido acessar as estradas de terra.</h2>
        <img src={LogoPE} />
      </div>
    </div>
  );
}

export default SucessoBicicleta;
