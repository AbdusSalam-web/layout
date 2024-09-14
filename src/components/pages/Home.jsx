import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container ">
          <h1>
            <FontAwesomeIcon icon={faHome} />
            This is the Homepage.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
