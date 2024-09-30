import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from '../../../assets/empty.json'

export const Home = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [applicationID, setApplicationID] = useState();

  const getApplications = (UserID) => {
    setApplications([]);
    axios
      .post(
        "http://localhost:5000/auth/get",
        {
          UserEmail: UserID,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.status == "success") {
          setApplications(response.data.user);
        }
      })
      .catch(() => {});
  };
  const deleteApplications = (UserID) => {
    axios
      .post(
        "http://localhost:5000/auth/delete",
        {
          UserID: UserID,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        Swal.fire({
          title: "Deleted!",
          text: "Your application has been deleted.",
          icon: "success",
        });
        console.log(response.data);
        setApplications([]);
        // getApplications(applicationID)
      })
      .catch(() => {});
  };

  useEffect(() => {
    // getApplications("103");
  }, [applications]);
  return (
    <div className="homeContainer">
      <div className="middleContainer">
        <span className="homeTitle">Search Your Applications</span>
        <div className="panels">
          <div className="searchForm">
            <div className="inputItem">
              <span className="inputBanner">User Email</span>
              <div className="inputFeild">
                <input
                  className="inputText"
                  type="text"
                  placeholder=""
                  required
                  value={applicationID}
                  onChange={(event) => setApplicationID(event.target.value)}
                />
                <span>{applicationID ? "" : "Enter your email"}</span>
              </div>
            </div>
            <button
              type="submit"
              //   className="searchBTN"
              className="button"
              onClick={() => {
                if (applicationID) {
                  getApplications(applicationID);
                }
              }}
            >
              Search
            </button>
          </div>
          <div className="rightPanel">
            <span className="rightHead">Applications</span>
            <br></br>

            {applications.length == 0 ? (
              <div>
                <Player
                  autoplay
                  loop
                  src={animationData}
                  style={{ height: "300px", width: "300px" }}
                />
              </div>
            ) : (
              applications.map((application) => {
                return (
                  <div className="itemContainer">
                    <div className="itemDetails">
                      <span>
                        <b>Application ID:</b> {application.UserID}
                      </span>
                      <span>
                        <b>Name:</b>{" "}
                        {application.UserFirstName +
                          " " +
                          application.UserLastName}
                      </span>
                    </div>
                    <div className="itemActions">
                      <button
                        className="actionDLT"
                        onClick={() =>
                          navigate("/workersupdate", { state: application })
                        }
                      >
                        View
                      </button>
                      <button
                        className="actionDLT"
                        onClick={() => {
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              deleteApplications(application.UserID);
                            }
                          });
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;