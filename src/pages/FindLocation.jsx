import React, { useState } from "react";
import { Grid, Paper, Button, Slide } from "@mui/material";
import data from "../js/standData.js";

// https://maps.google.com/maps?daddr=

const FindLocations = () => {
  const [choose, setChoose] = useState(data.stands[1]);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const clickCard = (card) => {
    console.log(navigator.userAgent);
    setChoose(card);
    toggle();
  };

  const ChooseCard = ({ card }) => {
    const address = `${card.street},${card.city},Wa,${card.zip}`;

    const sx = {
      padding: "10px",
      height: "225px",
    };

    const mapsSelector = (address) => {
      if (
        navigator.userAgent.indexOf("iPhone") !== -1 ||
        navigator.userAgent.indexOf("iPad") !== -1 ||
        navigator.userAgent.indexOf("iPod") !== -1
      ) {
        window.open(`maps://maps.google.com/maps?daddr=${address}`);
      } else {
        /* else use Google */
        window.open(`https://maps.google.com/maps?daddr=${address}`);
      }
    };

    return (
      <Slide
        direction="up"
        in={open}
        mountOnEnter
        unmountOnExit
        className="choose-location"
      >
        <Paper elevation={20} sx={sx}>
          <div>
            <h4>{card.street}</h4>
            <h4>
              {card.city}, Wa, {card.zip}
                    </h4>
                    <div>
              <Button
                size="small"
                variant="contained"
                onClick={() => mapsSelector(address)}
                color="primary"
              >
                Map this location
              </Button>
            </div>
            <div>
              <div style={{ marginTop: "10px" }}>
                <h4>HOURS</h4>
                <h5>Monday - Friday: {card.hours.week}</h5>
                <h5>Saturdays: {card.hours.sat}</h5>
                <h5>Sundays: {card.hours.sun}</h5>
              </div>
            </div>
            
            <div className="choose-more-close">
              <Button
                size="small"
                variant="contained"
                onClick={toggle}
                color="error"
              >
                close
              </Button>
            </div>
          </div>
        </Paper>
      </Slide>
    );
  };

  return (
    <div style={{ position: "relative" }}>
      <ChooseCard card={choose} />
      {/* <div className={choose ? "choose-location show": "choose-location"} style={{height: "225px"}}>asdfds</div> */}
      <Grid container id="locations" spacing={1}>
        {data.stands.map((s, i) => {
          return (
            <Grid item xs={6} key={i}>
              <Paper
                elevation={3}
                className="location-card"
                sx={{ backgroundColor: "#24292d" }}
              >
                <h3>GOURMET LATTE {i + 1}</h3>
                <h4>ADDRESS</h4>
                <h5>{s.street}</h5>
                <h5>
                  {s.city}, WA {s.zip}
                </h5>

                <div>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => clickCard(s)}
                  >
                    more
                  </Button>
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default FindLocations;
