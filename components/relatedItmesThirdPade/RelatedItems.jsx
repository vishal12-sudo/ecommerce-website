import "./RelatedItemsStyle.scss";
import { related } from "../thirdPagedescription/sliderdata";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css'

const RelatedItems = () => {
  return (
    <div className="related-items-wrapper" >
      <h5>Related products</h5>
      <Swiper slidesPerView="auto" >
      <SwiperSlide className="related-items">
        {related.map((item, id) => (
          <div key={id} className="related">
            <div>
              <img src={item.image} alt="item" />
              <div className="cover"></div>
            </div>
            <p>{item.title}</p>
            <span>{item.price}</span>
          </div>
        ))}
      </SwiperSlide>
      </Swiper>
    </div>
  );
};

export { RelatedItems };
