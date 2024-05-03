import "./RecommendedStyle.scss";
import { items } from "./RecommendedData";

const Items = () => {
  return (
    <div className="items-wrapper">
      <h3>Recommended items</h3>
      <div className="wrapper">
        {items.map((item, id) => (
          <div key={id} className="cloth-items">
            <img width="100%" height="171px"  src={item.image} alt="cloth" />
            <div className='description'>
              <span>{item.price}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Items };
