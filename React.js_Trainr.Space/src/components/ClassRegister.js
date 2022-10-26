import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

import image_registerClass from "../media/registerClass.png";
import myLogo from "../media/original.png";
import "./styles/ClassRegister.css";

export default function ClassRegister() {
  const [classCode, setClassCode] = useState("");

  let navigate = useNavigate();

  return (
    <>
      <div className="m-block-classReg container-lg d-flex flex-column justify-content-between align-items-center mt-3 text-center">
        <div className="card-group ">
          <div className="card left-side bg-transparent border-0 mt-5 ">
            <img src={image_registerClass} alt={image_registerClass}></img>
          </div>

          <div className="card right-side rounded border-0 bg-transparent mt-3">
            <li className=" list-group-item bg-transparent border-0 rounded">
              <div className="font-logo-classReg font-logo-color">
                <img className="logo-registerClass" src={myLogo} alt={myLogo} />
                Trainr.Space
              </div>
            </li>

            <li className="list-group-item bg-custom-1 d-flex flex-column rounded align-items-center">
              <div className="card-text font-main">Let's Get Started</div>
              <div className="card-text font-text-sub">
                Please Type the Class Code below.
              </div>

              <Input
                className="input-style-registerClass"
                placeholder="ClassCode"
                onChange={(e) => setClassCode(e.target.value)}
              />

              <button
                type="button"
                className="button-search border-0 rounded"
                size="lg"
                onClick={() => navigate("ClassPage/" + classCode)}
              >
                Search
              </button>
              <button type="button" className="button-QRcode border-0 rounded">
                Scan QR Code
                <br></br>*Coming Soon*
              </button>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
