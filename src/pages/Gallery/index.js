import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleGallery } from "../../store/galleries/actions";
import { selectSingleGallery } from "../../store/galleries/selectors";
import PhotoCard from "../../components/PhotoCard";

export default function Gallery() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const gallery = useSelector(selectSingleGallery);

  useEffect(() => {
    dispatch(getSingleGallery(name));
  }, [dispatch, name]);

  const photosToRender = () =>
    gallery.photos.map((photo) => <PhotoCard key={photo.id} {...photo} />);

  return (
    <div>
      <Jumbotron>
        <h1>Gallery of {name} </h1>
      </Jumbotron>
      {Object.keys(gallery).length === 0 ? <p>loading</p> : photosToRender()}
    </div>
  );
}
