import React from "react";

const Article = ({ article }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{article.titolo}</h5>
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
