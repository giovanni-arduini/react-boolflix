import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalContext from "./Context/GlobalContext";
import CatalogSearch from "./Components/CatalogSearch/CatalogSearch";
import axios from "axios";

function App() {
  const [mediaList, setMediaList] = useState([]);

  function fetchMedia() {
    axios
      .get(
        "https://api.themoviedb.org/3/search/tv?api_key=138655685094138af87852193ddccc85&query=scrubs"
      )
      .then((res) => setMediaList(res.data.reults));
  }

  useEffect(() => {
    fetchMedia();
  }, []);

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
