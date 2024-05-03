import "./CartPageStyle.scss";
import back from "../../assets/arrow_back.svg";
import { NavLink } from "react-router-dom";
import { Select } from "./Select";
import { useState } from "react";


const MyCart = ({
  chosenItems,
  handleClearAll,
  handleRemoveItem,
  
 
}) => {
  const [selected, setSelected] = useState(chosenItems);

  const handleSelected = (item) => {
    
    const updatedSelected = [...selected];
    const index = updatedSelected.findIndex((selectedItem) => selectedItem.id === item.id);
    if (index !== -1) {
      updatedSelected[index].quantity = item.quantity;
    }
    setSelected(updatedSelected);
   
  };

  const handleRemoveButtonClick = (itemId) => {
    handleRemoveItem(itemId);
  };

  const handleRemoveAllButtonClick = () => {
    handleClearAll();
  };


  return (
    <div className="my-cart">
      <div className="chosenItemsNumber">
        <h3>My cart ({chosenItems.length})</h3>
      </div>
      <div className="cart-wrapper">
        {chosenItems &&
          chosenItems.map((item, id) => (
            <div key={id}>
              <div className="cart-grid-wrapper">
                <div className="cart-img">
                  <img  width="100%" height="auto" src={item.item} alt="img" />
                </div>
                <div className="cart-description">
                  <p className="cart-title">{item.title}</p>
                  <p className="cart-size">
                    Size: medium, Color:blue, Material: Plastic
                  </p>
                  <span>Seller: Artel Market</span>
                  <div>
                    <button onClick={() => handleRemoveButtonClick(item.id)}>
                      Remove
                    </button>
                    <button>Save for later</button>
                  </div>
                </div>
                <div className="cart-price">
                  <div>
                    <p>
                      $
                      {(
                        item.price * (item.quantity ? item.quantity : 1)
                      ).toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <Select item={item} chosenItems={chosenItems}  handleSelected={handleSelected}/>
                  </div>
                </div>
              </div>
              <div className="cart-border"></div>
            </div>
          ))}
        <div className="cart-btn">
          <NavLink to="/second">
            <button className="back">
              <img width="22px" height="22px" src={back} alt="back" /> Back to Shop
            </button>
          </NavLink>
          <button
            onClick={() => handleRemoveAllButtonClick()}
            className="remove"
          >
            Remove all
          </button>
        </div>
      </div>
    </div>
  );
};

export { MyCart };
