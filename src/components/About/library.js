import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPytorch,
  SiSqlalchemy,
  SiPydantic,
  SiMongoose,
  SiStreamlit,
} from "react-icons/si";

function PyLibrary() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="lib-mod-icon text-center">
        <SiPandas />
        <div>Pandas</div>
      </Col>
      <Col xs={4} md={2} className="lib-mod-icon text-center">
        <SiNumpy />
        <div>NumPy</div>
      </Col>
      <Col xs={4} md={2} className="lib-mod-icon text-center">
        <SiTensorflow />
        <div>TensorFlow</div>
      </Col>
      <Col xs={4} md={2} className="lib-mod-icon text-center">
        <SiKeras />
        <div>Keras</div>
      </Col>
      <Col xs={4} md={2} className="lib-mod-icon text-center">
        <SiScikitlearn />
        <div>Scikit-learn</div>
      </Col>
      <Col xs={4} md={2} className="lib-mod-icon text-center">
        <SiPytorch />
        <div>PyTorch</div>
      </Col>
      <Col xs={4} md={2} className="lib-mod-icon text-center">
        <SiSqlalchemy />
        <div>SQL Alchemy</div>
      </Col>
      <Col xs={4} md={2} className="lib-mod-icon text-center">
        <SiPydantic />
        <div>Pydantic</div>
      </Col>
      <Col xs={4} md={2} className="lib-mod-icon text-center">
        <SiMongoose />
        <div>Mongoose</div>
      </Col>
      <Col xs={4} md={2} className="lib-mod-icon text-center">
        <SiStreamlit />
        <div>Streamlit</div>
      </Col>
    </Row>
  );
}

export default PyLibrary;
