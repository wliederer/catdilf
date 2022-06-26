import React from "react";
import { NavLink } from "react-router-dom";
import "./links.css";

const Links = ({ ...props }) => {
  return (
    <ul className="linksComp">
      {props.links.length > 0
        ? props.links.map((link) => (
            <React.Fragment key={link.value}>
              <li className="navItem">
                <NavLink
                  to={link.path}
                  className="linkItem"
                  onClick={() => link.setShowBar(false)}
                >
                  <div className="icon">{link.icon}</div>
                  <div>{link.value}</div>
                </NavLink>
              </li>
            </React.Fragment>
          ))
        : "🤷  Not in Use 🤷 "}
    </ul>
  );
};

export default Links;
