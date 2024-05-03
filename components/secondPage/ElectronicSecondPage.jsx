import "./SecondPageStyles.scss";
import { CategoryList } from "./CategoryList";
import { ItemList } from "./ItemList";
import { Subscribe } from "../subscribe/Subscribe";
import { Navigation } from "./Navigation";
import { useState } from "react";


const ElectronicSecondPage = ({handleHeartIconClick}) => {

  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    setSelectedItems((prevSelectedItems) => {
      const isSelected = prevSelectedItems.some((selectedItem) => selectedItem.id === item.id);
      return isSelected
        ? prevSelectedItems.filter((selectedItem) => selectedItem.id !== item.id)
        : [...prevSelectedItems, item];
    });
  };

  const handleClear = ()=>{
    setSelectedItems([]);
   
}

const handleRemoveItem =(itemId)=>{
  setSelectedItems((prevSelectedItems) => prevSelectedItems.filter((item) => item.id !== itemId));
  console.log("clear")
}

  return (
    <>
      <div className="main-wrapper">
        <div className="content-wrapper">
            <Navigation/>
          <div className="main-content">
          <CategoryList selectedItems={selectedItems} handleItemClick={handleItemClick}  />
            <ItemList  selectedItems={selectedItems} handleClear={handleClear} handleRemoveItem={handleRemoveItem} handleHeartIconClick={handleHeartIconClick}/>
          </div>
        </div>
      </div>
  
      <Subscribe />
    </>
  );
};

export { ElectronicSecondPage };
