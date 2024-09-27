import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bholeshwar Wagh </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently employed as a software developer at Cybage.
            <br />
            I have completed BE in Chemical Engineering at D. Y. Patil Collage, Pune.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Musical Instruments
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best way to predict the future is to invent it."{" "}
          </p>
          <footer className="blockquote-footer">Bholeshwar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
