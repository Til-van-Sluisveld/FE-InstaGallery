import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/shoppingCart/actions";
import { selectQuantityOfProductInCart } from "../../store/shoppingCart/selectors";
import { Button } from "react-bootstrap";

export default function CartButtons(props) {
  const dispatch = useDispatch();
  const quantity = useSelector(selectQuantityOfProductInCart(props.id));

  function subtractHandler() {
    dispatch(removeFromCart(props.id));
  }
  function addingHandler() {
    dispatch(addToCart(props.id, props.src));
  }

  return (
    <div>
      {quantity ? (
        <div>
          <Button variant="dark" onClick={subtractHandler}>
            -
          </Button>
          <span> {quantity} in cart </span>

          <Button variant="dark" onClick={addingHandler}>
            +
          </Button>
        </div>
      ) : (
        <div>
          <span> Put in cart </span>
          <Button variant="dark" onClick={addingHandler}>
            +
          </Button>
        </div>
      )}
    </div>
  );
}
