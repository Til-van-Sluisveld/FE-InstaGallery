import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styling.css";

export default function Home() {
  return (
    <div>
      <Jumbotron>
        <h1>Home</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <div className="buttonColumn">
              <Link to="/explore">
                <button> explore </button>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="buttonColumn">
              <Link to="/signup">
                <button> create shop </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
