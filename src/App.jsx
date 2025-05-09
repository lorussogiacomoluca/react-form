import { useState } from "react";
import Header from "./components/header";
import Main from "./components/Main";
import Articles from "./articoli";

function App() {
  return (
    <>
      <Header />
      <Main articles={Articles} />
    </>
  );
}

export default App;
