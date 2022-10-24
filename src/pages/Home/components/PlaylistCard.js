import { Link } from "react-router-dom";
import styles from "../Home.module.css";

export function PlaylistCard(props) {
  return (
    <div>
      <Link
        className={styles.playlist_card_link}
        to={"/playlist/" + props.id}
      >
        <div className={styles.music_list_card}>
          <img src={props.src} alt={props.alt} />
          <div className={styles.card_details}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.detail}>{props.detail}</div>
          </div>
        </div>
      </Link>
      
      {props.editable ? (
        <Link to={"/criarplaylist/" + props.id}>
          editar
        </Link>
      ) : (
        <></>
      )}

    </div>
  );
}
