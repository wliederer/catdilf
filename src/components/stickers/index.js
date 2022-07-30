import React from "react";
import "./index.css";

const Stickers = ({ ...props }) => {
  return (
    <div className="stickers">
      {props.art && props.art.stuff.length > 0
        ? props.art.stuff.map((x, i) => {
            if (
              x &&
              x.split("/")[3] === "stickers" &&
              props.art.names[i - 1].split("|")[0] != ""
            ) {
              return (
                <div key={i}>
                  <div className="tile">
                    <img className="img" src={x} alt="nothing"></img>
                  </div>
                  <div className="stickerTitle">
                    {props.art.names[i - 1].split("|")[0]}
                    {props.art.names[i - 1].split("|")[1]}
                  </div>
                </div>
              );
            }
          })
        : null}
    </div>
  );
};

export default Stickers;
