import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css'
import { related } from "../../thirdPagedescription/sliderdata";
import "./SwiperStyles.scss";

const AlsoMayLike = () => {
  return (
    <div className="swiper-mayLike">
      <h3>You may also like</h3>
      <Swiper slidesPerView="auto">
        <SwiperSlide className="swiper-preview">
          {related.map((item, id) => (
            <div key={id} className="slider-item">
              <img src={item.image} alt="item" />
              <p>{item.price}</p>
              <span>{item.title}</span>
            </div>
          ))}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export { AlsoMayLike };
