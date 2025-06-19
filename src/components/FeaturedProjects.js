import React from "react";
import { Link } from "react-router-dom";

import "./FeaturedProjects.css";

const projects = [
  {
    name: "Dictionary App",
    description:
      "A dictionary app built in React by integrating a dictionary API and an images API.",
    imgSrc: "../assets/images/projects/dictionary_app.JPG",
    sourceCode: "https://github.com/filipanpita/dictionary-reactaddon",
    demo: "https://dictionaryapp-reactproject.netlify.app/",
  },
  {
    name: "Landing Page",
    description: "A landing page built with with responsive tools.",
    imgSrc: "../assets/images/projects/capital.JPG",
    sourceCode: "https://github.com/filipanpita/travel-project",
    demo: "https://shecodes-travelproject.netlify.app/",
  },
  {
    name: "Weather App",
    description:
      "A weather app built by integrating a weather API and using HTML, CSS, and Javascript.",
    imgSrc: "../assets/images/projects/weather_app.JPG",
    sourceCode: "https://github.com/filipanpita/SheCodes_Plus_Weather_App",
    demo: "https://shecodesplusweatherappfinalchallenge.netlify.app/",
  },
];

function FeaturedProjects() {
  return (
    <section className="FeaturedProjects secondary" id="featured-projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <p className="text-center fst-italic">
          Click on the image to view the project!
        </p>
        <div className="row">
          <div id="carouselExampleCaptions" className="carousel slide m-auto">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a
                  href={projects.at(0).demo}
                  title="See Facts Logger"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={projects.at(0).imgSrc}
                    className="d-block w-100"
                    alt={projects.at(0).name}
                  />
                </a>
                <div className="carousel-caption">
                  <h5>
                    {projects.at(0).name}
                    <a
                      href={projects.at(0).sourceCode}
                      title="GitHuh repository"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </h5>
                  <p>{projects.at(0).description}</p>
                </div>
              </div>
              <div className="carousel-item">
                <a
                  href={projects.at(1).demo}
                  title="See Bahay"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={projects.at(1).imgSrc}
                    className="d-block w-100"
                    alt={projects.at(1).name}
                  />
                </a>
                <div className="carousel-caption">
                  <h5>
                    {projects.at(1).name}
                    <a
                      href={projects.at(1).sourceCode}
                      title="GitHuh repository"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </h5>
                  <p>{projects.at(1).description}</p>
                </div>
              </div>
              <div className="carousel-item">
                <a
                  href={projects.at(2).demo}
                  title="See Weather or Not"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={projects.at(2).imgSrc}
                    className="d-block w-100"
                    alt={projects.at(2).name}
                  />
                </a>
                <div className="carousel-caption">
                  <h5>
                    {projects.at(2).name}
                    <a
                      href={projects.at(2).sourceCode}
                      title="GitHuh repository"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </h5>
                  <p>{projects.at(2).description}</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="text-center">
            <Link to="/projects" className="btn-primary mt-3">
              See All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
