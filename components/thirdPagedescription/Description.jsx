import "./DescriptionStyles.scss";
import { description } from "./DescriptionData";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const Description = () => {
  const [descriptions, setDescriptions] = useState(true);
  const [review, setReview] = useState(true);
  const [shipping, setShipping] = useState(true);
  const [seller, setSeller] = useState(true);

  const handleReview = () => {
    setReview(false);
    setShipping(true);
    setSeller(true)
  };
  const handleShipping = () => {
    setReview(true);
    setShipping(false);
    setSeller(true)
  };

  const handleSeller = () => {
    setReview(false);
    setShipping(false);
    setSeller(true)
  };
  const handleDescription = ()=>{
    setReview(true);
    setShipping(true);
    setSeller(true);
  }
      
  return (
    <div className="description-wrapper">
      <div className="nav-bar">
        <ul>
          <li onClick={()=>handleDescription()}>Description</li>
          <li onClick={() => handleReview()}>Reviews</li>
          <li onClick={() => handleShipping()}>Shipping</li>
          <li onClick={()=>handleSeller()}>About seller</li>
        </ul>
      </div>
      <div className="border"></div>
      <div>
        {descriptions && description.map((item, id) => (
          <div key={id}>
            {shipping && (
              <p className={id === 0 ? "description-lorem" : ""}>{item.text}</p>
            )}

            {review && (
              <div className="details">
                <p className={id > 0 ? "model" : " "}>{item.model}</p>
                <p className={id > 0 ? "modelType" : " "}>{item.modelNumber}</p>
              </div>
            )}
          </div>
        ))}
        {seller && (
          <div className="checked-items">
            {description.map((item, id) => (
              <div key={id} className="checked">
                {id > 0 && id < 5 && <FaCheck className="facheck" />}
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { Description };
