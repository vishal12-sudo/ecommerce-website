import "./ConditionStyle.scss";
import { related } from "../thirdPagedescription/sliderdata";
import cart from "../../assets/cart.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css'

const SavedLater = () => {
  return (
    <div className="related-items-wrapper">
      <h5>Saved for later</h5>
      <Swiper slidesPerView="auto">
        <SwiperSlide className="related-items">
          {related.map((item, id) => (
            <div key={id} className="related">
              <div>
                <img width="100%" height="146px"  src={item.image} alt="item" />
                <div className="cover"></div>
              </div>
              <p>{item.title}</p>
              <span>{item.price}</span>
              <button className="move">
                <img width="22px" height="22px" src={cart} alt="cart-icon" />
                Move to cart
              </button>
            </div>
          ))}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export { SavedLater };
