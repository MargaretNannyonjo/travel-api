import React from "react";
import Articles from "./auth/Articles ";
import AddArticle from "./auth/AddArticle";

export default function Blog() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Articles />
          </div>

          <div className="col-md-4">
            <AddArticle />
          </div>
        </div>
      </div>
    </>
  );
}
