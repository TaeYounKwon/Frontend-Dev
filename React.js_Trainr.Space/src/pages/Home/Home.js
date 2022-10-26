import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import ClassRegister from "../../components/ClassRegister.js";
import ClassCard from "../../components/ClassCard.js";
import myTrainer from "../../media/trainer.png";
import myLogo from "../../media/original.png";
import UserHeader from "../../components/UserHeader.js";

import "./Home.css";

export default function Home({ isAuthenticated, user, userClasses, getUser }) {
  const [classCode, setClassCode] = useState("");

  let navigate = useNavigate();
  return isAuthenticated ? (
    <div className=" d-flex flex-column justify-content-between align-items-center text-center">
      {user != null ? (
        <div>
          <div className="UserHeader">
            <UserHeader user={user} />
          </div>

          {Object.keys(userClasses).length > 0 ? (
            <div className=" container-lg d-flex flex-column justify-content-between align-items-center text-center">
              <div className="card-group m-block-subscribe">
                <div className="card left-side-subscribe bg-transparent border-0">
                  <li className=" list-group-item bg-transparent border-0 rounded">
                    <div className="font-logo-subscribe font-logo-color">
                      <img
                        className="logo-subscribe"
                        src={myLogo}
                        alt={myLogo}
                      />
                      Trainr.Space
                    </div>
                  </li>

                  <li className="list-group-item bg-custom-1 d-flex flex-column rounded align-items-center">
                    <div className="card-text font-main">Let's Get Started</div>
                    <div className="card-text font-text-sub">
                      Please Type the Class Code below.
                    </div>

                    <Input
                      className="input-style-subscribe"
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
                    <button
                      type="button"
                      className="button-QRcode border-0 rounded"
                    >
                      Scan QR Code
                      <br></br>*Coming Soon*
                    </button>
                  </li>
                </div>
                <div className="card right-side-subscribe rounded border-0 bg-transparent mt-3">
                  <div className="headerClasses">Class List</div>
                  <div className="listClasses">
                    {Object.values(userClasses).map((course, key) => (
                      <ClassCard classID={course.classID} key={key} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <ClassRegister />
          )}
        </div>
      ) : (
        <div>
          Loading...
          {setInterval(getUser(), 50000)}
        </div>
      )}
    </div>
  ) : (
    <div className="m-block container-lg align-middle d-flex flex-column justify-content-between align-items-center mt-3 text-center">
      <div className="card-group ">
        <div className="card left-side bg-transparent border-0 mt-5 ">
          <img src={myTrainer} alt={myTrainer}></img>
        </div>

        <div className="card right-side rounded border-0 bg-transparent mt-3">
          <li className="list-group-item bg-transparent border-0 rounded">
            <img
              className="w-50 logo-custom-home align-self-center "
              src={myLogo}
              alt={myTrainer}
            />
            <h1 className="font-text-logo font-logo-color">Trainr.Space</h1>
          </li>

          <li className="list-group-item bg-custom-1 rounded">
            <div className="card-text font-text-main mt-5">
              Welcome to Trainr.Space
            </div>
            <div className="card-text font-custom-sub mt-3">
              A center of virtual education
              <br></br>with various subjects to learn
            </div>
            <Link to={"/SignUp"}>
              <button
                className="rounded button-sign-up"
                to="/album-carousel-page"
              >
                Get Started!
              </button>
            </Link>

            <div className="card-text font-signin mb-5">
              Already have an account?{" "}
              <Link className="link-unstyled font-login-color" to={"/SignIn"}>
                Log In
              </Link>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}
