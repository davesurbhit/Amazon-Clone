import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal.js";

function Checkout() {
  
  const [{ basket }, dispatch] = useStateValue();

  if (basket.length==0) {
    return (
      <div className="checkout">
        <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />
          <div>
          <h2 className="checkout__title">Shopping Cart</h2>
          </div>
            <h2>Your shopping cart is empty</h2>
        </div>
        <div className="checkout__right">
        <Subtotal />
      </div>
      </div>
    )
  }

  else
    return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h2 className="checkout__title">Shopping Cart</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
