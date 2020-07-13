import React, { useEffect } from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePhoto } from "../../store/photo/actions";
import { selectSinglePhoto } from "../../store/photo/selectors";
import CartButtons from "../../components/CartButtons";

export default function PhotoDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const photo = useSelector(selectSinglePhoto);

  useEffect(() => {
    dispatch(getSinglePhoto(id));
  }, [dispatch, id]);

  return (
    <div style={{ paddingBottom: "20px" }}>
      <Jumbotron>
        <h1>Details</h1>
      </Jumbotron>
      <Container>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}
