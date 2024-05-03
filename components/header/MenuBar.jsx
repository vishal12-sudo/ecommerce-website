import "./HeaderStyles.scss";
import avatar from "../../assets/Avatar.png";
import clear from "../../assets/clear.svg";
import { userMenu, userMenuAdd } from "./HeaderData";
import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const MenuBar = ({ setBurgerMenu }) => {
  const divRef = useRef(null);
  const imgRef = useRef(null);
  const menuRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (
        divRef.current &&
        imgRef.current &&
        wrapperRef.current &&
        menuRef.current
      ) {
        if (
          divRef.current.contains(e.target) &&
          !wrapperRef.current.contains(e.target)
        ) {
          setBurgerMenu(false);
        }
        if (imgRef.current.contains(e.target) || menuRef.current.contains(e.target)) {
          setBurgerMenu(false);
        }
      }
    };
  
    document.addEventListener("click", close);
  
    return () => {
      document.removeEventListener("click", close);
    };
  }, [setBurgerMenu]);

  
  return (
    <div className="burger-bar-wrapper" ref={divRef}>
      <div className="menu-wrapper" ref={wrapperRef}>
        <div className="avatar">
          <div>
            <img width="24px" height="24px" src={avatar} alt="avatar" />
            <p>Sign in | Register</p>
          </div>
          <div>
            <img width="24px" height="24px" ref={imgRef} src={clear} alt="clear" />
          </div>
        </div>
        <div className="menu-list" ref={menuRef}>
          {userMenu.map((item, id) => (
            <div key={id} className="list">
              <img width="24px" height="24px" src={item.icon} alt="icon" />
              {item.id === 1 ? (
                <NavLink to="/ecommerce-frontend">
                  <p>{item.title}</p>
                </NavLink>
              ) : item.id === 2 ? (
                <NavLink to="/second">
                  <p>{item.title}</p>
                </NavLink>
              ) : item.id === 3 ? (
                <NavLink to="/cart">
                  {" "}
                  <p>{item.title}</p>
                </NavLink>
              ) : (
                <NavLink to="/clothing">
                  {" "}
                  <p>{item.title}</p>
                </NavLink>
              )}
            </div>
          ))}
        </div>

        <div className="menu-list">
          {userMenuAdd.map((item, id) => (
            <div key={id} className="list">
              <img width="24px" height="24px" src={item.icon} alt="icon" />
              <p>{item.title}</p>
            </div>
          ))}
          <div className="border-menu"></div>

          <div className="add-list">
            <p>User agreement</p>
            <p>Partnership</p>
            <p>Privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MenuBar };
