import React from "react";
import { Grid } from "@mui/material";

const TileCards = ({ message }) => {
  return (
    <Grid className="tile-cards" item xs={6}>
      {message.top && (
        <div>
          <h4>{message.top}</h4>
          <h3>{message.bottom}</h3>
        </div>
      )}
      {!message.top && (
        <div
          className="img-card"
          style={{
            backgroundImage: `url(${message.image})`,
            backgroundPosition: message.position,
            maxWidth: "100%",
          }}
        >
          {/* <img src={message} /> */}
        </div>
      )}
    </Grid>
  );
};

export default TileCards;
