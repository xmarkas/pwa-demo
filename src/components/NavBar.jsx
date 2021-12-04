import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/cafe_logo512.png";
import Back2 from "../images/shots.jpg";
import Back1 from "../images/gl-hp-pic.jpg";
import { Box } from "@mui/material";

const NavBar = (props) => {
  const routeInfo = useLocation().pathname;
  const [shrinkValue, setShrinkValue] = useState(135);

  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position);

    if (position > 100) {
      setShrinkValue(50);
    } else {
      setShrinkValue(135);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rndImage = () => {
    if (Date.now() % 2 === 0) {
      return Back1;
    } else {
      return Back2;
    }
  };

  return (
    <div className="nav-container" style={{ backgroundImage: `url(${Back2})` }}>
      <Box className="nav-logo">
        <img src={Logo} alt="" style={{ height: shrinkValue + "px" }} />
      </Box>
      <nav className="nav-shrink">
        <ul>
          <li>
            <Link to={routeInfo.length > 1 ? "/" : "/locations"}>
                          {routeInfo.length > 1 ? "Home" : "Find Location"}
            </Link>
          </li>
          <li>
          <Link to={routeInfo.includes("menu") ? "/locations" : "/menu"}>
                          {routeInfo.includes("menu") ? "Find Location" : "Food & Drink"}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
