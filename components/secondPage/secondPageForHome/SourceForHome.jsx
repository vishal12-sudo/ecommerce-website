import "../SecondPageStyles.scss";
import gridview from "../../../assets/gridview.svg";
import listview from "../../../assets/listview.svg";
import { useState } from "react";
import { HomeListView } from "./HomeListView";
import { HomeGridView } from "./HomeGridView";
import { SelectedItems } from "../SelectedItems";
import { AlsoMayLike } from "./AlsoMayLike";
import sort from "../../../assets/sort.svg";
import filter from "../../../assets/filter_alt.svg";


const SourceForHome = ({selectedItems,handleClear,handleRemoveItem, handleHeartIconClick})=>{

    const [view, setView] = useState(true)

    return(
        <div className="itemList-wrapper">
      <div className="select-box">
      <div className="mobile">
          <div className="sort">
             <p>Sort:Newest</p>
             <img src={sort} alt="sort"/>
          </div>
          <div className="filter">
            <p>Filter (3)</p>
            <img src={filter} alt="filter"/>
          </div>
        </div>
        <div className="desktop">
        <div>
          <p>12,911 items in Mobile accessory</p>
        </div>
        <div className="form">
          <input type="checkbox" />
          <label>Verified only</label>
          <select>
            <option>Featured</option>
          </select>
          </div>
          </div>
          <div className="view-icons">
          <img className="view-list" onClick={()=>setView(false)} src={gridview} alt="list" />
          <img className="view-grid" onClick={()=>setView(true)} src={listview} alt="list" />
        </div>
      </div>
      <SelectedItems selectedItems={selectedItems} handleClear={handleClear} handleRemoveItem={handleRemoveItem}/>
     {view ? (  <HomeListView  handleHeartIconClick={handleHeartIconClick} />) : <HomeGridView  handleHeartIconClick={handleHeartIconClick}/>}
      
     <AlsoMayLike/>
    
    </div>
    )
}

export {SourceForHome}