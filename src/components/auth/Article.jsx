import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { auth, db } from "../../firebase";
import LikeArticle from "./LikeArticle";
import Comment from "./Comment";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      const data = snapshot.data();
      if (data) {
        setArticle({ ...data, id: snapshot.id });
      }
    });
    return () => unsubscribe();
  }, [id]);

  return (
    <div className="container " style={{ height: "auto", marginTop: "10rem" }}>
      {article && (
        <div className="row">
          <div className="col-3">
            <img
              src={article.imageUrl}
              alt={article.title}
              title="blog image"
              style={{ width: "100%", padding: 10, height: "100%" }}
            />
          </div>
          <div className="col-9 mt-3">
            <h3>{article.title}</h3>
            <h6>Author: {article.createBy}</h6>
            <div>Posted on: {article.createdAt.toDate().toDateString()}</div>
            <hr />
            <h5>{article.description}</h5>
            <div className="d-flex flex-row-reverse">
              {user && (
                <LikeArticle id={article.id} likes={article.likes || []} />
              )}
              <div className="pe-2">
                <p>{article.likes ? article.likes.length : 0}</p>
              </div>
            </div>
          </div>
          {/* Comment section */}
          <Comment id={article.id} />
        </div>
      )}
    </div>
  );
}
