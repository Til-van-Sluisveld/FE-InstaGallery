import React from "react";
import { Jumbotron } from "react-bootstrap";

export default function NotFound() {
  return (
    <div>
      <Jumbotron>
        <h1>Whoops</h1>
        <p>
          {" "}
          Something went wrong, we couldnt find the page you're looking for.
        </p>
      </Jumbotron>
    </div>
  );
}
