import React from "react";
import Articles from "./auth/Articles ";
import AddArticle from "./auth/AddArticle";

export default function Blog() {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "6rem", height: "auto", width: "80%" }}
      >
        <h5
          style={{ textAlign: "center", marginTop: "7rem", fontSize: "1.6rem" }}
        >
          Tales from the Road : Journey Journals
        </h5>
        <AddArticle />
        <div className="row">
          <div className="col-md-12">
            <Articles />
          </div>

          {/* <div className="col-md-4">
            <AddArticle />
          </div> */}
        </div>
      </div>
    </>
  );
}
