import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./styles/Navigation.css";
import myLogo from "../media/original.png";

export default function UserHeader({ user }) {
  let navigate = useNavigate();

  return (
    <div className="welcome-user bg-transparent">
      <div className="font-logo-userHeader font-logo-color ">
        - Welcome {""}
        {user.firstName} {user.lastName}! -
      </div>
      <div>
        {user.isTrainer ? (
          <div>
            <button
              type="button"
              className="btn-custom-createClass bg-secondary border-0 rounded"
              onClick={() => navigate("/CreateClass")}
            >
              Create Class
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
