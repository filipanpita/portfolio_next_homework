import React from "react";

import "./Certifications.css";

const certificates = [
  {
    name: "SheCodes Front-end",
    imgSrc: "/assets/images/certificates/frontend.png",
  },
  {
    name: "SheCodes React Add-On",
    imgSrc: "/assets/images/certificates/react_add-on.png",
  },
  {
    name: "SheCodes React",
    imgSrc: "/assets/images/certificates/react.png",
  },
  {
    name: "SheCodes Responsive Add-On",
    imgSrc: "/assets/images/certificates/responsive_add-on.png",
  },
  {
    name: "SheCodes Responsive",
    imgSrc: "/assets/images/certificates/responsive.png",
  },
  {
    name: "SheCodes Python Advanced",
    imgSrc: "/assets/images/certificates/python_advanced.png",
  },
  {
    name: "SheCodes Python AI",
    imgSrc: "/assets/images/certificates/python_ai.png",
  },
  {
    name: "SheCodes Python Basics",
    imgSrc: "/assets/images/certificates/python_basics.png",
  },
  {
    name: "SheCodes Plus Add-On",
    imgSrc: "/assets/images/certificates/plus_add-on.png",
  },
  {
    name: "SheCodes AI",
    imgSrc: "/assets/images/certificates/ai_add-on.png",
  },
  {
    name: "SheCodes Plus",
    imgSrc: "/assets/images/certificates/plus.png",
  },
  {
    name: "SheCodes Basics Add-On",
    imgSrc: "/assets/images/certificates/basics_add-on.png",
  },
  {
    name: "SheCodes Basics",
    imgSrc: "/assets/images/certificates/basics.png",
  },
];

function Certifications() {
  return (
    <div className="Certifications row m-auto">
      {certificates.map((certificate, index) => (
        <div
          key={index}
          className="certificate col-6 col-sm-4 mt-1 mt-md-4 p-1 p-sm-2"
        >
          <a href={certificate.link} target="_blank" rel="noreferrer">
            <img src={certificate.imgSrc} alt={certificate.name} width="100%" />
          </a>
          <h3 className="text-center mt-2">{certificate.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Certifications;
