import React from "react";
import { Link } from "react-router-dom";
import "./styling.css";

export default function PhotoCard(props) {
  return (
    <div className="photo-card">
      <Link to={`/gallery/${props.handle}/${props.id}`}>
        <img src={props.src} alt={props.info} />
      </Link>
    </div>
  );
}
