import "./CheckOutStyle.scss";
import express from "../../assets/payment.svg";
import bank from "../../assets/Logo.svg";
import P from "../../assets/Logo1.svg";
import visa from "../../assets/Logo2.svg";
import pay from "../../assets/image 21.png";

const CheckOut = ({ chosenItems }) => {

  
  if (chosenItems.length === 0) {
    return null;
  }
  const totalPrice = chosenItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  const discount = totalPrice - 60.0;
  const total = discount + 14.0;

  return (
    <div className="main-checkout-wrapper">
      <div className="coupon">
        <p>Have a coupon?</p>
        <div>
          <input type="text" placeholder="Add coupon" />
          <button>Apply</button>
        </div>
      </div>
      <div className="checkout-wrapper">
        <div className="coupon-checkout">
          <div>
            <p>Subtotal:</p>
            <p>Discount:</p>
            <p>Tax:</p>
          </div>
          <div>
            <span className="grey">${totalPrice.toFixed(2)}</span>
            <span className="red">- $60.00</span>
            <span className="green">+ $14.00</span>
          </div>
        </div>
        <div className="border"></div>
        <div className="checkout">
          <div>
            <h6>Total:</h6>
            <h4>${total}</h4>
          </div>
          <button>Checkout</button>
        </div>
        <div className="pay-icons">
          <img src={express} alt="pay-logo" />
          <img src={bank} alt="pay-logo" />
          <img src={P} alt="pay-logo" />
          <img src={visa} alt="pay-logo" />
          <img src={pay} alt="pay-logo" />
        </div>
      </div>
    </div>
  );
};
export { CheckOut };
