import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiMysql,
} from "react-icons/di";
import {
  SiGooglecloud,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiTableau,
  SiLooker,
  SiTerraform,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiGooglecloud />
        <div>Google Cloud</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiPython />
        <div>Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiJavascript1 />
        <div>JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiNodejs />
        <div>Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiExpress />
        <div>Express.js </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiReact />
        <div>React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiFastapi />
        <div>FastAPI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiMysql />
        <div>MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiMongodb />
        <div>MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiGit />
        <div>Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiTableau />
        <div>Tableau</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiLooker />
        <div>Looker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiDocker />
        <div>Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiTerraform />
        <div>Terraform</div>
      </Col>
    </Row>
  );
}

export default Techstack;
