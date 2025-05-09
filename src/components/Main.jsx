import React from "react";
import Article from "./Article";
import Form from "./Form";

const Main = ({ articles, posts, setPosts }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
        <div className="col-4">
          <Form posts={posts} setPosts={setPosts} />
        </div>
      </div>
    </div>
  );
};

export default Main;
