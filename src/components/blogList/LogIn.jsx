import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/blog");
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  };

  return (
    <div
      className="border p-3 bg-light mx-auto logIn"
      style={{ maxWidth: 400 }}
    >
      <h4>Log In</h4>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Type password "
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <br />
        <button className="addComment" onClick={handleLogin} title="login">
          Log In
        </button>
      </div>
    </div>
  );
}
