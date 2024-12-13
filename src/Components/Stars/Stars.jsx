import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";

export default function Stars({ stars }) {
  const emptyStars = 5 - stars;
  return (
    <>
      <div>
        <p>stars: {stars}</p>
        {Array(stars)
          .fill("")
          .map((_, index) => (
            <div key={index}>
              <FontAwesomeIcon icon={faStar} />
            </div>
          ))}
        {emptyStars &&
          Array(emptyStars)
            .fill("")
            .map((_, index) => (
              <div key={index}>
                <FontAwesomeIcon icon={faEmptyStar} />
              </div>
            ))}
      </div>
    </>
  );
}
