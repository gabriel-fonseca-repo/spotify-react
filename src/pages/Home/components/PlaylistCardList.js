import styles from "../Home.module.css";
import { PlaylistCard } from "./PlaylistCard";

export function PlaylistCardList(props) {
  const playlists = props.playlists;
  const playlistElements = playlists.map((playlist) => {
    return (
      <PlaylistCard 
        key={playlist.index}
        src={playlist.src}
        alt={playlist.alt}
        title={playlist.title}
        detail={playlist.detail}
      ></PlaylistCard>
    );
  });

  return (
    <div className={styles.music_list_container}>
      <header>
        <h3>Spotify Playlists</h3>
        <span>VER TUDO</span>
      </header>
      <div className={styles.music_list}>{playlistElements}</div>
    </div>
  );
}
