import "./SecondPageStyles.scss";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const numColumns = 4;
  const totalStars = 5;

  return (
    <div>
      <div className="rating-columns">
        {[...Array(numColumns)].map((_, columnIndex) => (
          <div key={columnIndex} className="rating-column">
            <input
              type="radio"
              name={`rating-${columnIndex}`}
              className="radio"
             
            />
            {[...Array(totalStars)].map((_, starIndex) => (
              <label key={starIndex}>
                <FaStar
                  style={{
                    color: starIndex >= totalStars - columnIndex ? "#808080" : "#FF9017",
                  }}
                  size={20}
                />
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export { StarRating };
