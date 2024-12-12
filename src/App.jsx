import { useState } from "react";
import "./App.css";
import GlobalContext from "./Context/GlobalContext";

function App() {
  return (
    <>
      <GlobalContext.Provider></GlobalContext.Provider>
    </>
  );
}

export default App;
