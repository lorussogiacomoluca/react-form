import { useState } from "react";
import Header from "./components/header";
import Main from "./components/Main";
import Articles from "./articoli";

function App() {
  const [posts, setPosts] = useState(Articles);
  const [newPostTitle, setNewPostTitle] = useState("");
  return (
    <>
      <Header />
      <Main articles={posts} posts={posts} setPosts={setPosts} />
    </>
  );
}

export default App;
