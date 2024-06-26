import { useState } from "react";
import Search from "../search/Search";
import Menu from "./Menu";
import styles from "./NavBar.module.css";
import { FaBars } from "react-icons/fa";

function NavBar({ setResults }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu((prevToggle) => !prevToggle);
  };
  return (
    <div className={styles.navbar}>
      <button className={styles.icon} onClick={handleToggleMenu}>
        <FaBars />
      </button>
      {toggleMenu && <Menu />}
      <Search setResults={setResults} />
    </div>
  );
}

export default NavBar;
