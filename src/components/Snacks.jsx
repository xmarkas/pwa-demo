import React, { useState, useEffect } from "react";
import { Snackbar, Alert as MuiAlert } from "@mui/material";
import Logo from "../images/cafe_logo2.png";

const Alert = React.forwardRef(function Alert(props, ref) {
  return (
    <MuiAlert
      icon={false}
      elevation={8}
      ref={ref}
      {...props}
      style={{
        backgroundColor: "#4e4e4e",
        border: "2px solid #8bc34a",
        color: "white",
          width: "70%",
          fontFamily: "Roboto Lt",
          fontVariant: "small-caps",
          justifyContent: "center"
      }}
    />
  );
});

const Snacks = ({ fire, endSnack }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (fire) setState(true);
  }, [fire]);

  const handleClose = () => {
    setState(false);
    endSnack();
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={state}
      autoHideDuration={3000}
      onClose={handleClose}
      message={fire}
    >
          <Alert onClose={handleClose}>{fire}</Alert>
    </Snackbar>
  );
};

export default Snacks;
