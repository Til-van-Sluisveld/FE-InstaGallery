import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/shoppingCart/actions";
import { selectQuantityOfProductInCart } from "../../store/shoppingCart/selectors";

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
          <button onClick={subtractHandler}>-</button>
          <span> {quantity} in cart </span>
          <button onClick={addingHandler}>+</button>
        </div>
      ) : (
        <div>
          <span> put in cart </span>
          <button onClick={addingHandler}>+</button>
        </div>
      )}
    </div>
  );
}
