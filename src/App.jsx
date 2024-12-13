import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalContext from "./Context/GlobalContext";
import axios from "axios";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import ItemList from "./Components/ItemList/ItemList";

const BASE_API_URL = "https://api.themoviedb.org/3/search/";
const API_KEY = "138655685094138af87852193ddccc85";

function App() {
  const [mediaList, setMediaList] = useState([]);

  const [movies, setMovies] = useState([]);

  const [series, setSeries] = useState([]);

  const [query, setQuery] = useState([]);

  function fetchMedia(mediaTitle) {
    // const ulrs = [
    //   `https://api.themoviedb.org/3/search/movie?api_key=138655685094138af87852193ddccc85&query=${mediaTitle}`,
    //   ,
    //   `https://api.themoviedb.org/3/search/tv?api_key=138655685094138af87852193ddccc85&query=${mediaTitle}`,
    // ];
    // ulrs.map((url) =>
    axios
      .get(`${BASE_API_URL}movie`, {
        params: {
          api_key: API_KEY,
          query,
        },
      })

      .then((res) => setMovies(res.data.results))

      .catch((err) => {
        console.error(err);
        setMovies([]);
      });

    axios
      .get(`${BASE_API_URL}tv`, {
        params: {
          api_key: API_KEY,
          query,
        },
      })

      .then((res) => {
        const mappedSeries = res.data.results.map((item) => {
          return {
            ...item,
            title: item.name,
            original_title: item.original_name,
          };
        });
        setSeries(res.data.results);
      })

      .catch((err) => {
        console.error(err);
        setSeries([]);
      });
    // );
  }

  useEffect(() => {
    fetchMedia;
  }, []);

  return (
    <>
      <GlobalContext.Provider
        value={{ fetchMedia, mediaList, movies, series, query, setQuery }}
      >
        <Header />
        <Main />
        {/* <BrowserRouter>
          <Routes>
            <Route path="" Component={(Main, Header, ItemList)}></Route>
          </Routes>
        </BrowserRouter> */}
      </GlobalContext.Provider>
    </>
  );
}

export default App;
