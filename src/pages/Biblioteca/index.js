import { useEffect, useState } from "react";
import { FooterHome } from "../Home/components/FooterHome";
import { HeaderHome } from "../Home/components/HeaderHome";
import { NavbarHome } from "../Home/components/NavbarHome";
import { PlaylistCardList } from "../Home/components/PlaylistCardList";
import styles from "./Biblioteca.module.css";

export function Biblioteca() {
	const [playlists, setPlaylists] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isLogado, setIsLogado] = useState(null);

	let checkIsLogado = () => {
		return localStorage.getItem("user") !== null;
	};

	useEffect(() => {
		var isLogadoLocal = checkIsLogado();
		setIsLogado(isLogadoLocal);

		if (isLogadoLocal) {
			const opcoes = {
				crossDomain: true,
				method: "GET",
				mode: "cors",
			};

			fetch(
				process.env.REACT_APP_URL_API +
					"/playlists?iduser=" +
					JSON.parse(localStorage.getItem("user")).id,
				opcoes
			)
				.then((res) => res.json())
				.then((json) => setPlaylists(json))
				.finally(() => {
					setLoading(false);
				});
		}
	}, []);

	return (
		<div className={styles.container}>
			<NavbarHome />
			<div className={styles.cadastro_playlist_container}>
				<main>
					<HeaderHome />
					{!isLogado ? (
						<div className={styles.div_loading}>Non estás logado !</div>
					) : loading ? (
						<div className={styles.div_loading}>Carregando...</div>
					) : (
						<div className={styles.content}>
							<PlaylistCardList
								key={1}
								nome={"Suas playlists"}
								playlists={playlists}
								editable={true}
							/>
						</div>
					)}
				</main>
			</div>
			<FooterHome />
		</div>
	);
}
