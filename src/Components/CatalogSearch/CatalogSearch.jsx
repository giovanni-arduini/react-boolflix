import SearchBar from "../SearchBar/SearchBar";
import GlobalContext from "../../Context/GlobalContext";
import { useContext } from "react";

function CatalogSearch() {
  const { mediaList } = useContext(GlobalContext);

  console.log(mediaList);
  return (
    <>
      <SearchBar />
      <div>
        {mediaList.length > 1 &&
          mediaList.map((media) => {
            return (
              <div key={media.id}>
                <h3>{media.title}</h3>
                <p>{media.original_title}</p>
                <p>{media.original_language}</p>
                <p>{media.vote_average}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default CatalogSearch;
