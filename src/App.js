import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Blog from "./components/Blog";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Recipes from "./components/Recipes";
import Authentication from "./components/Authentication";
import SignUp from "./components/SignUp";
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./components/blogList/Register";
import LogIn from "./components/blogList/LogIn";
import Article from "./components/auth/Article";

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("isAuth"));

  return (
    <div className="App">
      <Router>
        <Navbar setIsAuth={setIsAuth} isAuth={isAuth} />

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/authentication"
            element={<Authentication setIsAuth={setIsAuth} />}
          />
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog isAuth={isAuth} />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/contact" element={<Footer />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
