import React, { useState } from "react";
import "./AboutUs.css";

import hunter1 from "../../media/hunter.png";
import jack from "../../media/jack.png";
import jasmine from "../../media/jasmine.jpg";
import marcela from "../../media/marcela.png";
import lorenzo from "../../media/lorenzo.png";

export default function AboutUs() {
  return (
    <div className="container d-flex justify-content-center flex-column align-items-center text-align-center">
      <a
        href="https://www.linkedin.com/in/hunter-hanay/"
        style={{ color: "#8aa899", fontWeight: "bold" }}
      >
        <p>HUNTER HANAY</p>
      </a>
      <img className="w-25 h-25" src={hunter1} alt="Picture of Hunter" />
      <div className="text ">
        Hi, my name is Hunter, and for this project, I participated in the
        backend learning to implement tools and technologies such as GraphQL,
        React, and a few AWS Services. GraphQL was the most challenging learning
        curve for me, but working long hours with Lorenzo, we were able to take
        on many of the challenges. A bit about me, if it's a sunny day, I like
        to spend my time playing soccer, hitting the golf range, or going up to
        the mountain. But, if I'm stuck inside, I enjoy playing chess or
        binge-watching anime.
      </div>

      <a
        href="https://www.linkedin.com/in/jack-kwon-66437a162/"
        style={{ color: "#8aa899", fontWeight: "bold" }}
      >
        <p>JACK KWON</p>
      </a>
      <img className="w-25 h-25" src={jack} alt="Picture of Jack" />
      <div className="text">
        Super weird Korean guy who can make very good Korean barbecue for his
        team. Has a girlfriend but living that single life in Seattle.
      </div>

      <a
        href="https://www.linkedin.com/in/jasmine-salmeron-7670811a2/"
        style={{ color: "#8aa899", fontWeight: "bold" }}
      >
        <p>JASMINE SALMERON</p>
      </a>
      <img className="w-25 h-25" src={jasmine} alt="Picture of Jasmine" />
      <div className="text">
        The perfect Mexican in the team who never complains about
        anything........ has a child and is always late to everything.
      </div>

      <a
        href="https://www.linkedin.com/in/marcela-soares-silveira/"
        style={{ color: "#8aa899", fontWeight: "bold" }}
      >
        <p>MARCELA SOARES</p>
      </a>
      <img className="w-25 h-25" src={marcela} alt="Picture of Marcela" />
      <div className="text">
        Shes that girl..... the one who wants everything to be perfect and well
        you know the rest. Jk, she a cool Brazilian.
      </div>

      <a
        href="https://www.linkedin.com/in/lorenzo-martinez/"
        style={{ color: "#8aa899", fontWeight: "bold" }}
      >
        <p>LORENZO MARTINEZ</p>
      </a>
      <img className="w-25 h-25" src={lorenzo} alt="Picture of Lorenzo" />
      <div className="text">
        This guy. Seshhhhhh he is something else. Has a very sweet girlfriend
        but is the total opposite (literally).
      </div>
    </div>
  );
}
