import React from "react";
import { Link } from "react-router-dom";
import "./styling.css";
import { Button } from "react-bootstrap";

export default function GalleryCard(props) {
  return (
    <div className="gallery-card">
      <h3>{props.name}</h3>
      <p>Photos: {props.photos.length}</p>
      {props.photos.slice(0, 3).map((photo) => {
        return <img key={photo.id} src={photo.src} alt={photo.info} />;
      })}

      <Link to={`/gallery/${props.name}`}>
        {/* <button>Visit Gallery</button> */}
        <Button variant="dark">Visit Gallery</Button>
      </Link>
    </div>
  );
}
