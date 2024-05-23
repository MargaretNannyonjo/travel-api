import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { doc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";

function LikeArticle({ id, likes }) {
  const [user] = useAuthState(auth);
  const likesRef = doc(db, "Articles", id);

  const handleLike = async () => {
    if (!user) {
      console.error("User is not authenticated");
      return;
    }

    try {
      if (isLiked) {
        await updateDoc(likesRef, { likes: arrayRemove(user.uid) });
        console.log("Unliked");
      } else {
        await updateDoc(likesRef, { likes: arrayUnion(user.uid) });
        console.log("Liked");
      }
    } catch (e) {
      console.error("Error updating likes: ", e);
    }
  };

  // Ensure likes is an array
  const isLiked = Array.isArray(likes) && likes.includes(user?.uid);

  return (
    <div>
      <i
        className={`fa fa-heart${!isLiked ? "-o" : ""} fa-lg`}
        style={{
          cursor: "pointer",
          color: isLiked ? "red" : "black",
        }}
        onClick={handleLike}
        title="like"
      />
    </div>
  );
}

export default LikeArticle;
