import "./InstockMobileStyle.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { shirt } from "./mobileData";

const ForMobileInstock = () => {
  return (
    <div className="instock-mobile">
      <Swiper slidesPerView="auto">
        <SwiperSlide className="swiperslide-img">
          {shirt.map((item, id) => (
            <div key={id} className="shirts">
              <img src={item.image} alt="shirt" />
            </div>
          ))}
        </SwiperSlide>  
      </Swiper>
    
    </div>
  );
};

export { ForMobileInstock };
