import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";


const steps = [
  {
    label: "Document Upload",
    description:
      "Please upload a scanned copy of your valid visa document. Ensure that the file is clear and includes all necessary details. Accepted formats are PDF, JPEG, and PNG.",
  },
  {
    label: "Visa Application",
    description:
      "Please fill in the following details to complete your visa application. Ensure all information is accurate and matches your official documents.",
  },
  {
    label: "Wait for Decision",
    description:
      "After submitting your visa application, there is a waiting period while your application is processed. You can check the status and see the decision on the designated decision page provided by the embassy or consulate.",
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate(); // Hook for navigation

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div
    style={{
      backgroundColor:"#E6F7FF"
    }}
    >
      {/* Navigation Bar */}
      <AppBar
        position="sticky" // Change position to sticky
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 3, color: "#003366" }} // Dark blue color
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#003366" }}
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
                color: "#003366", // Dark blue color
                "&:hover": {
                  backgroundColor: "orange",
                  color: "white",
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
                color: "#003366", // Dark blue color
                "&:hover": {
                  backgroundColor: "orange",
                  color: "white",
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
                color: "#003366", // Dark blue color
                "&:hover": {
                  backgroundColor: "orange",
                  color: "white",
                },
              }}
            >
              Contact Us
            </Button>

            <Link to="/userdetails">
            <Button
              color="inherit"
              sx={{
                margin: 1,
                minWidth: 120,
                backgroundColor: "transparent",
                color: "#003366", // Dark blue color
                "&:hover": {
                  backgroundColor: "orange",
                  color: "white",
                },
              }}
            >
              Visa manager
            </Button>
            </Link>
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="notifications"
            sx={{ ml: 2, color: "#003366" }} // Dark blue color
          >
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Background Photo */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, #3B2D69 28%, transparent 98%), url('Stu.jpeg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "480px",
          width: "100vw",
          backgroundPosition: "top 18%",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          margin: "0",
        }}
      >
        <div style={{ marginLeft: "40px" }}>
          <h2
            style={{
              fontSize: "40px",
              fontFamily: "sans-serif",
              margin: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            GET YOUR
            <span
              style={{
                fontSize: "80px",
                fontFamily: "sans-serif",
                letterSpacing: "10px",
              }}
            >
              VISA WITH US
            </span>
          </h2>
          <button
            style={{
              height: "50px",
              fontSize: "22px",
              padding: "10px",
              backgroundColor: "orange",
              borderRadius: "10px",
              marginTop: "14px",
              fontFamily: "sans-serif",
              width: "250px",
              color: "white",
              border: "none",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              transition: "background-color 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "darkorange")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "orange")
            }
          >
            Learn more
          </button>
        </div>
      </div>

      {/* Process Navigator */}
      <div
        style={{
          float: "left",
          marginTop: "95px",
          marginLeft: "40px",
        }}
      >
        <h1
          style={{
            fontFamily: "sans-serif",
            fontSize: "35px",
          }}
        >
          Your Visa Application Journey:
          <br /> Follow the Steps and Submit
        </h1>
        <Box sx={{ maxWidth: 400, marginTop: "70px" }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === steps.length - 1 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{
                        mt: 1,
                        mr: 1,
                        backgroundColor: "#0062F0",
                        color: "#fff",
                      }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                    {index === 0 && (
                      <Button
                        variant="contained"
                        onClick={() => navigate("/docupload")}
                        sx={{
                          mt: 1,
                          backgroundColor: "#0062F0",
                          color: "#fff",
                        }}
                      >
                        Document Upload
                      </Button>
                    )}
                    {index === 1 && (
                      <Button
                        variant="contained"
                        onClick={() => navigate("/AddUser")}
                        sx={{
                          mt: 1,
                          backgroundColor: "#0062F0",
                          color: "#fff",
                        }}
                      >
                        Visa Application
                      </Button>
                    )}
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </div>
      <div
        style={{
          marginTop: "102px",
        }}
      >
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "16px",
            textAlign: "right",
            marginRight: "65px",
          }}
        >
          Effortlessly upload your essential visa documents, complete the
          necessary steps in the application process, <br></br>and ensure all
          required information is accurately submitted for smooth and efficient
          processing. Follow each <br></br>step carefully to avoid delays and
          track your progress as you move closer to your visa approval.
        </p>
        <img
          src="uniStu2.jpeg"
          alt="Uni student 2"
          style={{
            borderRadius: "15px",
            width: "940px",
            height: "500px",
            marginTop: "40px",
          }}
        />
      </div>

<div
style={{
  marginTop:"120px",
  textAlign:"center"
}}
>
  <h1>Ultimate Access for Visa Management.</h1>
  <h3>Manage all your visa processes in one place.</h3>
</div>
      <Box
  sx={{
    display: "flex",
    flexWrap: "nowrap", // Ensure cards stay in one row
    marginTop: "60px",
    textAlign: "center",
    padding: "40px",
    
  }}
>
  <div style={{ width: "17%", padding: "0 10px", marginRight: "30px" , marginLeft:"50px"}}>
    <Card
      sx={{
        backgroundColor: "#B5E0B5",
        borderRadius: "20px",
        
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="260"
          image="rule.png"
          alt="Card 1"
        />
      </CardActionArea>
    </Card>
    <h2 style={{ marginTop: "20px" ,fontSize:"18px"}}>Visa Rules</h2>
  </div>

  <div style={{ width: "17%", padding: "0 10px", marginRight: "30px" }}>
    <Card
      sx={{
        backgroundColor: "#F6DBDB",
        borderRadius: "20px",
      }}
    >
      <CardActionArea>
      <Link to="/Tracking">
        <CardMedia
          component="img"
          height="260"
          image="process.png"
          alt="Card 2"
        />
        </Link>
      </CardActionArea>
    </Card>
    <h2 style={{ marginTop: "20px" ,fontSize:"18px"}}>Process Tracking</h2>
  </div>

  <div style={{ width: "17%", padding: "0 10px", marginRight: "30px" }}>
    <Card
      sx={{
        backgroundColor: "#F2E0B4",
        borderRadius: "20px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="260"
          image="country.png"
          alt="Card 3"
        />
      </CardActionArea>
    </Card>
    <h2 style={{ marginTop: "20px" ,fontSize:"18px"}}>Available Countries</h2>
  </div>

  <div style={{ width: "17%", padding: "0 10px", marginRight: "30px" }}>
    <Card
      sx={{
        borderRadius: "20px",
        backgroundColor: "#FCD0FF",
      }}
    >
      <CardActionArea>
      <Link to="/Evisa">
        <CardMedia
          component="img"
          height="260"
          image="download.png"
          alt="Card 4"
        />
        </Link>
      </CardActionArea>
    </Card>
    <h2 style={{ marginTop: "20px" ,fontSize:"18px"}}>Visa Download</h2>
  </div>

  <div style={{ width: "17%", padding: "0 10px" }}>
    <Card
      sx={{
        borderRadius: "20px",
        backgroundColor: "#F2E0B4",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="260"
          image="country.png"
          alt="Card 5"
        />
      </CardActionArea>
    </Card>
    <h2 style={{ marginTop: "20px",fontSize:"18px" }}>Visa Download</h2>
  </div>
</Box>

<footer className="bg-body-tertiary text-center">
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
