import { useState, useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";

function SearchBar() {
  const [mediaTitle, setMediaTitle] = useState("");
  const { fetchMedia } = useContext(GlobalContext);

  function handleFormData(e) {
    setMediaTitle(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchMedia(mediaTitle);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={mediaTitle} onChange={handleFormData} />
        <button>Cerca per titolo</button>
      </form>
    </>
  );
}

export default SearchBar;
