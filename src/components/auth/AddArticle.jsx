import { Timestamp, addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { auth, db, storage } from "../../firebase";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

export default function AddArticle() {
  const [isVisible, setIsVisible] = useState(true);
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.image) {
      alert("Please fill the form");
      return;
    }
    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );
    const uploadImage = uploadBytesResumable(storageRef, formData.image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          description: "",
          image: "",
        });
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
            createdBy: user.displayName,
            userId: user.uid,
            likes: [],
            comments: [],
          })
            .then(() => {
              toast("Blog added successfully", { type: "success" });
              setProgress(0);
              setIsVisible(false);
            })
            .catch((err) => {
              toast("Error adding Article", { type: "error" });
            });
        });
      }
    );
  };

  return (
    <div className="logIn">
      {!user ? (
        <div className="fixed">
          <h5>
            <Link to="/login" title="login">
              Login
            </Link>
            {""} to post a Blog
          </h5>
          Don't have an account? {""}
          <Link to="/register" title="register">
            Signup
          </Link>
        </div>
      ) : isVisible ? (
        <div className="fixed-bottom border p-3 bg-light addBlogArticle">
          <h4>Create Blog</h4>
          <button
            className="btn recipe-close-btn"
            onClick={() => setIsVisible(false)}
            title="delete"
          >
            <i className="fas fa-times"></i>
          </button>

          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
          />

          <label>Description</label>
          <textarea
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
          />

          <label>Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="form-control"
            onChange={handleImageChange}
          />
          {progress === 0 ? null : (
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped mt-2"
                style={{ width: `${progress}%` }}
              >
                {`Uploading Image ${progress}%`}
              </div>
            </div>
          )}

          <button
            className="form-control addBlogBtn  mt-2 "
            onClick={handlePublish}
            title="add Blog"
          >
            Add Blog
          </button>
        </div>
      ) : (
        <div className="fixed-bottom">
          <button
            className="blogButton"
            onClick={() => setIsVisible(true)}
            title="create blog"
          >
            Create Blog
          </button>
        </div>
      )}
    </div>
  );
}
