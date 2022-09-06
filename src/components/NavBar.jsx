import React, { useState } from "react";
import me from "../media/images/me.jpg";
import { NavbarLink } from "./StyledComponent";
import github from "../media/images/github.svg";
import linkedin from "../media/images/linkedin.svg";

function NavBar() {
  const items = [
    { title: "About" },
    { title: "Writing" },
    { title: "Contact" },
    { title: "Resume" },
  ];
  const [id, setImageId] = useState(null);

  function changeId() {
    setImageId(id === null ? "image-active" : null);
  }
  return (
    <>
      <nav className="nav-bar">
        <div className="my-image" onClick={changeId}>
          <img id={id} className="cursor" src={me} alt="myimage" />
        </div>
        <div>
          {items.map((item) => (
            <div key={item} className="nav-item cursor">
              <NavbarLink className="text-item" to={`/${item.title}`}>
                {item.title}
              </NavbarLink>
              <div className="text-underline"></div>
            </div>
          ))}
        </div>
        <div className="socials">
          <img
            className="cursor"
            src={github}
            alt="GitHub"
            onClick={() => window.open("https://github.com/vanityadav")}
          />
          <img
            className="cursor"
            src={linkedin}
            alt="LinkedIn"
            onClick={() =>
              window.open("https://www.linkedin.com/in/vanityadav/")
            }
          />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
