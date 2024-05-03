import "../GadgetListStyle.scss";
import { WholeData } from "../../allData/AllData";
import { useState } from "react";
import right from "../../../assets/chevron-right.png";
import left from "../../../assets/chevron-left.svg";
import { FaStar } from "react-icons/fa";



const HomeListView = ({handleHeartIconClick}) => {
 

  const getRandomItems = (arr, count) => {
    const shuffled = arr.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const [randomElectroData, setRandomElectroData] = useState(
    getRandomItems(
      WholeData.filter((item) => item.type === "home"),
      6
    )
  );

  const handleRefresh = () => {
    setRandomElectroData(
      getRandomItems(
        WholeData.filter((item) => item.type === "home"),
        6
      )
    );
  };

  return (
    <>
      {randomElectroData.map((item, id) => (
        <div className="gadget-wrapper" key={id}>
          <div className="gadget-img">
            <img width="100%" height="182px" src={item.item} alt="elecctronic-img" />
          </div>
          <div className="gadget-info">
            <div className="gadget-title">
              <p>{item.title}</p>
              <img 
                onClick={() => handleHeartIconClick(item)}
                src={item.favorite}
                alt="heart-icon"
              />
            </div>
            <div className="gadget-price">
              <span className="price">${item.price}.00</span>
              <span className="sale">{item.sale}</span>
            </div>
            <div className="gadget-shipping">
              {[...Array(5)].map((_, id) => (
                <FaStar key={id} className="item-rating-star" />
              ))}
              <p className="rate">7.5</p>
              <span></span>
              <p className="orders">{item.orders}</p>
              <span></span>
              <p className="shipping">{item.shipping}</p>
            </div>
            <p className="description">{item.description}</p>
            <span className="details">{item.details}</span>
          </div>
        </div>
      ))}
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
    </>
  );
};

export { HomeListView };
