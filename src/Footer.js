import React from "react";
import { ReactComponent as Logo } from "./images/logo.svg";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="container border">
        <Logo fill={"hsl(168, 34%, 41%)"} stroke="hsl(168, 34%, 41%)" />
        <div className="row">
          <div className="col-4">
            <a href="/">About</a>
          </div>
          <div className="col-4">
            <a href="/">Services</a>
          </div>
          <div className="col-4">
            <a href="/">Projects</a>
          </div>
          <div className="col-3">
            <a href="/">About</a>
          </div>
          <div className="col-3">
            <a href="/">Services</a>
          </div>
          <div className="col-3">
            <a href="/">Projects</a>
          </div>
          <div className="col-3">
            <a href="/">Projects</a>
          </div>
        </div>
        <small>
          This project was coded by{" "}
          <a href="https://github.com/steffieMD" target="_blank">
            Steffie Metieh
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/steffieMD/steff-weather-app.git"
            target="_blank">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://curious-lamington-effc92.netlify.app/"
            target="_blank">
            hosted on netlify
          </a>
        </small>
      </div>
    </div>
  );
}
