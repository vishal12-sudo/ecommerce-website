import "./CartPageStyle.scss";
import { MyCart } from "./MyCart";
import { CheckOut } from "./CheckOut";
import { Conditions } from "./Condition";
import { Discount } from "../discountThirdPage/Discount";
import { SavedLater } from "./SavedLater";
import { useState } from "react";

const CartPage = ({ chosenItems, handleClearAll, handleRemoveItem }) => {
  const [selectedValue, setSelectedValue] = useState("1");

  const handleChange = (event, id) => {
    console.log("log", id);
    setSelectedValue(event.target.value);
  };

  return (
    <div className="cartPage">
      <div className="my-cart-wrapper">
        <div className="cart-content">
          <MyCart
            chosenItems={chosenItems}
            handleClearAll={handleClearAll}
            handleRemoveItem={handleRemoveItem}
            handleChange={handleChange}
            selectedValue={selectedValue}
          />
          <CheckOut chosenItems={chosenItems} />
        </div>
        <Conditions />
        <SavedLater />
        <Discount />
      </div>
    </div>
  );
};

export { CartPage };
