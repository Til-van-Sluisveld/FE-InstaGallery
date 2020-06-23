import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
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
    <div>
      <Jumbotron>
        <h1>Details</h1>
      </Jumbotron>
      <img src={photo.src} alt={photo.info} />
      <h3>Info</h3>
      <p>{photo.info}</p>
      <h3>Artist Description:</h3>
      <p>{photo.description}</p>
      <CartButtons id={photo.id} src={photo.src} />
    </div>
  );
}
