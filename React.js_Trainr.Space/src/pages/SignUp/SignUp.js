import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { withFormik } from "formik";
import myLogo from "../../media/original.png";
import myImage from "../../media/signup.png";
import { API, Auth } from "aws-amplify";
import * as Yup from "yup";

import * as mutations from "../../graphql/mutations";
import ClientAlerts from "../../components/ClientAlerts";
import VerifyAccount from "../../components/VerifyAccount";
import "./SignUp.css";

function SignUp({
  errors,
  values: { email, firstName, lastName, password, confirmPassword },
  handleChange,
}) {
  const [alerts, setAlerts] = useState({});
  const [disableButton, setDisableButton] = useState(true);
  const [modal, setModal] = useState(false);
  const [isTrainer, setIsTrainer] = useState(false);
  const toggleModal = () => setModal(!modal);
  const toggleIsTrainer = () => setIsTrainer(!isTrainer);

  async function signUp() {
    const username = email;
    try {
      const { userSub, user } = await Auth.signUp({
        username,
        email,
        password,
      });

      const userInfo = {
        firstName: firstName,
        lastName: lastName,
        id: userSub,
        email: username,
        isTrainer: isTrainer,
      };

      const newUser = await API.graphql({
        query: mutations.createUser,
        variables: { input: userInfo },
      });

      toggleModal();
    } catch (error) {
      // TODO: Display Errors to frontend.
      setAlerts(error.message);
      console.log("error signing up:", error);
    }
  }

  useEffect(async () => {
    await setAlerts(errors);

    Object.keys(alerts).length == 0
      ? setDisableButton(false)
      : setDisableButton(true);
  });

  return (
    <div className="m-block container-lg d-flex flex-column justify-content-between align-items-center mt-1 text-center">
      <div className="card-group ">
        <div className="card left-side bg-transparent border-0 mt-5 ">
          <img className="mt-4" src={myImage} alt={myImage}></img>
        </div>

        <div className="card right-side rounded border-0 bg-transparent mt-2">
          <li className="list-group-item bg-transparent border-0 rounded">
            <img className="logo-custom-signup" src={myLogo} alt={myLogo} />
            <h1 className="font-logo-signup font-logo-color">Trainr.Space</h1>
          </li>

          <li className="list-group-item bg-custom-1 rounded">
            <div className="card-text font-main">Welcome New User!</div>
            <div className="card-text font-sub">
              Please fill out the information below.
            </div>

            <Form className="d-flex flex-column m-custom-margin align-items-center">
              <FormGroup className="font-form-header">
                First Name
                <Input
                  className="form-style-signup"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={handleChange}
                />
                <ClientAlerts alerts={alerts.firstName} />
              </FormGroup>

              <FormGroup className="font-form-header ">
                Last Name
                <Input
                  id="lastName"
                  className="form-style-signup"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={handleChange}
                />
                <ClientAlerts alerts={alerts.lastName} />
              </FormGroup>

              <FormGroup className="font-form-header">
                E-mail
                <Input
                  id="email"
                  className="form-style-signup"
                  name="email"
                  placeholder="Enter E-mail"
                  value={email}
                  onChange={handleChange}
                />
                <ClientAlerts alerts={alerts.email} />
              </FormGroup>

              <FormGroup className="font-form-header">
                Password
                <Input
                  id="password"
                  className="form-style-signup"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={handleChange}
                />
                <ClientAlerts alerts={alerts.password} />
              </FormGroup>

              <FormGroup className="font-form-header">
                Confirm Password
                <Input
                  className="form-style-signup"
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter Password"
                  value={confirmPassword}
                  onChange={handleChange}
                />
                <ClientAlerts alerts={alerts.confirmPassword} />
              </FormGroup>

              <div className="form-isTrainr mb-3">
                <Input
                  size="xs"
                  className="me-3"
                  type="checkbox"
                  onClick={() => toggleIsTrainer()}
                />
                Is Trainer?
              </div>
            </Form>

            <Modal centered isOpen={modal} toggle={toggleModal}>
              <ModalHeader toggle={toggleModal}>
                Please Verify Your Account
              </ModalHeader>
              <ModalBody>
                <VerifyAccount username={email} />
              </ModalBody>
            </Modal>

            <Link to={"/"}>
              <button
                type="button"
                className="button-back border-0 rounded btn-secondary "
                size="lg"
                to="/album-carousel-page"
              >
                Back
              </button>
            </Link>

            <button
              type="button"
              disabled={disableButton}
              className="button-signup border-0 rounded btn-secondary"
              size="lg"
              onClick={() => signUp()}
            >
              Sign Up
            </button>

            <div className="card-text font-login ">
              Already Have an Account?{" "}
              <Link
                className="link-unstyled"
                style={{ color: "#2D4471" }}
                to={"/SignIn"}
              >
                {" "}
                Log In
              </Link>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}

const EnhancedSignUp = withFormik({
  mapPropsToValues: () => ({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address.")
      .required("E-mail is Required."),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is Required."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm password."),
  }),
})(SignUp);

export default EnhancedSignUp;
