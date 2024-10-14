import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import financial from "./financial.jpeg"
import health from "./health.jpeg"
import language from "./language.jpeg"
import passport from "./passport.jpeg"
import proof from "./proof.jpeg"
import work from "./work.jpeg"
import { Link } from "react-router-dom";

function visaRules() {
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
          <Link to="/visa">
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
            </Link>
            
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
            <Link to="/contactUs">
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
            </Link>
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

      <h1
        style={{
          textAlign: "center",
          marginTop: "88px",
        }}
      >
        Comprehensive Guidelines for Visa Application<br></br> Rules and
        Procedures
      </h1>
      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "#E55E5E",
        }}
      >
        Essential Steps for Visa Compliance
      </p>

      <Card
        sx={{ maxWidth: 345, height: "350px" }}
        style={{
          borderRadius: "20px",
          marginLeft: "165px",
          marginTop: "59px",
          float: "left",
          marginRight: "5px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={work}
            alt="green iguana"
          />
        </CardActionArea>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            padding: "20px 20px 0px 20px",
            fontWeight: "bold",
          }}
        >
          Work Restrictions
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#BDBBBB" }}
          style={{
            padding: "0px 20px 0px 20px",
          }}
        >
          Most student visas restrict or limit work during the study period,
          often allowing part-time work
        </Typography>
      </Card>

      <Card
        sx={{ maxWidth: 345, height: "350px" }}
        style={{
          borderRadius: "20px",
          marginLeft: "80px",
          marginTop: "60px",
          float: "left",
          marginRight: "75px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={financial}
            alt="green iguana"
          />
        </CardActionArea>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              padding: "20px 20px 0px 20px",
              fontWeight: "bold",
            }}
          >
            Proof of Financial Support
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#BDBBBB" }}
            style={{
              padding: "0px 20px 0px 20px",
            }}
          >
            Applicants need to show evidence that they have sufficient funds to
            cover costs.
          </Typography>
        
      </Card>

      <Card
        sx={{ maxWidth: 345, height: "350px" }}
        style={{
          borderRadius: "20px",
          marginLeft: "80px",
          marginTop: "77px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={proof}
            alt="green iguana"
          />
        </CardActionArea>
       
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              padding: "20px 20px 0px 20px",
              fontWeight: "bold",
            }}
          >
            Proof of Admission
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#BDBBBB" }}
            style={{
              padding: "0px 20px 0px 20px",
            }}
          >
            Students must provide an official letter of acceptance or enrollment
            from a recognized educational institution in the destination
            country.
          </Typography>
       
      </Card>


   <Card
        sx={{ maxWidth: 345, height: "350px" }}
        style={{
          borderRadius: "20px",
          marginLeft: "165px",
          marginTop: "59px",
          float: "left",
          marginRight: "5px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={health}
            alt="green iguana"
          />
        </CardActionArea>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            padding: "20px 20px 0px 20px",
            fontWeight: "bold",
          }}
        >
         Health Insurance
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#BDBBBB" }}
          style={{
            padding: "0px 20px 0px 20px",
          }}
        >
          Many countries require international students to have comprehensive health insurance during their stay.
        </Typography>
      </Card>

      <Card
        sx={{ maxWidth: 345, height: "350px" }}
        style={{
          borderRadius: "20px",
          marginLeft: "80px",
          marginTop: "60px",
          float: "left",
          marginRight: "75px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={language}
            alt="green iguana"
          />
        </CardActionArea>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              padding: "20px 20px 0px 20px",
              fontWeight: "bold",
            }}
          >
           Language Proficiency
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#BDBBBB" }}
            style={{
              padding: "0px 20px 0px 20px",
            }}
          >
             Students must show proficiency in the official language of the host country through recognized tests like IELTS or TOEFL.
          </Typography>
        
      </Card>

      <Card
        sx={{ maxWidth: 345, height: "350px" }}
        style={{
          borderRadius: "20px",
          marginLeft: "80px",
          marginTop: "60px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={passport}
            alt="green iguana"
          />
        </CardActionArea>
       
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              padding: "20px 20px 0px 20px",
              fontWeight: "bold",
            }}
          >
            Valid Passport
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#BDBBBB" }}
            style={{
              padding: "0px 20px 0px 20px",
            }}
          >
             A valid passport is required, typically for the duration of the course plus an additional 6 months.
            country.
          </Typography>
       
      </Card>

      <footer className="bg-body-tertiary text-center"
      style={{
        marginTop:"40px"
      }}
      >
  {/* Grid container */}
  <div className="container p-4 pb-0">
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#3b5998" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-facebook-f"></i>
      </a>

      {/* Twitter */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#55acee" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-twitter"></i>
      </a>

      {/* Google */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#dd4b39" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-google"></i>
      </a>

      {/* Instagram */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#ac2bac" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-instagram"></i>
      </a>

      {/* Linkedin */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#0082ca" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>

      {/* Github */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#333333" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-github"></i>
      </a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}

  {/* Copyright */}
  <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
    © 2020 Copyright:
    <a className="text-body" href=" StudyBridge">StudyBridge</a>
  </div>
  {/* Copyright */}
</footer>

    </div>
  );
}

export default visaRules;
