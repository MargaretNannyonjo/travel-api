import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: name });
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
      <h4>Register</h4>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

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
      </div>
      <br />
      <button className="addComment" onClick={handleSignUp} title="register">
        Register
      </button>
    </div>
  );
}
