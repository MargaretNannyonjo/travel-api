import React from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

const Authentication = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      })
      .catch((error) => {
        // Handle authentication errors
        if (error.code === "auth/popup-closed-by-user") {
          console.error("Authentication popup was closed by the user.");
        } else {
          // Other authentication errors
          console.error("Error signing in with Google:", error.message);
        }
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in:", error.message);
      });
  };

  return (
    <div className="user-auth">
      <form onSubmit={handleLogin}>
        <p className="paragraph-top">Sign In with Google to continue</p>

        <div className="btn-container">
          <button className="login-with-google-btn" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
        </div>

        <p className="paragraph-bottom">
          Don't have an account? <Link to="/signup">SignUp</Link>
        </p>
      </form>
    </div>
  );
};

export default Authentication;
