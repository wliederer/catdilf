import React from "react";
import { FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";

const Header = ({ ...props }) => {
  const handleMobileClick = (showBar, setShowBar) => {
    if (showBar) {
      return;
    } else {
      setShowBar(true);
    }
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="menuTrigger">
          <button
            className="hamburger"
            disabled={props.showBar}
            onClick={() => handleMobileClick(props.showBar, props.setShowBar)}
          >
            <FaHamburger />
          </button>
        </div>
        <Link to="/" className="headerLink">
          <div className="headerTitle">Bills Art Website</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
