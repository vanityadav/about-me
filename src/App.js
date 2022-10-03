import "./styles/App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Scroll from "./components/Scroll";
import Projects from "./components/Projects";
import { Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CustomPointer from "./components/CustomPointer";
import StaticComponents from "./components/StaticComponents";
import Contact from "./components/Contact";
import Submit from "./components/Submit";

function App() {
  const [theme, setTheme] = useState("");
  const [customCursor, setCursor] = useState(true);

  useEffect(() => {
    let userTheme = window.localStorage.getItem("theme");
    let userCursor = window.localStorage.getItem("customCursor");
    setTheme(userTheme ? userTheme : "light");
    setCursor(JSON.parse(userCursor) ? JSON.parse(userCursor) : true);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
    window.localStorage.setItem("customCursor", customCursor);
  }, [theme, customCursor]);

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  function handlePointer() {
    setCursor(customCursor === false ? true : false);
  }

  return (
    <>
      <div id={theme} className={"pointer-" + customCursor}>
        <div className="background-div">
          {customCursor && <CustomPointer />}
          <Scroll />
          <StaticComponents
            customCursor={customCursor}
            theme={theme}
            handleTheme={handleTheme}
            handlePointer={handlePointer}
          />
          <NavBar />

          <div className="site-content">
            <Link to="/submit">Submit</Link>
            <Routes>
              <Route path="/submit" element={<Submit />} />
            </Routes>
            <Home />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
