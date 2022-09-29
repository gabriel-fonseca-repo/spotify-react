import styles from "../Home.module.css";
import { Link } from "react-router-dom";

export function HeaderHome() {
  return (
    <header>
      <div className={styles.navigation_container}>
        <img src="../assets/svg/back.svg" alt="Voltar" />
        <img src="../assets/svg/next.svg" alt="Voltar" />
      </div>
      <div className={styles.subscribe_login_container}>
        <Link to="/faq">
          <span className={styles.subscribe_button}> Dúvidas frequentes </span>
        </Link>
        <Link to="/cadastro">
          <span className={styles.subscribe_button}> Inscreva-se </span>
        </Link>
        <span className={styles.login_button}> Entrar </span>
      </div>
    </header>
  );
}
