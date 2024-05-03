import "./SecondPageStyles.scss";
import clear from "../../assets/clear.svg";

const SelectedItems = ({ selectedItems,handleClear,handleRemoveItem }) => {

 
  return (
    <div className="selected-items-wrapper">
      {selectedItems.length>0 &&
        selectedItems.map((item) => (
          <div  className="selected-category" key={item.id}>
            <p>{item.title}</p>
            <img src={clear} alt="clear" onClick={()=>handleRemoveItem(item.id)}/>
          </div>
        ))}
        {selectedItems.length>0 && (  <span onClick={()=>handleClear()}>Clear all filter</span>)}
      
    </div>
  );
};

export { SelectedItems };
