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
            return <p key={media.id}>{media.title}</p>;
          })}
      </div>
    </>
  );
}

export default CatalogSearch;
