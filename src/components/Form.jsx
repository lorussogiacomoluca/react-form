import React, { useState } from "react";

const Form = ({ posts, setPosts }) => {
  const [newPostTitle, setNewPostTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPosts = [...posts, { titolo: newPostTitle }];
    setPosts(updatedPosts);
    setNewPostTitle("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="newArticleInput" className="form-label">
            Titolo nuovo articolo
          </label>
          <input
            required
            type="text"
            value={newPostTitle}
            className="form-control"
            id="newArticleInput"
            placeholder="Inserisci il titolo del nuovo articolo"
            onChange={(e) => {
              setNewPostTitle(e.target.value);
            }}
          />
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
