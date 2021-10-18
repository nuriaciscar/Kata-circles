import { useState } from "react";
import "./Circle.css";

function Circle({ key }) {
  const [color, setColor] = useState("grey");

  function handleClick() {
    setColor(color === "grey" ? "yellow" : "grey");
  }

  return <div key={key} className={color} onClick={handleClick}></div>;
}

export default Circle;
