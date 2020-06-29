import React from "react";
import { Link } from "react-router-dom";

export default function PhotoCard(props) {
  return (
    <div style={{ width: "33%", padding: "5px" }}>
      <Link to={`/gallery/${props.handle}/${props.id}`}>
        <img src={props.src} alt={props.info} style={{ width: "100%" }} />
      </Link>
    </div>
  );
}
