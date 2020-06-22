import React from "react";

export default function PhotoCard(props) {
  return (
    <div>
      <img src={props.src} alt={props.info} />
      <button>See details</button>
    </div>
  );
}
