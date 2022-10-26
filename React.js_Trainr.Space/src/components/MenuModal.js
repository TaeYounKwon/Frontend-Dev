import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Link, useNavigate } from "react-router-dom";
import { store, persistor } from "../store";

import "./styles/MenuModal.scss";

export default function MenuModal() {
  const [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();

  function toggleModal() {
    setShowModal(!showModal);
  }

  async function signOut() {
    try {
      await Auth.signOut();

      await store.dispatch({
        type: "LOG_OUT",
      });

      window.location.reload();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return showModal ? (
    <div className="d-flex justify-content-between align-items-center pb-2">
      <ul className="circ-cont">
        <li>
          <i
            onClick={() => navigate("/")}
            className="fa-solid fa-house fa-lg modal-menu-item mx-3"
          />
        </li>

        <li>
          <i
            onClick={() => navigate("/Messages")}
            className="fa-solid fa-message-lines fa-lg modal-menu-item mx-3"
          />
        </li>

        <li>
          <i
            onClick={() => navigate("/Calendar")}
            className="fa-solid fa-calendar-day fa-lg modal-menu-item mx-3"
          />
        </li>

        <li>
          <i
            onClick={() => navigate("/UserSettings")}
            className="fa-solid fa-gear fa-lg modal-menu-item mx-3"
          />
        </li>

        <li>
          <i
            onClick={() => signOut()}
            className="fa-solid fa-arrow-right-from-bracket fa-lg modal-menu-item mx-3"
          />
        </li>
      </ul>

      <div className="the-x">
        <i
          onClick={() => toggleModal()}
          className="fa-solid fa-x fa-lg modal-menu-item mx-3"
        />
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-between align-items-center pb-2">
      <i onClick={() => toggleModal()} className="fa-solid fa-bars me-2" />
    </div>
  );
}
