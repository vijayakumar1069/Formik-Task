import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";


import "./navbar.css"
import Viewbooks from "./Viewbooks";
import Viewauthor from "./Viewauthor";
import Editbook from "./Editbook";
import Editauthor from "./Editauthor";

export default function Navbar() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              
              <li>
                <Link to="/viewbooks">VIEW BOOKS</Link>
              </li>
              <li>
                <Link to="/viewauthor">VIEW AUTHOR</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          
          <Route path="/viewbooks" element={<Viewbooks/>}></Route>
          <Route path="/viewauthor" element={<Viewauthor/>}></Route>
          <Route path="/editbook" element={<Editbook/>}></Route>
          <Route path="/editauthor" element={<Editauthor/>}></Route>
        </Routes>
      </Router>
    </>
  );
}
