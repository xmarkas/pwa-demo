import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const FootBar = () => {
  return (
    <footer id="foot-bar">
      <Grid container>
        <Grid item xs={6}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="About"></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Contact"></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Locations"></ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Careers"></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Gift Cards"></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Media"></ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </footer>
  );
};

export default FootBar;
