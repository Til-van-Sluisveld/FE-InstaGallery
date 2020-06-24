import React from "react";
import { Jumbotron } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectShoppingCart } from "../../store/shoppingCart/selectors";
import CartButtons from "../../components/CartButtons";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
  const cart = useSelector(selectShoppingCart);
  const totalPhotos = cart.map((photo) => {
    return photo.quantity;
  });

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
                    <img
                      style={{ height: "200px" }}
                      src={cartItem.src}
                      alt={cartItem.photoId}
                    />
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
              <td></td>
              <td>
                €{totalPhotos.reduce((acc, current) => acc + current) * 25}
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/delivery-info">
          <button>checkout</button>
        </Link>
        <button>empty cart</button>
      </div>
    );
  };

  return (
    <div>
      <Jumbotron>
        <h1>Shopping cart</h1>
      </Jumbotron>
      {cart.length ? cartToRender() : <p>cart is empty</p>}
    </div>
  );
}
