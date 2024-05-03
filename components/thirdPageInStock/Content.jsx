import "./ClothingStyles.scss";
import { FaCheck, FaStar } from "react-icons/fa";
import message from "../../assets/message.svg";
import basket from "../../assets/shopping_basket.svg";
import { data } from "./contentData";

const Content = () => {
  return (
    <div className="shirt-content-wrapper">
      <div className="in-stock">
        <FaCheck className="check" />
        <span>In stock</span>
      </div>
      <div className="title">
        <h4>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h4>
      </div>
      <div className="number-instock">
        {[...Array(5)].map((_, id) => (
          <FaStar className="star" key={id} />
        ))}
        <span>9.3</span>
        <div className="dot"></div>
        <img src={message} alt="message" />
        <p>32 reviews</p>
        <div className="dot"></div>
        <img src={basket} alt="basket" />
        <p>154 sold</p>
      </div>
      <div className="cloths-price">
        <div className="price-pcs">
          <h5>$95.00</h5>
          <p>50-100pcs</p>
        </div>
        <div className="price-pcs">
          <h5>$90.00</h5>
          <p>100-700pcs</p>
        </div>
        <div className="price-pcs">
          <h5>$78.00</h5>
          <p>700+ pcs</p>
        </div>
      </div>
      <div className="clothes-description">
        {data.map((item, id) => (
          <div
            key={id}
            className={`clothes-item ${id === 0 ? "first" : ""} ${
              id === 3 ? "fourth" : ""
            } ${id === data.length - 1 ? "last" : ""}`}
          >
            <div className="about">
              <p className="clothes-title">{item.title}</p>
            </div>
            <div>
              <p className="clothes-descript">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Content };
