import React from "react";
import { Link } from "react-router-dom";

export default function PhotoCard(props) {
  return (
    <div>
      <img src={props.src} alt={props.info} />
      <Link to={`/gallery/${props.handle}/${props.id}`}>
        <button>See details</button>
      </Link>
    </div>
  );
}
