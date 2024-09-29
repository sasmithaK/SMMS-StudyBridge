import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";

function processTracking() {
  
  return (
    <div
    style={{
      backgroundColor: "#F4F7FB",
    }}
    >
    <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#0091EA", // Background color
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 3, color: "#FFFFFF" }} // White icon color for contrast
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#FFFFFF" }} // White text color for contrast
          >
            Study Bridge
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }}>
            <Button
              color="inherit"
              sx={{
                margin: 1,
                minWidth: 120,
                backgroundColor: "transparent",
                color: "#FFFFFF", // White text color
                "&:hover": {
                  backgroundColor: "orange", // Orange hover background
                  color: "white", // Maintain white text on hover
                },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{
                margin: 1,
                minWidth: 160,
                backgroundColor: "transparent",
                color: "#FFFFFF", // White text color
                "&:hover": {
                  backgroundColor: "orange", // Orange hover background
                  color: "white", // Maintain white text on hover
                },
              }}
            >
              Visa Guidance
            </Button>
            <Button
              color="inherit"
              sx={{
                margin: 1,
                minWidth: 120,
                backgroundColor: "transparent",
                color: "#FFFFFF", // White text color
                "&:hover": {
                  backgroundColor: "orange", // Orange hover background
                  color: "white", // Maintain white text on hover
                },
              }}
            >
              Contact Us
            </Button>
            
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="notifications"
            sx={{ ml: 2, color: "#FFFFFF" }} // White icon color
          >
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default processTracking
