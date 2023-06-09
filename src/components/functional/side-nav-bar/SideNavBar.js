import { navData } from "./navData";
import "./SideNavBar.css";
import { FiMenu, FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import DarkModeSlider from "../dark-mode-slider/DarkModeSlider";

export default function SideNav() {
  const [open, setopen] = useState(false);
  const toggleOpen = () => {
    setopen(!open);
  };

  return (
    <div>
      <div className="Side-nav-button-container">
        <FiMenu
          size="23px"
          className="Menu-btn"
          onClick={toggleOpen}
          color="var(--primary_color)"
        />
      </div>
      <div className={open ? "Nav-menu" : "Nav-menu-closed"}>
        <FiArrowLeft
          size="23px"
          className="Close-menu=btn"
          onClick={toggleOpen}
          color="var(--primary_color)"
        />
        {navData.map((item) => {
          return (
            <div key={item.id} className="Nav-item">
              <Link to={`${item.link}`} onClick={toggleOpen}>
                {item.text.toUpperCase()}
              </Link>
            </div>
          );
        })}
        <DarkModeSlider />
      </div>
    </div>
  );
}
