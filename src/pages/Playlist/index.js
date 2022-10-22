import styles from "./Playlist.module.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function Playlist() {

  const [playlist, setPlaylist] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const opcoes = {
      crossDomain: true,
      method: "GET",
      mode: "cors",
    };

    fetch("http://localhost:4000/playlists/" + id, opcoes)
      .then(res => res.json())
      .then(json => setPlaylist(json))
     /* .finally(() => {
        setLoading(false);
      });*/
  }, []);

  window.onload = () => {
    document.querySelectorAll("audio[id]").forEach((audio) => {
      audio.volume = document.getElementById("volume-slider").value / 100;
    });
  };

  return (
    <div className={styles.container}>
      <Link to="/">
        <div className={styles.logo_container}>
          <img
            className={styles.logo}
            src="../assets/svg/logo.svg"
            alt="Logo do spotify"
          ></img>
        </div>
      </Link>

      <div className={styles.playlist_container}>
        {loading ? (
          <div className={styles.div_loading}>Carregando...</div>
        ) : (
          <>
            <div className={styles.album_cover_container}>
              <img
                alt="Album Cover"
                src={playlist.src}
                className={styles.album_cover}
              />
              <div>{playlist.title}</div>
            </div>
            <div className={styles.detalhes_playlist}>
              <ul className={styles.music_list}>
                <li>
                  <input
                    type="range"
                    id="volume-slider"
                    onChange={() => {
                      document.querySelectorAll("audio[id]").forEach((audio) => {
                        audio.volume =
                          document.getElementById("volume-slider").value / 100;
                      });
                    }}
                  />
                </li>
                {playlist.musicas.map((ms, index) => (
                  <li className={styles.titulo_musica} key={ms.idmusica}>
                    <audio id={"musica-" + ms.idmusica}>
                      <source src={ms.src} />
                    </audio>

                    <button
                      className={styles.pause_button}
                      type="button"
                      onClick={() => {
                        document.getElementById("musica-" + ms.idmusica).pause();
                      }}
                    >
                      <img
                        className={styles.pause_button_img}
                        src="../assets/svg/pause-button.svg"
                        alt="Pause"
                      ></img>
                    </button>

                    <button
                      className={styles.play_button}
                      type="button"
                      onClick={() => {
                        document.querySelectorAll("audio[id]").forEach((audio) => {
                          audio.pause();
                        });
                        document.getElementById(
                          "musica-" + ms.idmusica
                        ).currentTime = 0;
                        document.getElementById("musica-" + ms.idmusica).play();
                      }}
                    >
                      <img
                        className={styles.play_button_img}
                        src="../assets/svg/play-button.svg"
                        alt="Play"
                      ></img>
                    </button>

                    <div className={styles.music_index}>{index + 1 + "."}</div>

                    <div className={styles.music_detail}>
                      <div>{ms.nomeMusica}</div>
                      <div>{ms.nomeArtista}</div>
                    </div>
                    <div>{ms.duracao}</div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
