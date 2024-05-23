import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";

function BlogList() {
  const [blogList, setBlogList] = useState([]);
  const blogCollectionRef = collection(db, "Blog-data");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(blogCollectionRef);
      setBlogList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "Blog-data", id);
    await deleteDoc(postDoc);
  };
  return (
    <>
      <div className="blogList">
        {blogList.map((post) => {
          return (
            <div className="post">
              <div className="postHeader">
                <div className="title">
                  <h3>{post.title}</h3>
                </div>

                <div className="deletePost">
                  {post.author.id === auth.currentUser.uid && (
                    <button onClick={() => deletePost(post.id)} title="delete">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  )}
                </div>
              </div>

              <div className="postTextContainer">{post.blogpost}</div>
              <h3 className="postName">@{post.author.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default BlogList;
