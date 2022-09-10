import React, { useEffect, useRef } from "react";

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
      const { clientX: x, clientY: y } = e;
      cursorRef.current.style.left = x - 8 + "px";
      cursorRef.current.style.top = y - 8 + "px";
      cursorRef.current.style.opacity = 1;
    }

    function isHoverTrue() {
      cursorRef.current.style.height = "3vh";
      cursorRef.current.style.width = "3vh";
      cursorRef.current.style.borderRadius = "50%";
      cursorRef.current.style.backgroundColor = "rgba(255,255,255, 0.6)";
      cursorRef.current.style.boxShadow = "0 0 10px 10px rgb(0, 213, 255, 0.4)";
    }

    function isHoverFalse() {
      cursorRef.current.style.height = "2vh";
      cursorRef.current.style.width = "2vh";
      cursorRef.current.style.boxShadow = "0 0 10px 4px #00d5ff";
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
