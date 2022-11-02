import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FooterHome } from "../Home/components/FooterHome";
import { HeaderHome } from "../Home/components/HeaderHome";
import { NavbarHome } from "../Home/components/NavbarHome";
import styles from "./CriarPlaylist.module.css";

export function CriarPlaylist() {
	const [msg, setMsg] = useState("");
	const [musicas, setMusicas] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isLogado, setIsLogado] = useState(null);
	const [inputText, setInputText] = useState("");

	const [nomePlaylist, setNomePlaylist] = useState("");
	const [descricao, setDescricao] = useState("");
	const [urlImagem, setUrlImagem] = useState("");
	const [musicasUsuario, setMusicasUsuario] = useState([]);

	const { id } = useParams();
	const isEditar = id !== null && id !== undefined;

	let limparCampos = () => {
		setNomePlaylist("");
		setDescricao("");
		setUrlImagem("");
		setMusicasUsuario([]);
	};

	let checkIsLogado = () => {
		return localStorage.getItem("user") !== null;
	};

	let manusearInput = (e) => {
		var lowerCase = e.target.value.toLowerCase();
		setInputText(lowerCase);
	};

	let showMessage = (message, type) => {
		setMsg({ message, type });
	};

	const musicasFiltradas = musicas.filter((musica) => {
		if (!inputText) {
			return musica;
		} else {
			return musica.nomeMusica.toLowerCase().includes(inputText);
		}
	});

	let cadastrarPlaylist = (e) => {
		if (musicasUsuario == null || !musicasUsuario.length > 0) {
			showMessage("Deve adicionar pelo menos uma música", "error");
			return;
		}

		if (nomePlaylist == null || nomePlaylist === "") {
			showMessage("O nome da playlist é obrigatório", "error");
			return;
		}

		var playlist = {
			src: urlImagem,
			alt: "Imagem",
			title: nomePlaylist,
			detail: descricao,
			musicas: musicasUsuario,
			iduser: JSON.parse(localStorage.getItem("user")).id,
		};

		if (isEditar) {
			const opcoes = {
				crossDomain: true,
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				mode: "cors",
				body: JSON.stringify(playlist),
			};

			fetch(`http://localhost:4000/playlists/${id}`, opcoes)
				.then((res) => {})
				.finally(() => {
					limparCampos();
					showMessage("Playlist atualizada com sucesso!", "success");
				});
		} else {
			const opcoes = {
				crossDomain: true,
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				mode: "cors",
				body: JSON.stringify(playlist),
			};

			fetch(process.env.REACT_APP_URL_API + "/playlists", opcoes)
				.then((res) => {})
				.finally(() => {
					limparCampos();
					showMessage("Playlist cadastrada com sucesso!", "success");
				});
		}
	};

	useEffect(() => {
		setIsLogado(checkIsLogado());

		const opcoes = {
			crossDomain: true,
			method: "GET",
			mode: "cors",
		};

		fetch(process.env.REACT_APP_URL_API + "/musicas", opcoes)
			.then((res) => res.json())
			.then((json) => setMusicas(json))
			.finally(() => {
				setLoading(false);
			});

		if (id !== null && id !== undefined) {
			fetch(process.env.REACT_APP_URL_API + "/playlist/" + id, opcoes)
				.then((res) => res.json())
				.then((playlist) => {
					setNomePlaylist(playlist.title);
					setDescricao(playlist.detail);
					setUrlImagem(playlist.src);
					setMusicasUsuario(playlist.musicas);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [id]);

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
							<div className={styles.primeira_metade}>
								{msg !== "" && (
									<div className={`${styles[msg.type]}  ${styles.msg}`}>
										<p>{msg.message}</p>
										<button onClick={() => setMsg("")}>X</button>
									</div>
								)}
								<input
									type="text"
									className={styles.text_input}
									placeholder="Nome da playlist"
									onChange={(e) => {
										setNomePlaylist(e.target.value);
									}}
									value={nomePlaylist}
									required={true}
								></input>
								<input
									type="text"
									className={styles.text_input}
									placeholder="Descrição da playlist"
									onChange={(e) => {
										setDescricao(e.target.value);
									}}
									value={descricao}
								></input>
								<input
									type="text"
									className={styles.text_input}
									placeholder="URL da imagem"
									onChange={(e) => {
										setUrlImagem(e.target.value);
									}}
									value={urlImagem}
								></input>
								<button
									className={styles.button}
									onClick={(e) => {
										cadastrarPlaylist(e);
									}}
									type="submit"
								>
									Salvar playlist
								</button>
								<ul>
									{musicasUsuario.map((musica, index) => (
										<li className={styles.item_musica_lista} key={index}>
											{musica.nomeMusica}
											<button
												className={styles.botao_adicionar_musica}
												type="button"
												onClick={() => {
													setMusicasUsuario(
														musicasUsuario.filter((a) => a.id !== musica.id)
													);
												}}
											>
												-
											</button>
										</li>
									))}
								</ul>
							</div>
							<div className={styles.segunda_metade}>
								<input
									type="text"
									className={styles.text_input}
									id={"barraPesquisaMusica"}
									onChange={manusearInput}
									placeholder="pesquisar..."
								></input>
								<ul>
									{musicasFiltradas.map((musica, index) => (
										<li className={styles.item_musica_lista} key={index}>
											<button
												className={styles.botao_adicionar_musica}
												type="button"
												onClick={() => {
													if (!musicasUsuario.includes(musica)) {
														setMusicasUsuario([...musicasUsuario, musica]);
													}
												}}
											>
												+
											</button>
											{musica.nomeMusica}
										</li>
									))}
								</ul>
							</div>
						</div>
					)}
				</main>
			</div>
			<FooterHome />
		</div>
	);
}
