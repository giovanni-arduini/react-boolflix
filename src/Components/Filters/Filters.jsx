import { useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";

export default function Filters() {
  const { query, setQuery } = useContext(GlobalContext);

  function onChange(e) {
    setQuery(e.target.value);
  }

  return (
    <form>
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
