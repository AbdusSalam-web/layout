import React from "react";
import { nav } from "../Data";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <nav>
        <div className="container navbar ">
          <div className="logo">
            <Link  to='/' >
              LUSTRE <span>LIFE</span>
            </Link>
          </div>
          <ul className="navlink">
            {nav.map((list, index) => {
              return (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
