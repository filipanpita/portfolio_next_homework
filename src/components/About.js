import React from "react";

import "./About.css";

function About() {
  return (
    <section className="About" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="card">
              <img
                src="./assets/images/school.svg"
                alt="New Jersey City University"
                className="img-fluid mb-1 p-5"
              />
              <div className="card-body">
                <h5 className="card-title">Education 👩🏽‍🎓</h5>
                <p className="card-text">
                I have a Biomedical Sciences bachelor and am finishing my master's in Forensic Sciences.
                </p>
                <p className="card-text">
                  I find programming and tech very interesting. Additionally, I think that it is very benefitial in science research.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="card">
              <img
                src="./assets/images/coding.svg"
                alt="Coding"
                className="img-fluid mb-1 p-2"
              />
              <div className="card-body">
                <h5 className="card-title">Coding Passions 👩🏽‍💻</h5>
                <p className="card-text">
                  It has been amazing learning what it's like to create something
                  through code, and I can't wait to work on more projects!
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="card">
              <img
                src="./assets/images/hobby-art.svg"
                alt="Hobbies"
                className="img-fluid mb-1 p-3"
              />
              <div className="card-body">
                <h5 className="card-title">Hobbies 🧚🏽‍♀️</h5>
                <p className="card-text">
                  Coding is already a hobbie that I trully enjoy,
                  but other than that I also enjoy reading, taking
                  nature walks, and drawing (even though I'm not good).
                </p>
                <p className="card-text">
                  🎶 I love listening to music and dancing silly in
                  the privacy of my room.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
