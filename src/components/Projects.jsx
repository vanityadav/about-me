import React, { Component } from "react";
import Project from "./Project";

function Projects() {
  return (
    <>
      <div className="projects-page">
        <div className="section-title">
          <h1>
            My Projects<div className="center-line"></div>
          </h1>
          <p>Some Things I’ve Built</p>
        </div>
        <Project />
        <div></div>
      </div>
    </>
  );
}

export default Projects;
