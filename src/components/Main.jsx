import React from "react";
import Article from "./Article";

const Main = (props) => {
  const { articles } = props;

  return (
    <div className="container">
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </div>
  );
};

export default Main;
