import React from "react";
import "./App.css"
import emily from "./images/image-header.jpg"

export default function Header(){
    return (
        <div className="Header header-color">
            <nav className="navbar navbar-expand-lg header-color fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
        <span className="header-logo">sunnyside</span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">
      <i className="fas fa-bars p-1"></i>
      </span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <a className="nav-link" href="/">About</a>
        <a className="nav-link" href="/">Services</a>
        <a className="nav-link" href="/">Projects</a>
        <a className="nav-link active border border-0 rounded-pill" aria-current="page" href="/">Contact</a>

      </div>
    </div>
  </div>
</nav>
<h1>WE ARE CREATIVES</h1>
<img src={emily} alt="smiley face" className="img-fluid"/>
        </div>
    )
}
