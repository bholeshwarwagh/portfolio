import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiWindows11,
  SiJira,
  SiConfluence,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiWindows11 />
        <div>Windows 11</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiVisualstudiocode />
        <div>VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPostman />
        <div>Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiSlack />
        <div>Slack</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiJira />
        <div>Jira</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiConfluence />
        <div>Confluence</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
