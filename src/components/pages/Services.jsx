import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
    <>
      <div className="services">
        <div className="container">
          <p>
            <FontAwesomeIcon icon={faGear} />
            This is the servicese page.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
