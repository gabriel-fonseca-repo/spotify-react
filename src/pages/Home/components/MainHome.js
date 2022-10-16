import styles from "../Home.module.css";
import { HeaderHome } from "./HeaderHome";
import { PlaylistCardList } from "./PlaylistCardList";

export async function MainHome() {
	const opcoes = {
		crossDomain: true,
		method: "GET",
		mode: "cors",
		headers: {
			"Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
			"Access-Control-Allow-Origin": "*",
		},
	};

	var categorias = require("../../../data/db.json").categorias;
	console.log(categorias);

	return (
		<div className={styles.home_content}>
			<main>
				<HeaderHome />
				<div className={styles.content}>
					{categorias.map((categoria) => (
						<PlaylistCardList
							key={categoria.idcategoria}
							nome={categoria.nome}
							playlists={categoria.playlists}
						/>
					))}
				</div>
			</main>
		</div>
	);
}
