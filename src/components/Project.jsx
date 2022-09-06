import React from "react";
import mytodo from "../media/images/mytodo.png";
import github from "../media/images/github-project.svg";
import website from "../media/images/website.png";
import { NavbarLink } from "./StyledComponent";
import { Link } from "react-router-dom";

function Project() {
  const projects = [
    {
      id: 1,
      img: mytodo,
      techUsed: "HTML CSS JS  ReactJS",
      title: "My ToDo",
      info: "This was made as a part of huge project",
      url: "/helloUrl",
      gitUrl: "/gitUrl",
    },
    {
      id: 1,
      img: mytodo,
      techUsed: "HTML CSS JS  ReactJS",
      title: "Fun Translator",
      info: "This was made as a part of huge project",
      url: "/helloUrl",
      gitUrl: "/gitUrl",
    },
  ];
  return (
    <>
      <div className="projects">
        {projects.map((project) => (
          <div className="project-box">
            <div className="project-inner-box">
              <div className="project-design">
                <div className="project-top">
                  <div>
                    <Link className="text-item" to={project.url}>
                      <img
                        className="project-image"
                        src={project.img}
                        alt=""
                      ></img>
                    </Link>
                  </div>
                  <div className="project-tech-used">
                    <p>{project.techUsed}</p>
                  </div>
                </div>
                <div className="project-info-all">
                  <div className="project-title">{project.title}</div>
                  <div className="project-info">
                    <p>{project.info}</p>
                  </div>
                  <div className="project-links">
                    <NavbarLink className="text-item" to={project.url}>
                      <img
                        className="cursor links"
                        src={website}
                        alt="Webpage"
                      ></img>
                    </NavbarLink>
                    <NavbarLink className="text-item" to={project.gitUrl}>
                      <img
                        className="cursor links"
                        src={github}
                        alt="Github"
                      ></img>
                    </NavbarLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
