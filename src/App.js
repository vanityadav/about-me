import CustomPointer from "./components/CustomPointer";
import React, { createContext, useState } from "react";
import StaticComponents from "./components/StaticComponents";
import Home from "./components/Home";
import "./styles/App.css";

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
          <Home />
          <StaticComponents
            customCursor={customCursor}
            theme={theme}
            handleTheme={handleTheme}
            handlePointer={handlePointer}
          />
        </div>
      </div>
    </>
  );
}

export default App;
