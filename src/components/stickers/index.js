import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import StripeContainer from "../stripe/StripContainer";

const API_URL = process.env.REACT_APP_API_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

const Stickers = ({ ...props }) => {
  const [art, setArt] = useState(null);

  useEffect(() => {
    const getArt = async () =>
      await axios
        .get(`${API_URL}/art`, { params: { token: TOKEN } })
        .then((data) => {
          setArt(data.data);
        })
        .catch((err) => {
          console.error(err);
        });

    getArt();
  }, []);

  return (
    <div className="stickers">
      {art && art.stuff.length > 0
        ? art.stuff.map((x, i) => {
            if (
              x &&
              x.split("/")[3] === "stickers" &&
              art.names[i - 1].split("|")[0] != ""
            ) {
              return (
                <div key={i}>
                  <div className="tile">
                    <img className="img" src={x} alt="nothing"></img>
                  </div>
                  <div className="stickerTitle">
                    {art.names[i - 1].split("|")[0]}
                    {art.names[i - 1].split("|")[1]}
                  </div>
                </div>
              );
            }
          })
        : null}
      <StripeContainer />
    </div>
  );
};

export default Stickers;
