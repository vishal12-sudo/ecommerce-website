import "./GadgetGridStyle.scss";
import { WholeData } from "../allData/AllData";
import { useState } from "react";
import right from "../../assets/chevron-right.png";
import left from "../../assets/chevron-left.svg";
import { FaStar } from "react-icons/fa";


const GadgetListGrid = ( {handleHeartIconClick}) => {


  const getRandomItems = (arr, count) => {
    const shuffled = arr.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const [randomElectroData, setRandomElectroData] = useState(
    getRandomItems(
      WholeData.filter((item) => item.type === "electro"),
      9
    )
  );

  const handleRefresh = () => {
    setRandomElectroData(
      getRandomItems(
        WholeData.filter((item) => item.type === "electro"),
        9
      )
    );
  };

  return (
    <div>
      <div className="grid">
        {randomElectroData.map((item, id) => (
          <div key={id} className="item-wrapper">
            <div className="image">
              <img width="100%" height="182px"  src={item.item} alt="item" />
            </div>
            <div className="about-item-main">
              <div className="about-item">
                <div className="grid-price">
                  <p>${item.price}.00</p>
                  <span>{item.sale}</span>
                </div>
                <div className="grid-rate">
                  {[...Array(5)].map((_, id) => (
                    <FaStar key={id} className="item-rating-star" />
                  ))}
                  <p className="rate">7.5</p>
                </div>

                <div className="grid-title">
                  <p>{item.title}</p>
                </div>
              </div>
              <div className="favorite-grid">
                <img 
                  onClick={() => handleHeartIconClick(item)}
                  src={item.favorite}
                  alt="favorite"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pages">
        <select>
          <option>Show 10</option>
        </select>
        <img src={left} alt="arrow" />
        <button onClick={() => handleRefresh()}>1</button>
        <button onClick={() => handleRefresh()}>2</button>
        <button onClick={() => handleRefresh()}>3</button>
        <img src={right} alt="arrow" />
      </div>
    </div>
  );
};

export { GadgetListGrid };
