import { useContext } from "react";
import { darkModeContext } from "./darkModeContext";

function Title({ text }) {
  let isDarkMode = useContext(darkModeContext);
  return (
    <h2
      className={`heading ${
        isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;
