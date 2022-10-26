import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navigation.css";
import myLogo from "../media/original.png";

export default function Navigation() {
  return (
    <div className="inner header d-flex justify-content-between align-items-center">
      <Link className="link-unstyled" to={"/"}>
        <div className="navbar-logo">
          <img className="logo-custom-navi" src={myLogo} alt={myLogo} />
          <p3 className="font-logo-navi font-logo-color">Trainr.Space</p3>
        </div>
      </Link>
      <div className="d-flex justify-content-between">
        <Link to={"/AboutUs"}>
          <button className="button-custom-1 m-3">About Us</button>
        </Link>
        <Link to={"/FAQ"}>
          <button className="button-custom-1 m-3 me-5">FAQ</button>
        </Link>
      </div>
    </div>
  );
}
