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
      <footer style={{ backgroundColor: '#f8f9fa', textAlign: 'center', padding: '20px 0' }}>
      {/* Grid container */}
      <div style={{ padding: '20px 0' }}>
        {/* Section: Social media */}
        <section style={{ marginBottom: '20px' }}>
          {/* Facebook */}
          <a
            href="#!"
            role="button"
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              margin: '5px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: '18px',
              backgroundColor: '#3b5998',
            }}
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter */}
          <a
            href="#!"
            role="button"
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              margin: '5px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: '18px',
              backgroundColor: '#55acee',
            }}
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* Google */}
          <a
            href="#!"
            role="button"
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              margin: '5px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: '18px',
              backgroundColor: '#dd4b39',
            }}
          >
            <i className="fab fa-google"></i>
          </a>

          {/* Instagram */}
          <a
            href="#!"
            role="button"
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              margin: '5px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: '18px',
              backgroundColor: '#ac2bac',
            }}
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* Linkedin */}
          <a
            href="#!"
            role="button"
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              margin: '5px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: '18px',
              backgroundColor: '#0082ca',
            }}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* Github */}
          <a
            href="#!"
            role="button"
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              margin: '5px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: '18px',
              backgroundColor: '#333333',
            }}
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div
        style={{
          textAlign: 'center',
          padding: '15px',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
        }}
      >
        © 2020 Copyright:
        <a
          href="https://yourwebsite.com"
          style={{ color: '#000', textDecoration: 'none', marginLeft: '5px' }}
        >
          StudyBridge
        </a>
      </div>
      {/* Copyright */}
    </footer>

    </div>
  );
}

export default visaRules;
