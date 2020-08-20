import React from "react";
import { Link } from "react-router-dom";
import "./styling.css";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

export default function PhotoCard(props) {
  const user = useSelector(selectUser);
  console.log("user.name:", user.name);
  console.log("props.handle:", props.handle);

  return (
    <div className="photo-card">
      <Link to={`/gallery/${props.handle}/${props.id}`}>
        <img src={props.src} alt={props.info} />
      </Link>
      {user.name === props.handle ? (
        <Button style={{ marginTop: 10 }} variant="dark">
          Delete
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}
