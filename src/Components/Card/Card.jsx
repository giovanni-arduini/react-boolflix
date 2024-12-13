// qui stamperemo effettivamente i risultati

function Card({ item }) {
  const { title, original_title, original_language, vote_average } = item;

  return (
    <div>
      <h3>{title}</h3>
      <p>{original_title}</p>
      <p>{original_language}</p>
      <p>{vote_average}</p>
    </div>
  );
}

export default Card;
