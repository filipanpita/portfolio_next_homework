import React from "react";
import { ReactTyped } from "react-typed";

import "./Header.css";

function Header() {
  return (
    <div className="Header" id="header">
      <div className="row">
        <div className="col">
          <h1>
            I'm Filipa Pita, <br />a{" "}
            <span className="special-text">
              <ReactTyped
                strings={[
                  "biomedical scientist.",
                  "forensic scientist.",
                  "forensic toxicologist.",
                  "junior front-end developer.",
                ]}
                startDelay={200}
                typeSpeed={50}
                backSpeed={40}
              />
            </span>
          </h1>
          <p className="mt-3">
            I love to research, explore, and code and create things. I am open
            to always learn more about what interests me and can help me
            progress in life. Let's build something interesting!
          </p>
          <a
            href="./#contact"
            className="btn-primary me-1 me-sm-3"
            title="Contact Filipa Pita"
          >
            Contact Me
          </a>
          <a
            href="./#featured-projects"
            className="btn-secondary"
            title="Browse Projects"
          >
            Browse Projects
          </a>
        </div>
        <div className="col-5 d-none d-lg-block">
          <img
            src="./assets/images/Fotografia1.jpg"
            alt="Filipa Pita"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
