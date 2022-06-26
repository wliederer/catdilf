import React from "react";
import "./index.css";

const Art = ({ ...props }) => {
  return (
    <div className="art">
      {props.art && props.art.stuff.length > 0
        ? props.art.stuff.map((x, i) => {
            if (x && x.split("/")[3] === "art") {
              return (
                <>
                  <div key={i} className="tile">
                    <img className="img" src={x} alt="nothing"></img>
                  </div>
                  <div className="stickerTitle">
                    {props.art.names[i - 1].split("|")[0]}
                    {props.art.names[i - 1].split("|")[1]}
                  </div>
                </>
              );
            }
          })
        : null}
    </div>
  );
};

export default Art;
