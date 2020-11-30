import React from "react";
import { Link } from "react-router-dom";
import "./styling.css";
import { selectUser } from "../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { deletePhoto } from "../../store/photo/actions";

export default function PhotoCard(props) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  function deleteButtonPressed() {
    dispatch(deletePhoto(props.id));
  }

  return (
    <div className="photo-card">
      <Link to={`/gallery/${props.handle}/${props.id}`}>
        <img src={props.src} alt={props.info} />
      </Link>
      {user.name === props.handle ? (
        <Button
          style={{ marginTop: 10 }}
          variant="dark"
          onClick={deleteButtonPressed}
        >
          Delete
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}
