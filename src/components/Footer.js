import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="contact-box">
        <h3>Reach out!</h3>
        <div className="social-links d-flex justify-content-center mt-4">
          <a href="mailto:filipanpita@gmail.com" title="Email">
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/filipapita/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/filipanpita"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div className="text-center mt-3">
        This website was coded by Filipa Pita 👩‍💻 and is{" "}
        <a
          href="https://github.com/filipanpita/portfolio_next_homework"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code on GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://filipanpita.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netifly
        </a>
        .
      </div>
    </footer>
  );
}

export default Footer;
