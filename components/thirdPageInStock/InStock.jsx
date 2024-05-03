import "./ClothingStyles.scss";
import mainShirt from "../../assets/image34.jpeg";
import shirt1 from "../../assets/image35.jpeg";
import shirt2 from "../../assets/image36.jpeg";
import shirt3 from "../../assets/image37.jpeg";
import shirt4 from "../../assets/image38.jpeg";
import shirt5 from "../../assets/image39.jpeg";
import shirt6 from "../../assets/image40.jpeg";
import { useState } from "react";
import { Content } from "./Content";
import {SendInquiry} from "./SendInquiry";
import { ForMobileInstock } from "./ForMobileInstock";


const InStock = () => {
  const [selectedShirt, setSelectedShirt] = useState(mainShirt);

  const handleShirtClick = (shirtImage) => {
    setSelectedShirt(shirtImage);
  };

  return (
    <div className="inStock-wrapper">
      <ForMobileInstock/>
      <div className="content">
        <div className="clothing-img">
          <div className="main-shirt">
            <img src={selectedShirt} alt="shirt" />
          </div>
          <div className="shirts">
            <img
              src={shirt1}
              alt="shirt"
              onClick={() => handleShirtClick(shirt1)}
            />
            <img
              src={shirt2}
              alt="shirt"
              onClick={() => handleShirtClick(shirt2)}
            />
            <img
              src={shirt3}
              alt="shirt"
              onClick={() => handleShirtClick(shirt3)}
            />
            <img
              src={shirt4}
              alt="shirt"
              onClick={() => handleShirtClick(shirt4)}
            />
            <img
              src={shirt5}
              alt="shirt"
              onClick={() => handleShirtClick(shirt5)}
            />
            <img
              src={shirt6}
              alt="shirt"
              onClick={() => handleShirtClick(shirt6)}
            />
          </div>
        </div>
        <div>
          <Content />
        </div>
      <SendInquiry/>
      </div>
    </div>
  );
};

export { InStock };
