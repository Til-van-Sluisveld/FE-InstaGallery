import React from "react";
import { Jumbotron, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styling.css";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";

export default function Home() {
  const token = useSelector(selectToken);

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
                <Button variant="dark">Explore</Button>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="buttonColumn">
              {token ? (
                <Link to="/import">
                  <Button variant="dark">Import photos</Button>
                </Link>
              ) : (
                <Link to="/signup">
                  <Button variant="dark">Create shop</Button>
                </Link>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
