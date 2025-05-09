import React from "react";

const Article = ({ article, posts, setPosts }) => {
  const removePost = (i) => {
    const updatedPosts = posts.filter((post) => {
      return post.id !== i;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between">
          <div className="left">{article.titolo}</div>
          <div className="right">
            <button
              className="btn btn-danger"
              onClick={() => removePost(article.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
              </svg>
            </button>
          </div>
        </h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Scritto da:{" "}
          <a href="#" className="card-link">
            {article.autore}
          </a>{" "}
          in data {article.data}
        </h6>
        <p className="card-text">{article.contenuto}</p>

        <button className="btn btn-success">
          <a href="#" className="text-white text-decoration-none">
            Leggi l'articolo
          </a>
        </button>
      </div>
    </div>
  );
};

export default Article;
