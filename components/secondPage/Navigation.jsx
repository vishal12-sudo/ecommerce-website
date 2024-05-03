import "./SecondPageStyles.scss";
import arrowRight from "../../assets/chevron_right.svg";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { list } from "../firstPageBanner/BannerData";

const Navigation = ()=>{
    return(
      <>
      <Swiper  className="slider" slidesPerView="auto">
        <SwiperSlide className="swiperslide">
          {list.map((item, id) => (
            <ul key={id}>
              {item.title === "Home interiors" ? (
                <li>
                  <NavLink className="nav-link" to="/HomeSourceItems">{item.title}</NavLink>
                </li>
              ) : item.title === "Computer and tech" ? (
                <li>
                  <NavLink className="nav-link" to="/second">{item.title}</NavLink>
                </li>
              ) : item.title === "Clothes and wear" ? (
                <li>
                  <NavLink className="nav-link" to="/clothing">{item.title}</NavLink>
                </li>
              ) : (
                <li>{item.title}</li>
              )}
            </ul>
          ))}
        </SwiperSlide>
      </Swiper>
        <div className="list">
        <NavLink to="/ecommerce-frontend">
          <p>Home</p>
        </NavLink>
        <img src={arrowRight} alt="arrow" />
        <NavLink to="/clothing">
          <p>Clothings</p>
        </NavLink>
        <img src={arrowRight} alt="arrow" />
        <NavLink to="/second">
        <p>Electorinics</p>
        </NavLink>
        <img src={arrowRight} alt="arrow" />
        <NavLink to="/HomeSourceItems">
        <p>For Home</p>
        </NavLink>
      
      </div>
      </>
    )
}

export {Navigation}