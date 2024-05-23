import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from "uuid";

export default function Comment({ id }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [currentlyLoggedinUser] = useAuthState(auth);

  useEffect(() => {
    if (!id) {
      console.error("Invalid document ID");
      return;
    }

    const docRef = doc(db, "Articles", id);
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      if (snapshot.exists()) {
        setComments(snapshot.data().comments || []);
      } else {
        console.error("Document does not exist");
      }
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, [id]);

  const handleChangeComment = async (e) => {
    if (e.key === "Enter") {
      await addComment();
    }
  };

  const addComment = async () => {
    if (currentlyLoggedinUser && comment.trim()) {
      try {
        await updateDoc(doc(db, "Articles", id), {
          comments: arrayUnion({
            user: currentlyLoggedinUser.uid,
            userName: currentlyLoggedinUser.displayName,
            comment: comment.trim(),
            createdAt: new Date(),
            commentId: uuidv4(),
          }),
        });
        setComment("");
      } catch (error) {
        console.error("Error adding comment: ", error);
      }
    }
  };

  const handleDeleteComment = async (comment) => {
    try {
      await updateDoc(doc(db, "Articles", id), {
        comments: arrayRemove(comment),
      });
    } catch (error) {
      console.error("Error deleting comment: ", error);
    }
  };

  return (
    <>
      <div>
        <div className="container">
          {comments.length > 0 ? (
            comments.map(
              ({ commentId, user, comment, userName, createdAt }) => (
                <div key={commentId}>
                  <div className="border p-2 mt-2 row">
                    <div className="col-11 comment">
                      <span
                        className={`badge  ${
                          user === currentlyLoggedinUser?.uid
                            ? "bg-success userComments"
                            : "bg-primary userComments"
                        }`}
                      >
                        @{userName}
                      </span>
                      <div className=""> {comment}</div>
                    </div>
                    <div className="col-1 ">
                      {user === currentlyLoggedinUser?.uid && (
                        <button
                          className="trash bg-danger"
                          onClick={() =>
                            handleDeleteComment({
                              commentId,
                              user,
                              comment,
                              userName,
                              createdAt,
                            })
                          }
                        >
                          <i className="fa fa-times "></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <p>No comments yet</p>
          )}

          {currentlyLoggedinUser && (
            <>
              <input
                type="text"
                className="form-control mt-4 formInput"
                placeholder="Add comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyUp={handleChangeComment}
              />
              <button
                className="addComment"
                onClick={addComment}
                title="add comment"
              >
                Add comment
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
