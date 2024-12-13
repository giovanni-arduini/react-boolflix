import { useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";

export default function Filters() {
  const { query, setQuery, fetchMedia } = useContext(GlobalContext);

  function onChange(e) {
    setQuery(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    fetchMedia();
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="query">Cerca</label>
      <input
        onChange={onChange}
        valut={query}
        type="text"
        placeholder="Cerca..."
        name="query"
        id="query"
      />

      <button>Cerca!</button>
    </form>
  );
}
