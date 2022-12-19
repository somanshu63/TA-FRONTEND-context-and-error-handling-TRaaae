import { useContext } from "react";
import { darkModeContext } from "./darkModeContext";

function Header() {
  let isDarkMode = useContext(darkModeContext);
  return (
    <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
