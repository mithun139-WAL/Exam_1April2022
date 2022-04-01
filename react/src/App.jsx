/* eslint-disable object-curly-newline */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// eslint-disable-next-line object-curly-spacing
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import FileUpload from './FileUpload';
import Login from './Login';
import Register from './Register';
import UserRegistration from './UserComponent';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Album
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/upload" className="nav-item nav-link">
                File Upload
              </Link>
              <Link to="/userregister" className="nav-item nav-link">
                User Register
              </Link>
              <Link to="/login" className="nav-item nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-item nav-link">
                Register
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/upload" element={<FileUpload />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/userregister" element={<UserRegistration />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
