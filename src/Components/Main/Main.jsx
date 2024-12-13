// qui ci sarannno gli item list

import { useContext } from "react";
import ItemList from "../ItemList/ItemList";
import GlobalContext from "../../Context/GlobalContext";
import style from "./Main.module.css";

function Main() {
  const { movies, series } = useContext(GlobalContext);

  return (
    <main>
      <ItemList key="movies" title="Movies" items={movies} />
      <ItemList key="series" title="Series" items={series} />
    </main>
  );
}

export default Main;
