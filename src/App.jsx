import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalContext from "./Context/GlobalContext";
import CatalogSearch from "./Components/CatalogSearch/CatalogSearch";
import axios from "axios";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import ItemList from "./Components/ItemList/ItemList";

const BASE_API_URL = "https://api.themoviedb.org/3/search/";

function App() {
  const [mediaList, setMediaList] = useState([]);

  function fetchMedia(mediaTitle) {
    const ulrs = [
      `https://api.themoviedb.org/3/search/movie?api_key=138655685094138af87852193ddccc85&query=${mediaTitle}`,
      ,
      `https://api.themoviedb.org/3/search/tv?api_key=138655685094138af87852193ddccc85&query=${mediaTitle}`,
    ];
    ulrs.map((url) =>
      axios
        .get(url)

        .then((res) => setMediaList(res.data.results))
    );
  }

  useEffect(() => {
    fetchMedia;
  }, []);

  return (
    <>
      <GlobalContext.Provider value={{ fetchMedia, mediaList }}>
        <BrowserRouter>
          <Routes>
            <Route path="" Component={(Main, Header, ItemList)}></Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
