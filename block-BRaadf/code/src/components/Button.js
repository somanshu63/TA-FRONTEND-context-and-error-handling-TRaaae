import React from "react";
import { useContext } from "react";
import { darkModeContext } from "./darkModeContext";

export default function SwitchButton({ changeMode }) {
  let isDarkMode = useContext(darkModeContext);
  return (
    <button
      className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
