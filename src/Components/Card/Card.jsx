// qui stamperemo effettivamente i risultati

import flagsMap from "../../assets/flags";

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

  return (
    <div>
      <h3>{title || name}</h3>
      <p>{original_title || original_name}</p>

      {flagsMap[original_language] ? (
        <img src={flagsMap[original_language]} alt="" />
      ) : (
        original_language
      )}
      <p>{vote_average}</p>
    </div>
  );
}

export default Card;
