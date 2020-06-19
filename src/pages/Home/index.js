import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import Axios from "axios";

export default function Home() {
  return (
    <div>
      <Jumbotron>
        <h1>Home</h1>
      </Jumbotron>
      <p>you're on the homepage</p>
    </div>
  );
}
