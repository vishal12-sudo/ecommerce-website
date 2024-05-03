import "../SecondPageStyles.scss";
import { useState } from "react";
import { CategoryList } from "../CategoryList";
import { Subscribe } from "../../subscribe/Subscribe";
import { SourceForHome } from "./SourceForHome";
import { Navigation } from "../Navigation";

const HomeSourceItems = ( {handleHeartIconClick})=>{


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
     <div>
         <div className="main-wrapper">
        <div className="content-wrapper">
        <Navigation/>
          <div className="main-content">
            <CategoryList selectedItems={selectedItems} handleItemClick={handleItemClick} />
           <SourceForHome  selectedItems={selectedItems} handleClear={handleClear} handleRemoveItem={handleRemoveItem}  handleHeartIconClick={handleHeartIconClick}/>
          </div>
        </div>
      </div>
      <Subscribe />
     </div>
     )
}

export {HomeSourceItems}