import React, { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  UncontrolledAccordion,
} from "reactstrap";

import a from "../../media/updatedLogo.png";
import "./FAQ.css";

export default function AboutUs() {
  return (
    <div>
      <UncontrolledAccordion
        defaultOpen="1"
        className="accor d-flex justify-content-center flex-column align-items-center text-align-center"
      >
        <AccordionItem className="a">
          <AccordionHeader targetId="1" className="accor">
            What are the system requiremtents to use Trainr.Space?
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>Thank you for using Trainr.space! </strong>
            Trainr.Space is a web-based software that is accessible on a PC or
            Mac computer with internet connection. Recommended brower is Google
            Chrome.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            How to create an account?
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is very easy to do! </strong>
            To create an account you will need to provide basic information such
            as; your full name, email, and create a password! If you are a
            trainer make sure to indicate it.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
            Where can I find the verification code?{" "}
          </AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>Your provided email. </strong>
            The verification code is sent to the email provided when signing up.
            Please make sure to check your spam folder.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">Is Trainr.Space free? </AccordionHeader>
          <AccordionBody accordionId="4">
            <strong>Yes! </strong>
            Trainr.Space is free for anyone to use.
          </AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
    </div>
  );
}
