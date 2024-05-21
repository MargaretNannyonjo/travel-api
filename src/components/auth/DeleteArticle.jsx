import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "../../firebase";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";

const DeleteArticle = ({ id, imageUrl }) => {
  const handleDelete = async () => {
    if (window.confirm("Are you sure, you want to delete this post?")) {
      try {
        // Deleting Firestore document
        await deleteDoc(doc(db, "Articles", id));
        toast("Blog deleted Successfully", { type: "success" });

        // Deleting the associated image from Storage
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef);
      } catch (error) {
        toast("Error deleting blog", { type: "error" });
        console.error(error);
      }
    }
  };

  return (
    <div>
      <button
        className="bg-danger addComment"
        onClick={handleDelete}
        style={{ cursor: "pointer" }}
      >
        Delete post
      </button>
    </div>
  );
};

export default DeleteArticle;
