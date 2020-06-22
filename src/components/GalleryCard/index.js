import React from "react";
import { Link } from "react-router-dom";

export default function GalleryCard(props) {
  const imgStyle = {
    height: "400px",
    margin: "5px",
  };
  return (
    <div style={{ margin: "5px" }}>
      <h3>{props.name}</h3>
      <p>Photos: {props.photos.length}</p>
      {props.photos.slice(0, 3).map((photo) => {
        return (
          <img
            key={photo.id}
            src={photo.src}
            style={imgStyle}
            alt={photo.info}
          />
        );
      })}

      <Link to={`/gallery/${props.name}`}>
        <button>Visit Gallery</button>
      </Link>
    </div>
  );
}
