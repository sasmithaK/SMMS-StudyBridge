import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Style/menu.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts/posts")
      .then((response) => {
        setUniversities(response.data.existingPosts);
      })
      .catch((error) => {
        console.error("There was an error fetching the universities!", error);
      });
  }, []);

  return (
    <div>
      <Header></Header>

      {universities.length === 0 ? (
        <p>No universities registered yet.</p>
      ) : (
        <div className="gallery">
          {universities.map((uni) => (
            <div style={{ marginTop: "3%" }} className="content" key={uni._id}>
              <br />
              <h2 style={{ fontWeight: "bold" }}>{uni.uniName}</h2>
              <img
                className="card-img"
                src={uni.image}
                alt="University Image"
              />
              <br />
              <p>
                <strong>Uni Rank:</strong> {uni.rank}
              </p>
              <p>
                <strong>Location:</strong> {uni.location}
              </p>{" "}
              {/* Fixed to show location */}
              <p>
                <strong>Contact:</strong> {uni.contact}
              </p>
              <p>
                <strong>About</strong>
                <br /> {uni.description}
              </p>
              <br />
              <button type="button" className="btn1">
                {" "}
                Apply
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Menu;
