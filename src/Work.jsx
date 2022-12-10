import React from "react";
import "./Work.css";

export default function Work({ work }) {
  const { image, name, technologies, link } = work;
  return (
    <div
      id="worksContainer"
      className="container-fluid row justify-content-center"
    >
      <div id="workContainer">
        <img
          src={image}
          height={300}
          className="card-img-top"
          alt=""
        />

        <div id="description" className="card-body">
          <div>
            <a id="proyectName" target="_blank" href={link}>
              <h4>{name}</h4>
            </a>
          </div>
          <div id="buttons">
            {technologies.map((technology) => (
              <div id="button" key={technology}>
                <p>{technology}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
