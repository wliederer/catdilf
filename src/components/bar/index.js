import React from "react";
import "./index.css";
import ClickAwayListener from "react-click-away-listener";
import { GiCat } from "react-icons/gi";
import { FaStickerMule } from "react-icons/fa";
import Links from "./links";

const links = {
  tools: [
    { value: "About Me", path: "/", icon: <GiCat /> },
    { value: "Stickers", path: "/stickers", icon: <FaStickerMule /> },
  ],
};

const Bar = ({ ...props }) => {
  if (!props.showBar) {
    return null;
  }

  return (
    <ClickAwayListener onClickAway={() => props.setShowBar(false)}>
      <nav className="bar">
        <div className="block">
          <Links links={links.tools} setShowBar={props.setShowBar} />
        </div>
      </nav>
    </ClickAwayListener>
  );
};

export default Bar;
