import React from "react";
import html from "../media/images/html.svg";
import css from "../media/images/css.svg";
import js from "../media/images/js.svg";
import react from "../media/images/react.svg";
import git from "../media/images/git.svg";
import { useInView } from "react-intersection-observer";

function Skills() {
  const skills1 = [
    { src: html, skill: "HTML" },
    { src: css, skill: "CSS" },
    { src: js, skill: "JS" },
    { src: react, skill: "ReactJS" },
    { src: git, skill: "GIT" },
  ];
  const skills2 = [
    { src: git, skill: "GIT" },
    { src: git, skill: "GIT" },
    { src: git, skill: "GIT" },
    { src: git, skill: "GIT" },
    { src: git, skill: "GIT" },
  ];
  const { ref: skillsRef, inView: Visible } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const { ref: skills1ref, inView: skills1Visible } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <>
      <div className="skills-page">
        <div className="section-title">
          <h1>
            My Skills<div className="center-line"></div>
          </h1>
          <p>
            I create websites that are fast, easy to use, and built with best
            practices.
          </p>
          <p ref={skillsRef}>
            Here are a few technologies I’ve been working with
          </p>
        </div>
        <div className="core-skills">
          {skills1.map((skill) => (
            <div
              ref={skills1ref}
              className={Visible ? "show skill cursor" : "skill cursor"}
            >
              {skill.skill}
              <img className="skill-logo" src={skill.src} alt=""></img>
            </div>
          ))}
        </div>
        <div className="core-skills">
          {skills2.map((skill) => (
            <div
              className={skills1Visible ? "show skill cursor" : "skill cursor"}
            >
              {skill.skill}
              <img className="skill-logo" src={skill.src} alt=""></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
