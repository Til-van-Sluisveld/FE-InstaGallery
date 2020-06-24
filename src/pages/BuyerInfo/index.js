import React, { useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { processOrder } from "../../store/shoppingCart/actions";

export default function BuyerInfo() {
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [country, set_country] = useState("");
  const [city, set_city] = useState("");
  const [address, set_address] = useState("");
  const [zip, set_zip] = useState("");

  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();
    dispatch(processOrder(name, email, country, city, address, zip));
    //console.log("Buyer info:", name, email, country, city, address, zip);
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Delivery information</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => set_name(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => set_email(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Country</Form.Label>
          <Form.Control
            value={country}
            onChange={(event) => set_country(event.target.value)}
            type="text"
            placeholder="Enter country for delivery"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            onChange={(event) => set_city(event.target.value)}
            type="text"
            placeholder="Enter city for delivery"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Adress</Form.Label>
          <Form.Control
            value={address}
            onChange={(event) => set_address(event.target.value)}
            type="text"
            placeholder="Enter delivery address"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control
            value={zip}
            onChange={(event) => set_zip(event.target.value)}
            type="text"
            placeholder="Enter delivery zipcode"
            required
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Place order
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
