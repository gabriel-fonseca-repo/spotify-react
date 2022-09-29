import styles from "../Faq.module.css";
import { Link } from "react-router-dom";

export function HeaderFaq() {
  return (
    <header>
      <div className={styles.logo_container}>
        <Link to="/">
          <img
            className={styles.logo}
            src="/assets/svg/logo.svg"
            alt="Logo do spotify"
          />
        </Link>
      </div>
      <div className={styles.subscribe_login_container}>
        <Link to="/cadastro">
          <span className={styles.subscribe_button}>Inscreva-se</span>
        </Link>
        <span className={styles.login_button}>Entrar</span>
      </div>
    </header>
  );
}
