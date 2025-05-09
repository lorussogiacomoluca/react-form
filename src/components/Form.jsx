import React, { useState } from "react";

const Form = ({ posts, setPosts }) => {
  const [newPostTitle, setNewPostTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newPostTitle);
    const updatedPosts = [...posts, { titolo: newPostTitle }];
    console.log(updatedPosts);
    setPosts(updatedPosts);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="newArticleInput" className="form-label">
            Titolo nuovo articolo
          </label>
          <input
            type="text"
            className="form-control"
            id="newArticleInput"
            placeholder="Inserisci il titolo del nuovo articolo"
            onChange={(e) => {
              setNewPostTitle(e.target.value);
            }}
          />
          {newPostTitle}
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Inserisci
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
