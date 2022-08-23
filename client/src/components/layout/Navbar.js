import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../img/LogoPE.png";
import logobda from "../img/LogoBDA.png";

function Navbar() {
  return (
    <nav>
      <nav className={styles.navbar}>
        <div>
          <Link to="/">
            <img src={logo} alt="11° Pel PE" width="130" height="150" />
          </Link>
        </div>
        <div className={styles.texto}>
          <h4>
            Exército Brasileiro - Comando Militar do Sudeste - 2ª Divisão de
            Exército - 11ª Brigada de Infantaria Mecanizada
          </h4>
          <h1>11° Pelotão de Polícia do Exército</h1>
        </div>
        <div>
          <Link to="/">
            <img src={logobda} alt="11° Pel PE" width="130" height="150" />
          </Link>
        </div>
      </nav>
      <nav className={styles.navbarb}>
        <div></div>
        <div className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
              <Link to="/cadastrocivil">Cadastro</Link>
            </li>
            <li className={styles.item}>
              <Link to="/login">Login</Link>
            </li>
            <li className={styles.item}>
              <Link to="/registro">Registro</Link>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
}

export default Navbar;
