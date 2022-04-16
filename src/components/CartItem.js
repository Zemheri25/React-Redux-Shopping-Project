import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cardActions } from "../store/card-slice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const incrementCartItem = () => {
    dispatch(cardActions.addToCard({
      name,
      id,
      price,
    }))
  }

  const decrementCartItem = () => {
    dispatch(cardActions.removeFromCard(id))
  }

  
  
  
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decrementCartItem}>
        -
      </button>
      <button className="cart-actions" onClick={incrementCartItem}>
        +
      </button>
    </div>
  );
};

export default CartItem;
