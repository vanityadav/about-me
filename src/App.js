import StaticComponents from "./components/StaticComponents";
import CustomPointer from "./components/CustomPointer";
import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./styles/App.css";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Scroll from "./components/Scroll";
import { Route, Routes } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("dark");
  const [customCursor, setCursor] = useState(true);

  useEffect(() => {
    let userTheme = window.localStorage.getItem("theme");
    let userCursor = window.localStorage.getItem("customCursor");
    setTheme(userTheme ? userTheme : "dark");
    setCursor(JSON.parse(userCursor));
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
            <Home />
            <Skills />
            <Projects />
            {/* <Routes >
              <Route path=""   element={}>     </Route>
            </Routes> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
