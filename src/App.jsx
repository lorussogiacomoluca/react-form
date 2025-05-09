import { useState } from "react";
import Header from "./components/header";
import Main from "./components/Main";
import Articles from "./articoli";

function App() {
  const [newPostTitle, setNewPostTitle] = useState("");
  return (
    <>
      <Header />
      <Main
        articles={Articles}
        newPostTitle={newPostTitle}
        setNewPostTitle={setNewPostTitle}
      />
    </>
  );
}

export default App;
