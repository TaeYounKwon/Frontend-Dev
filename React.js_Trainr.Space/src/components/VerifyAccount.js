import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup } from "reactstrap";
import { withFormik } from "formik";
import { Auth } from "aws-amplify";
import ClientAlerts from "../components/ClientAlerts";

function VerifyAccount({
  username,
  values: { verificationCode },
  handleChange,
  history,
}) {
  let navigate = useNavigate();
  const [alerts, setAlerts] = useState("");

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, verificationCode);
      navigate("/");
    } catch (error) {
      setAlerts(error.message);
      console.log("error confirming sign up", error);
    }
  }

  return (
    <div>
      <Form>
        <FormGroup className="d-flex flex-column">
          <label className="mb-3" for="verificationCode">
            <p>
              We have emailed you a verification code. Please enter it below to
              confirm your account.
            </p>
          </label>
          <input
            id="verificationCode"
            name="verificationCode"
            placeholder="code"
            value={verificationCode}
            onChange={handleChange}
          />
        </FormGroup>
        <ClientAlerts alerts={alerts} />
        <div className="d-flex flex-column">
          <Button
            placeholder="Verificcation Code"
            onClick={() => confirmSignUp()}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

const EnhancedVerifyAccount = withFormik({
  mapPropsToValues: () => ({
    verificationCode: "",
  }),
})(VerifyAccount);

export default EnhancedVerifyAccount;
