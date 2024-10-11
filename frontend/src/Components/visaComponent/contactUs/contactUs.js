import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

function ContactUs() {
  return (
    <div>
      {/* Navigation Bar */}
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#003366", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 3, color: "white" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white" }}
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
                color: "white",
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
                color: "white",
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
                color: "white",
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
                  color: "white",
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
            sx={{ ml: 2, color: "white" }}
          >
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Two-part background with centered content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Top half (Blue background) */}
        <Box
          sx={{
            backgroundColor: "#003366",
            flex: "1 0 50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
          }}
        >
          <Box sx={{ maxWidth: "600px" }}>
            <Typography variant="h3" sx={{ marginBottom: "10px", marginTop: "50px" }}>
              Your Queries, Our Priority
            </Typography>
            <p
              style={{
                marginBottom: "200px",
              }}
            >
              Feel free to reach out with any questions or concerns. We’re
              committed to providing quick and helpful responses to ensure your
              experience is smooth and hassle-free.
            </p>
          </Box>
        </Box>

        {/* Card and Image (In the middle, overlapping the top and bottom halves) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-120px", // Pull the content upwards to overlap
            zIndex: 1,
          }}
        >
          <Card
            sx={{
              maxWidth: 500,
              height: "500px",
              background: "linear-gradient(to right, #AB86C9, #9383B6)",
              borderRadius: "20px 0 0 20px",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardActionArea>
              <CardContent>
                {/* Changed text color to white */}
                <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                  Contact Information
                </Typography>
                <Typography variant="body1" sx={{ color: "white" }}>
                  Reach out to us for any inquiries regarding visa applications,
                  processing times, or documentation requirements.
                </Typography>

                <Box sx={{ marginTop: "50px", display: "flex", alignItems: "center" }}>
                  <img
                    src="call.png"
                    alt="Call"
                    style={{ marginRight: "16px" }}
                  />
                  <Typography variant="body2" sx={{ color: "white" }}>
                    +9477 472 7777 <br /> +9477 592 7667
                  </Typography>
                </Box>

                <Box sx={{ marginTop: "50px", display: "flex", alignItems: "center" }}>
                  <img
                    src="message.png"
                    alt="Message"
                    style={{ marginRight: "16px" }}
                  />
                  <Typography variant="body2" sx={{ color: "white" }}>
                    VisaSupport@StudyBridge.com
                  </Typography>
                </Box>

                <Box sx={{ marginTop: "50px", display: "flex", alignItems: "center" }}>
                  <img
                    src="location.png"
                    alt="Location"
                    style={{ marginRight: "16px" }}
                  />
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Colombo, Sri Lanka
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>

          <Box>
            <img
              src="contactImg.jpeg"
              alt="Contact Us"
              style={{
                width: "800px",
                height: "500px",
                borderRadius: "0 20px 20px 0", // Rounded corners on the right side
              }}
            />
          </Box>
        </Box>

        {/* Bottom half (White background) */}
        <Box
          sx={{
            backgroundColor: "white",
            flex: "1 0 50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#333",
            textAlign: "center",
            paddingTop: "50px", // Adjusted to provide spacing after the card
          }}
        >
          <Typography variant="body2" sx={{ maxWidth: "800px" }}>
            We are always ready to assist you with your visa applications and
            other concerns. Connect with us via call, email, or visit our
            office. We are here to make the process easier for you!
          </Typography>
        </Box>
      </Box>

      {/* Footer */}
      <footer className="bg-body-tertiary text-center"
       style={{
        marginTop:"60px"
      }}
      >
        <div className="container p-4 pb-0">
          <section className="mb-4">
            {/* Social media links */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <a className="text-white" href="#ww">
            © 2024 StudyBridge
          </a>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
