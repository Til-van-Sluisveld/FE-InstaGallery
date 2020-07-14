import React, { useEffect } from "react";
import { Jumbotron, Container, Row, Col, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePhoto } from "../../store/photo/actions";
import { selectSinglePhoto } from "../../store/photo/selectors";
import CartButtons from "../../components/CartButtons";
import "./styling.css";

export default function PhotoDetail() {
  const { id, name } = useParams();
  const dispatch = useDispatch();
  const photo = useSelector(selectSinglePhoto);

  useEffect(() => {
    dispatch(getSinglePhoto(id));
  }, [dispatch, id]);

  return (
    <div className="page">
      <Jumbotron>
        <h1>Details</h1>
      </Jumbotron>
      <Container>
        <div className="detail">
          <Row>
            <Col>
              <img src={photo.src} alt={photo.info} />
            </Col>
            <Col>
              <h3>Info</h3>
              <p>{photo.info}</p>
              <h3>Artist Description:</h3>
              <p>{photo.description}</p>
              <CartButtons id={photo.id} src={photo.src} />
              <p></p>
              <Link to={`/gallery/${name}`}>
                <Button variant="dark">Back to Gallery</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
