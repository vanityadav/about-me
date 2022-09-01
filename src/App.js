import StaticComponents from "./components/StaticComponents";
import CustomPointer from "./components/CustomPointer";
import React, { useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./styles/App.css";
import Projects from "./components/Projects";

function App() {
  const [theme, setTheme] = useState("dark");
  const [customCursor, setCursor] = useState(true);

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
          <StaticComponents
            customCursor={customCursor}
            theme={theme}
            handleTheme={handleTheme}
            handlePointer={handlePointer}
          />
          <NavBar />
          <div className="left-offset">
            <Home />
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
