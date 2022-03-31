import React from "react";
import { GiSecretBook } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    console.log(page);
    const tempBtn = e.target.getBoundingClientRect();
    console.log(tempBtn);
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    console.log(center);
    openSubmenu(page, { center, bottom });
  };

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo">
            <GiSecretBook className="nav-logo" />
            <h3 className="logo-text">EBO</h3>
          </div>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <button
            className="link-btn"
            onMouseOut={closeSubmenu}
            onMouseOver={displaySubmenu}
          >
            gallery
          </button>
        </li>
        <li>
          <button
            className="link-btn"
            onMouseOut={closeSubmenu}
            onMouseOver={displaySubmenu}
          >
            news
          </button>
        </li>
        <li>
          <button
            className="link-btn"
            onMouseOut={closeSubmenu}
            onMouseOver={displaySubmenu}
          >
            about
          </button>
        </li>
      </ul>
      <button className="btn signin-btn">Sign in</button>
    </nav>
  );
};

export default Navbar;
