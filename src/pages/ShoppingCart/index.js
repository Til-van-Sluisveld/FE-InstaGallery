import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectShoppingCart } from "../../store/shoppingCart/selectors";
import CartButtons from "../../components/CartButtons";
import { Link } from "react-router-dom";
import { emptyShoppingCart } from "../../store/shoppingCart/actions";
import "./styling.css";

export default function ShoppingCart() {
  const cart = useSelector(selectShoppingCart);
  const dispatch = useDispatch();
  const totalPhotos = cart.map((photo) => {
    return photo.quantity;
  });

  function emptyCart() {
    dispatch(emptyShoppingCart());
  }

  const cartToRender = () => {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={cartItem.src} alt={cartItem.photoId} />
                  </td>
                  <td>
                    <CartButtons id={cartItem.photoId} />
                  </td>
                  <td>€25</td>
                  <td>€{cartItem.quantity * 25}</td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td>
                <b>Total Price:</b>
              </td>
              <td>
                €{totalPhotos.reduce((acc, current) => acc + current) * 25}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="cartControls">
          <Link to="/delivery-info">
            <Button variant="dark">Place Order</Button>
          </Link>
          <Button variant="dark" onClick={emptyCart}>
            Empty Cart
          </Button>
        </div>
      </div>
    );
  };

  const cartWithNoContents = () => {
    return (
      <div>
        <h2>Your Cart seems to be empty</h2>
        <p>Go on and browse some galleries for beautiful photo's to print!</p>
        <Link to="/explore">
          <Button variant="dark">Explore Galleries</Button>
        </Link>
      </div>
    );
  };

  return (
    <div style={{ paddingBottom: "20px" }}>
      <Jumbotron>
        <h1>Shopping cart</h1>
      </Jumbotron>
      <Container>
        {cart.length ? cartToRender() : cartWithNoContents()}
      </Container>
    </div>
  );
}
