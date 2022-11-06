import { useEffect, useState } from "react";
import styles from "../Home.module.css";
import { HeaderHome } from "./HeaderHome";
import { PlaylistCardList } from "./PlaylistCardList";

export function MainHome() {
	const [categorias, setCategorias] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const opcoes = {
			crossDomain: true,
			method: "GET",
			headers: { Accept: "*/*" },
		};

		fetch(process.env.REACT_APP_URL_API + "/categoria/", opcoes)
			.then((res) => res.json())
			.then((json) => setCategorias(json))
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div className={styles.home_content}>
			<main>
				<HeaderHome />
				{loading ? (
					<div className={styles.div_loading}>Carregando...</div>
				) : (
					<div className={styles.content}>
						{categorias.length &&
							categorias.map((categoria) => (
								<PlaylistCardList
									key={categoria.id}
									nome={categoria.nome}
									playlists={categoria.playlists}
								/>
							))}
					</div>
				)}
			</main>
		</div>
	);
}
