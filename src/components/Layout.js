import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

const Layout = () => {
  let total = 0;

  const itemsList = useSelector(state => state.card.itemsList);
  itemsList.forEach(item => {
    total += item.totalPrice
  })
  const showCard = useSelector((state) => state.card.showCard)

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        { showCard && <  CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
