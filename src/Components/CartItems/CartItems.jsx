import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

function CartItems() {
  const { getTotalCartAmount, all_product, removeFromCart, cartItems } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>Kz {e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>Kz {e.new_price * cartItems[e.id]}</p>
                <img
                  className="carticon-remove-icon"
                  src={require("../Assets/cart_cross_icon.png")}
                  onClick={() => removeFromCart(e.id)}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        } else return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>Kz {getTotalCartAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promote code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" name="" id="" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
