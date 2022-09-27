import { useParams } from "react-router-dom";

export function Playlist() {
  const { id } = useParams();

  return (
    <div>
      {id}
    </div>
  );
}
