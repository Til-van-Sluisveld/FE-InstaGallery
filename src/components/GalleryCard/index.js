import React from "react";

export default function GalleryCard(props) {
  const imgStyle = {
    height: "400px",
    margin: "5px",
  };
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Photos: {props.photos.length}</p>
      {props.photos.slice(0, 3).map((photo) => {
        return <img key={photo.id} src={photo.src} style={imgStyle} />;
      })}
      <button>Visit Gallery</button>
    </div>
  );
}
