import { useEffect, useState } from "react";
import styles from "../Home.module.css";
import { Link } from "react-router-dom";

export function HeaderHome() {
	const [isLogado, setIsLogado] = useState(null);

	function checkIsLogado() {
		return localStorage.getItem("user") !== null;
	}

	function deslogar() {
		localStorage.removeItem("user");
		setIsLogado(checkIsLogado());
	}

	useEffect(() => {
		setIsLogado(checkIsLogado());
	}, []);

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
				{!isLogado ? (
					<>
						<Link to="/cadastro">
							<span className={styles.subscribe_button}> Inscreva-se </span>
						</Link>
						<Link to="/login" className={styles.login_button}>
							{" "}
							Login{" "}
						</Link>
					</>
				) : (
					<>
						<Link to="/editar-cadastro">
							<span className={styles.subscribe_button}> Editar Cadastro </span>
						</Link>
						<Link
							to="/login"
							onClick={() => deslogar()}
							className={styles.subscribe_button}
							type="submit"
						>
							Deslogar
						</Link>
					</>
				)}
			</div>
		</header>
	);
}
