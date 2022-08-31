import React, { Component, useEffect, useRef } from "react";

function CustomPointer() {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);

    let pageButton = Array.from(document.querySelectorAll(".cursor"));
    pageButton.forEach((element) =>
      element.addEventListener("mouseover", isHoverTrue)
    );
    pageButton.forEach((element) =>
      element.addEventListener("mouseout", isHoverFalse)
    );

    function moveCursor(e) {
      const { pageX: x, pageY: y } = e;
      cursorRef.current.style.left = x - 8 + "px";
      cursorRef.current.style.top = y - 8 + "px";
      cursorRef.current.style.opacity = 1;
      cursorRef.current.style.boxShadow = "0 0 10px 4px #00d5ff";
    }
    function isHoverTrue() {
      cursorRef.current.style.boxShadow = "0 0 10px 10px #00d5ff";
      cursorRef.current.style.opacity = "0.2";
      cursorRef.current.style.backgroundColor = "#00D5FF";
    }

    function isHoverFalse() {
      cursorRef.current.style.opacity = "1";
      cursorRef.current.style.backgroundColor = "white";
    }
    return () => {
      let pageButton = Array.from(document.querySelectorAll(".cursor"));
      pageButton.forEach((element) =>
        element.removeEventListener("mouseover", isHoverTrue)
      );
      pageButton.forEach((element) =>
        element.removeEventListener("mouseout", isHoverFalse)
      );
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return <div className="pointer" ref={cursorRef} />;
}

export default CustomPointer;
