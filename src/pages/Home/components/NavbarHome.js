import { Link } from "react-router-dom";
import styles from "../Home.module.css";

export function NavbarHome() {
	return (
		<aside>
			<img
				className={styles.logo}
				src="../assets/svg/logo.svg"
				alt="Logo do spotify"
			></img>
			<div className={styles.menu_lateral_opcoes}>
				<ul className={styles.menu_principal}>
					<li>
						<img src="../assets/svg/home.svg" alt="Início" />
						<Link to="/">
							<p>Início</p>
						</Link>
					</li>
					<li>
						<img src="../assets/svg/search.svg" alt="Início" />
						<p>Buscar</p>
					</li>
					<li>
						<img src="../assets/svg/library.svg" alt="Início" />
						<Link to="/biblioteca">Sua Biblioteca</Link>
					</li>
				</ul>

				<ul className={styles.menu_utilitario}>
					<li>
						<Link to="/criarplaylist">Criar playlist</Link>
					</li>
					<li>Músicas curtidas</li>
				</ul>
			</div>
		</aside>
	);
}
