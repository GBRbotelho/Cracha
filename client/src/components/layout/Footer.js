import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaFacebook />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>11° Pelotão de Polícia do Exército</span> &copy;
      </p>
    </footer>
  );
}
export default Footer;
