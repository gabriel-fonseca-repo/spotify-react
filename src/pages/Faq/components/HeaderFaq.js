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
        <a className={styles.subscribe_button} href="#">
          {" "}
          Inscreva-se{" "}
        </a>
        <a className={styles.login_button} href="#">
          {" "}
          Entrar{" "}
        </a>
      </div>
    </header>
  );
}
