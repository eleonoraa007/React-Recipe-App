import { useEffect, useRef, useState } from "react";
import Search from "../search/Search";
import Menu from "./Menu";
import styles from "./NavBar.module.css";
import { FaBars } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleToggleMenu = () => {
    setToggleMenu((prevToggle) => !prevToggle);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.navbar}>
      <button
        className={styles.icon}
        ref={buttonRef}
        onClick={handleToggleMenu}
      >
        {!toggleMenu ? <FaBars /> : <RiCloseLargeLine />}
      </button>
      {toggleMenu && (
        <div ref={menuRef}>
          <Menu />
        </div>
      )}
      <Search />
    </div>
  );
}

export default NavBar;
