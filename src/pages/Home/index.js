import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Jumbotron>
        <h1>Home</h1>
      </Jumbotron>
      <div>
        <Link to="/explore">
          <button> explore </button>
        </Link>
        <Link to="/signup">
          <button> create shop </button>
        </Link>
      </div>
    </div>
  );
}
