import "./BannerStyle.scss";
import { list } from "./BannerData";
import banner from "../../assets/banner.WebP";
import user from "../../assets/user-avatar.png";
import { useState } from "react";
import { JoinPopUp } from "./popup/JoinPopUp";
import { LoginPopUp } from "./popup/LogInPopUp";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css'
import { NavLink } from "react-router-dom";

const Banner = () => {
  const [join, setJoin] = useState(false);
  const [login, setLogin] = useState(false);

  const handleClick = () => {
    setJoin(true);
  };

  const handleLogIn = () => {
    setLogin(true);
  };

  return (
    <div className="banner-wrapper">
      <Swiper className="category-list" slidesPerView="auto">
        <SwiperSlide className="slide">
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
      <div className="banner-img">
        <div className="banner">
          <img width="100%" height="auto" src={banner} alt="banner" />
        </div>
        <div className="banner-text">
          <h2>Latest trending</h2>
          <h1>Electronic items</h1>
          <NavLink to="/second">
            <button className="bannerbtn">Learn more</button>
          </NavLink>
        </div>
      </div>
      <div className="for-user">
        <div className="user-log">
          <div>
            <img src={user} alt="user" />
            <div className="user-text">
              <p>Hi, user</p>
              <p> let's get started</p>
            </div>
          </div>
          <div className="user-btns">
            <button className="join-now" onClick={() => handleClick()}>
              Join now
            </button>
            <button className="log-in" onClick={() => handleLogIn()}>
              Log in
            </button>
          </div>
        </div>
        <div className="orange-card">
          <p>Get US $10 off</p>
          <p>with a new </p>
          <p>supplier</p>
        </div>
        <div className="blue-card">
          <p>Send quotes with</p>
          <p>supplier</p>
          <p>preferences</p>
        </div>
      </div>
      {join && <JoinPopUp setJoin={setJoin} />}
      {login && <LoginPopUp setLogin={setLogin} />}
    </div>
  );
};

export { Banner };
