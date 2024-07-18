import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Nav = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "black", marginBottom: "30px" }}
    >
      <Toolbar>
        <Box
          sx={{ flexGrow: 1, display: "flex", justifyContent: "space-around" }}
        >
          <Typography variant="body1" color="white">
            Products
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
