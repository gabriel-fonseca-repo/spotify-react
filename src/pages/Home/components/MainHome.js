import styles from "../Home.module.css";
import { HeaderHome } from "./HeaderHome";
import { PlaylistCardList } from "./PlaylistCardList";

export function MainHome() {
  const playlists = require("./../../../data/playlists.json").playlists;

  return (
    <div className={styles.home_content}>
      <main>
        <HeaderHome></HeaderHome>
        <div className={styles.content}>
          <PlaylistCardList playlists={playlists}></PlaylistCardList>

          <PlaylistCardList playlists={playlists}></PlaylistCardList>

          <PlaylistCardList playlists={playlists}></PlaylistCardList>
        </div> 
      </main>
    </div>
  );
}
