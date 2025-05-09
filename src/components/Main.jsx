import React from "react";
import Article from "./Article";
import Form from "./Form";

const Main = ({ articles, newPostTitle, setNewPostTitle }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
        <div className="col-4">
          <Form newPostTitle={newPostTitle} setNewPostTitle={setNewPostTitle} />
        </div>
      </div>
    </div>
  );
};

export default Main;
