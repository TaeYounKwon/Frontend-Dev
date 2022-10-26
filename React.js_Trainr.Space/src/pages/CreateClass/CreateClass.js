import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { API } from "aws-amplify";
import { useNavigate, Link } from "react-router-dom";

import * as mutations from "../../graphql/mutations";

import "./CreateClass.css";
import image_createClass from "../../media/createClass.png";
import myLogo from "../../media/original.png";

export default function CreateClass({ user }) {
  const [name, setName] = useState("");
  const [classcode, setClasscode] = useState("");
  const [description, setDescription] = useState("");
  let navigate = useNavigate();

  async function createClass() {
    try {
      const classInfo = {
        id: classcode,
        name: name,
        instructor: user.id,
        description: description,
      };

      await API.graphql({
        query: mutations.createClass,
        variables: { input: classInfo },
      });

      navigate("/");
    } catch (error) {
      // TODO: Display Errors to frontend.
      console.log("error creating a class:", error);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center ">
      {user.id != null ? (
        <div className="m-block container-lg d-flex flex-column justify-content-between align-items-center mt-3 text-center">
          <div className="card-group ">
            <div className="card left-side bg-transparent border-0 mt-5 ">
              <img src={image_createClass} alt={image_createClass}></img>
            </div>

            <div className="card right-side rounded border-0 bg-transparent mt-3">
              <li class="list-group-item bg-transparent border-0 rounded">
                <div className="font-logo font-logo-color">
                  <img className="logo-createClass" src={myLogo} alt={myLogo} />
                  Trainr.Space
                </div>
              </li>

              <li class="list-group-item bg-custom-1 d-flex flex-column rounded align-items-center">
                <div className="card-text font-main">Create Class</div>
                <div className="card-text font-text-sub">
                  Please Fill out the Mendatory<br></br> Information Below.
                </div>

                <h3 className="font-text-extra">Class Code</h3>
                <Input
                  className="input-style-createClass"
                  placeholder="ClassCode"
                  onChange={(e) => setClasscode(e.target.value)}
                />

                <h3 className="font-text-extra">Class Name</h3>
                <Input
                  className="input-style-createClass"
                  placeholder="ClassName"
                  onChange={(e) => setName(e.target.value)}
                />

                <h3 className="font-text-extra">Class Description</h3>
                <Input
                  className="input-style-createClass"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />

                <Link to={"/"}>
                  <button
                    type="button"
                    className="button-back-createClass border-0 rounded btn-secondary "
                    size="lg"
                    to="/album-carousel-page"
                  >
                    Back
                  </button>
                </Link>

                <button
                  type="button"
                  className="button-submit border-0 rounded btn-secondary"
                  size="lg"
                  onClick={() => createClass()}
                >
                  Submit
                </button>
              </li>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
