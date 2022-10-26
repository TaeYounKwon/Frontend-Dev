import React, { useState } from "react";
import { withFormik } from "formik";
import { Auth } from "aws-amplify";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Input } from "reactstrap";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import myLogo from "../../media/original.png";
import myImage from "../../media/login.png";
import VerifyAccount from "../../components/VerifyAccount";
import ClientAlerts from "../../components/ClientAlerts";
import "./SignIn.css";

function SignIn({ values: { username, password }, handleChange }) {
  let navigate = useNavigate();
  const [alerts, setAlerts] = useState("");
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  async function signIn() {
    try {
      await Auth.signIn(username, password);
      navigate("/");
      window.location.reload();
    } catch (error) {
      setAlerts(error.message);
      error.code === "UserNotConfirmedException"
        ? toggleModal()
        : console.log("error signing in", error);
    }
  }

  return (
    <div className="m-block container-lg d-flex flex-column justify-content-between align-items-center mt-3 text-center">
      <div className="card-group ">
        <div className="card left-side bg-transparent border-0 mt-5 ">
          <img src={myImage} alt={myImage}></img>
        </div>

        <div className="card right-side rounded border-0 bg-transparent mt-3">
          <li className="list-group-item bg-transparent border-0 rounded">
            <img className="logo-signin" src={myLogo} alt={myLogo} />
            <h1 className="font-logo-signin font-logo-color">Trainr.Space</h1>
          </li>

          <li className="list-group-item bg-custom-1 rounded">
            <div className="card-text font-main">Welcome back!</div>
            <div className="card-text font-sub">
              Log in using E-mail Address
            </div>
            <div className="card-text font-extra">
              Your e-mail is not shown to others <br></br>
              and is only used for verification.
            </div>

            <Form
              className="d-flex flex-column align-items-center"
              style={{ marginTop: "1vh", color: "Black" }}
            >
              <FormGroup className="d-flex flex-column">
                <Input
                  className="form-style-signin"
                  id="username"
                  name="username"
                  placeholder="Enter E-mail Address"
                  value={username}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="d-flex flex-column">
                <Input
                  className="form-style-signin"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={handleChange}
                />
              </FormGroup>

              <ClientAlerts alerts={alerts} />
              <Link to={"/"}>
                <button
                  type="button"
                  className="button-back-signin border-0 rounded btn-secondary "
                  size="lg"
                  to="/album-carousel-page"
                >
                  Back
                </button>
              </Link>

              <button
                type="button"
                className="button-login border-0 rounded btn-secondary"
                size="lg"
                onClick={() => signIn()}
              >
                Log in
              </button>

              <div className="card-text font-findpassword mb-5">
                Forgot Password?{" "}
                <Link
                  className="link-unstyled"
                  style={{ color: "#2D4471" }}
                  to={"/SignIn"}
                >
                  {" "}
                  Find My Password
                </Link>
              </div>
            </Form>
            <Modal centered isOpen={modal} toggle={toggleModal}>
              <ModalHeader toggle={toggleModal}>
                Please Verify Your Account
              </ModalHeader>
              <ModalBody>
                <VerifyAccount username={username} />
              </ModalBody>
            </Modal>
          </li>
        </div>
      </div>
    </div>
  );
}

const EnhancedSignIn = withFormik({
  mapPropsToValues: () => ({
    username: "",
    password: "",
    code: "",
  }),
  onSubmit: (values) => {
    console.log(values.username);
  },
})(SignIn);

export default EnhancedSignIn;
