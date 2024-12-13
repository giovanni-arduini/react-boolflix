// qui stamperemo effettivamente i risultati

import flagsMap from "../../assets/flags";
import Stars from "../Stars/Stars";
import style from "./Card.module.css";

function Card({ item }) {
  const {
    name,
    original_name,
    title,
    original_title,
    original_language,
    vote_average,
    poster_path,
  } = item;

  const BASE_POSTER_URI = "https://image.tmdb.org/t/p/";

  const posterSizes = {
    sm: "w92",
    md: "w185",
    lg: "w500",
  };

  const stars = Math.ceil(parseInt(+vote_average) / 2);

  return (
    <div className={style.card}>
      <img
        className={style.thumbnail}
        src={`${BASE_POSTER_URI}${posterSizes.lg}${poster_path}`}
        alt=""
      />
      <h3>{title || name}</h3>
      <p>{original_title || original_name}</p>

      {flagsMap[original_language] ? (
        <img
          src={flagsMap[original_language]}
          style={{ maxWidth: "1.5rem" }}
          alt=""
        />
      ) : (
        original_language
      )}
      <p>{vote_average}</p>
      <Stars stars={stars} />
    </div>
  );
}

export default Card;
