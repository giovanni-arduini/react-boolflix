import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalContext from "./Context/GlobalContext";
import CatalogSearch from "./Components/CatalogSearch/CatalogSearch";

function App() {
  const [movieList, setMovieList] = useState([]);

  return (
    <>
      <GlobalContext.Provider value="">
        <BrowserRouter>
          <Routes>
            <Route path="" Component={CatalogSearch}></Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
