import "./SecondPageStyles.scss";
import expandLess from "../../assets/category_expand.svg";
import { brandList } from "./ListData";
import { listCheckBox } from "./ListData";
import { featureList } from "./ListData";
import { conditionLits } from "./ListData";
import { StarRating } from "./StarRating";
import { PriceRange } from "./PriceRange";
import { useState } from "react";

const CategoryList = ({ handleItemClick }) => {
 
  const [seeAllCategory, setSeeAllCategory] = useState(false)
  const [seeAllBrands, setSeeAllBrands] = useState(false)
  const [seeAllFeatures, setSeeAllFeatures] = useState(false)

  const [visible, setVisible] = useState(true);
  const [brand, setBrand] = useState(true);
  const [feature, setFeature] = useState(true);
  const [condition, setCondition] = useState(true);
  const [star, setStar] = useState(true);

  const handleCategory = ()=>{
    setSeeAllCategory(true)
    setVisible(false)
  }

  const handleSeeMoreCategory = ()=>{
    setSeeAllCategory(false)
    setVisible(true)
  }

  const handleBrands = ()=>{
    setSeeAllBrands(true)
    setBrand(false)
  }

  const handleSeeBrands = ()=>{
    setSeeAllBrands(false)
    setBrand(true)
  }

  const handleFeatures =()=>{
    setFeature(false)
    setSeeAllFeatures(true)
  }

  const handleSeeFeatures =()=>{
    setFeature(true)
    setSeeAllFeatures(false)
  }

  return (
    <div className="category-list-wrapper">
      <div className="list-wrapper">
        <div className="border-list"></div>
        <div className="category-title">
          <h6>Category</h6>
          <img src={expandLess} alt="arrow" onClick={()=>handleCategory()} />
        </div>

        {visible &&
          brandList.map((item) => (
            <div className="expanded-list" key={item.id}>
              <p onClick={() => handleItemClick(item)}>{item.title}</p>
            </div>
          ))}
          {seeAllCategory &&   <span onClick={()=>handleSeeMoreCategory()} >see all</span> }
      
        <div className="border-list"></div>
        <div className="category-title">
          <h6>Brands</h6>
          <img src={expandLess} alt="arrow"onClick={()=>handleBrands()}/>
        </div>
        {brand &&
          listCheckBox.map((item, id) => (
            <div key={id} className="checkbox">    
              <label onClick={() => handleItemClick(item)}> <input type="checkbox" onClick={() => handleItemClick(item)} />{item.title} </label>
            </div>
          ))}
          {seeAllBrands &&  <span onClick={()=>handleSeeBrands()}>see all</span>}
       
        <div className="border-list"></div>
        <div className="category-title">
          <h6>Features</h6>
          <img src={expandLess} alt="arrow" onClick={()=>handleFeatures()} />
        </div>
        {feature &&
          featureList.map((item, id) => (
            <div key={id} className="checkbox">      
              <label onClick={() => handleItemClick(item)}>  <input type="checkbox" onClick={() => handleItemClick(item)} />{item.title}</label>
            </div>
          ))}
          {seeAllFeatures &&  <span onClick={()=>handleSeeFeatures()} >see all</span>}
       
        <div className="border-list"></div>
        <div>
          <PriceRange />
        </div>
        <div className="border-list"></div>
        <div className="category-title">
          <h6>Condition</h6>
          <img src={expandLess} alt="arrow" onClick={()=>setCondition((prevState) => !prevState)} />
        </div>
        {condition &&
          conditionLits.map((item, id) => (
            <div key={id} className="checkbox">
              <label onClick={() => handleItemClick(item)}>  <input
                type="radio"
                name="condition"
                onClick={() => handleItemClick(item)}
              />{item.title}</label>
            </div>
          ))}
        <div className="border-list"></div>
        <div className="category-title">
          <h6>Ratings</h6>
          <img src={expandLess} alt="arrow" onClick={()=>setStar((prevState) => !prevState)} />
        </div>
        {star && (
          <div>
            <StarRating />
          </div>
        )}
      </div>
    </div>
  );
};

export { CategoryList };
