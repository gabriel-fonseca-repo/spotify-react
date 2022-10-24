import styles from "../Home.module.css";
import { PlaylistCard } from "./PlaylistCard";

export function PlaylistCardList(props) {
  const playlists = props.playlists;
  const nomeCategoria = props.nome;

  return (
    <div className={styles.music_list_container}>
      <span>
        <h3>{nomeCategoria}</h3>
        <span>VER TUDO</span>
      </span>
      <div className={styles.music_list}>
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            id={playlist.id}
            src={playlist.src}
            alt={playlist.alt}
            title={playlist.title}
            detail={playlist.detail}
            editable={props.editable}
          />
        ))}
      </div>
    </div>
  );
}
