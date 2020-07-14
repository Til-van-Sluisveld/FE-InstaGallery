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
        <h1>Welcome to InstaGallery</h1>
        <p>Start buying or selling your photos online, today!</p>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <div className="buttonColumn">
              <h3>Start looking for photography</h3>
              <p>Are your walls looking a little empty?</p>
              <p>
                Start browsing galleries from our users and pick a beautiful
                picture to print out
              </p>
              <Link to="/explore">
                <Button variant="dark">Explore</Button>
              </Link>
            </div>
          </Col>
          <Col>
            {token ? (
              <div className="buttonColumn">
                <h3>Import photos</h3>
                <p>Posted any new pictures to instagram lately?</p>
                <p>
                  You can easily import your pictures from you instagram
                  account, add them to your gallery and start selling them
                  today!
                </p>
                <Link to="/import">
                  <Button variant="dark">Import photos</Button>
                </Link>
              </div>
            ) : (
              <div className="buttonColumn">
                <h3>Create a personal Gallery</h3>
                <p>Shot any cool photos lately?</p>
                <p>
                  If you're into photography why not create a simple gallery so
                  you can start selling them?
                </p>
                <Link to="/signup">
                  <Button variant="dark">Create Gallery</Button>
                </Link>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
