import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getGalleries } from "../../store/galleries/actions";
import { selectGalleries } from "../../store/galleries/selectors";
import GalleryCard from "../../components/GalleryCard";

export default function Explore() {
  const dispatch = useDispatch();
  const galleries = useSelector(selectGalleries);

  useEffect(() => {
    dispatch(getGalleries());
  }, [dispatch]);

  const galleriesToRender = () =>
    galleries.map((gallery) => <GalleryCard key={gallery.id} {...gallery} />);

  return (
    <div>
      <Jumbotron>
        <h1>Explore</h1>
      </Jumbotron>
      {galleriesToRender()}
    </div>
  );
}
