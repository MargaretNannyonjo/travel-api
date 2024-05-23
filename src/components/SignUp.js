import React from "react";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
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

    signInWithEmailAndPassword(auth).then((userCredential) => {
      navigate("/");
    });
  };
  return (
    <>
      <div className="user-auth">
        <form onSubmit={handleLogin}>
          <p>Sign Up with Google to continue</p>
          <button
            className="login-with-google-btn"
            onClick={signInWithGoogle}
            title="sign up"
          >
            Sign up with Google
          </button>
          <p>
            You have an account?{" "}
            <Link to="/authentication" title="sign up">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Authentication;
