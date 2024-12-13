import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";
import style from "./Stars.module.css";

export default function Stars({ stars }) {
  const emptyStars = 5 - stars;
  return (
    <>
      <div className={style.stars}>
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
