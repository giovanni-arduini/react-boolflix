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
    overview,
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
      {poster_path ? (
        <img
          className={style.thumbnail}
          src={`${BASE_POSTER_URI}${posterSizes.lg}${poster_path}`}
          alt=""
        />
      ) : (
        <img
          className={style.thumbnail}
          src="src/assets/—Pngtree—movie clapper film_2497117.png"
          alt=""
        />
      )}
      <div className={style.cardBody}>
        <p>
          <strong>Titolo: </strong>
          {title || name}
        </p>
        <p>
          <strong>Titolo originale: </strong>
          {original_title || original_name}
        </p>

        {flagsMap[original_language] ? (
          <img
            src={flagsMap[original_language]}
            style={{ maxWidth: "1.5rem" }}
            alt=""
          />
        ) : (
          original_language
        )}
        <p>
          <strong>Voto: </strong>
        </p>
        <Stars stars={stars} />
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Card;
