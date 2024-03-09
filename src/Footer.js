import React from "react";
import { ReactComponent as Logo } from "./images/logo.svg";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="container  p-5 d-footer">
        <Logo fill={"hsl(167, 40%, 24%)"} stroke="hsl(167, 40%, 24%)" />
        <div className="row container ps-5 pe-5 mt-3 mb-3 justify-content-center">
          <div className="col-4">
            <a href="/">About</a>
          </div>
          <div className="col-4">
            <a href="/">Services</a>
          </div>
          <div className="col-4">
            <a href="/">Projects</a>
          </div>
          <div className="row pt-3 justify-content-center">
            <div className="col-2">
              <a href="/">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <i class="fa-brands fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <small className="pt-5 mt-5 footer-text">
        This project was coded by{" "}
        <a href="https://github.com/steffieMD" target="_blank" rel="noreferrer">
          Steffie Metieh
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/steffieMD/sunnyside-landing-page"
          target="_blank"
          rel="noreferrer">
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://sunnyside-website.netlify.app/"
          target="_blank"
          rel="noreferrer">
          hosted on netlify
        </a>
      </small>
    </div>
  );
}
