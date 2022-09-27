import styles from "../Home.module.css";
import { HeaderHome } from "./HeaderHome";
import { PlaylistCardList } from "./PlaylistCardList";

export function MainHome() {
  const categorias = require("../../../data/db.json").categorias;

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
