import "../sourceNow/SourceStyle.scss";
import electronics from "../../assets/electronics.png";
import { electroinics } from "./SourceData";
import arrowRight from "../../assets/arrow_forward.svg";
import { mobileElectronic } from "./SourceData";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink, useNavigate } from "react-router-dom";
import 'swiper/swiper.min.css'

const ElectorinicsSource = () => {
  const navigate = useNavigate();

  return (
    <div className="home-offer-wrapper">
      <div className="main-img">
        <img width="100%" height="auto" src={electronics} alt="home" />
        <div className="home-text">
          <h4>Home and outdoor</h4>
          <NavLink to="/second">
            <button>Source now</button>
          </NavLink>
        </div>
      </div>

      {electroinics.map((item, id) => (
        
        <div key={id} className="home-items"  onClick={() => navigate('/second')}>
          <div className="about-item">
            <p className="item-title">{item.title}</p>
            <p className="item-price">
              from <br />
              {item.price}
            </p>
          </div>
          <div className="item-imgs-wrapper">
            <img width="100%" height="auto" className="item-imgs" src={item.image} alt="item" />
          </div>
        </div>
      ))}
      <div className="mobile-wrapper">
        <h5>Consumer electronics</h5>
        <Swiper slidesPerView="auto" className="mobile-slide">
          {mobileElectronic.map((item, id) => (
            <SwiperSlide key={id} className="mobile-item"  onClick={() => navigate('/second')}>
              <img width="100%" height="auto" src={item.image} alt="furniture" />
              <p className="title">{item.title}</p>
              <p className="price">from {item.price}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="source">
          <p>Source now</p>
          <img width="22px" height="22px"  src={arrowRight} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export { ElectorinicsSource };
