import "./HeaderStyles.scss";
import brandimg from "../../assets/logo-colored.svg";
import { icons } from "./HeaderData";
import { useState, useRef, useEffect } from "react";
import { categories } from "./HeaderData";
import menu from "../../assets/menu.svg";
import expand from "../../assets/expand_more.png";
import card from "../../assets/shopping_cart.svg";
import person from "../../assets/person-mobile.svg";
import search from "../../assets/mobilesearch.svg";
import { MenuBar } from "./MenuBar";
import { NavLink } from "react-router-dom";
import { select } from "./HeaderData";
import { DropDownList } from "./DropDownList";

const Header = ({ chosenItems, setOpen, open, flags, setFlags }) => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [header, setHeader] = useState(true);

  const menuRef = useRef(null);
  const navigationRef = useRef(null);

  useEffect(() => {
    const handleMenu = (e) => {
      if (menuRef.current) {
        if (menuRef.current.contains(e.target)) {
          setBurgerMenu(true);
        }
      }
    };
    document.addEventListener("click", handleMenu);

    return () => {
      document.removeEventListener("click", handleMenu);
    };
  }, []);

  useEffect(() => {
    const handleSearch = (e) => {
      if (navigationRef.current) {
        if (navigationRef.current.contains(e.target)) {
          setOpen(false);
        }
      }
    };
    document.addEventListener("click", handleSearch);

    return () => {
      document.removeEventListener("click", handleSearch);
    };
  }, [setOpen]);

  const openCategory = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="header-wrapper">
        <div className="logo">
          <img ref={menuRef} className="mobile-menu" src={menu} alt="menu" />
          <NavLink to="ecommerce-frontend">
            <img width="100%" height="46px" src={brandimg} alt="brand" onClick={() => setHeader(true)} />
          </NavLink>
        </div>
        {burgerMenu && <MenuBar setBurgerMenu={setBurgerMenu} />}
        <form>
          <input className="input" type="text" placeholder="Search" />
          <div
            className="search-category"
            onClick={(e) => {
              e.stopPropagation();
              openCategory();
            }}
          >
            <p> All category</p>
            <img width="24px" height="24px" src={expand} alt="expand" />
          </div>
          <button className="search-button">Search</button>
          {open && (
            <div className="select-search" ref={navigationRef}>
              {select.map((item, id) => (
                <div key={id}>
                  <ul>
                    {item.title === "Clothes and wear" ? (
                      <NavLink to="/clothing">
                        {" "}
                        <li>{item.title}</li>
                      </NavLink>
                    ) : item.title === "Home interiros" ? (
                      <NavLink to="/HomeSourceItems">
                        <li>{item.title}</li>
                      </NavLink>
                    ) : item.title === "Computer and tech" ? (
                      <NavLink to="/second">
                        <li>{item.title}</li>
                      </NavLink>
                    ) : (
                      (item.title = "main" ? (
                        <NavLink to="/ecommerce-frontend">
                          <li>{item.title}</li>
                        </NavLink>
                      ) : (
                        <li>{item.title}</li>
                      ))
                    )}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </form>
        <div className="icons">
          {icons.map((item, id) => (
            <div key={id} className="desktop-icons">
              {item.title === "My cart" ? (
                <NavLink to="/cart">
                  <img
                   width="20px" height="19px"
                    src={item.icon}
                    alt="icon"
                    onClick={() => setHeader(false)}
                  />
                  <p onClick={() => setHeader(false)}>{item.title}</p>
                  <span className="number">{chosenItems.length}</span>
                </NavLink>
              ) : (
                <>
                  <img width="20px" height="19px" src={item.icon} alt="icon" />
                  <p>{item.title}</p>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mobile-icons">
          <NavLink to="/cart">
            <img width="24px" height="24px" src={card} alt="card" />
          </NavLink>
          <img width="24px" height="24px" src={person} alt="person" />
          <span className="mobile-number">{chosenItems.length}</span>
        </div>
      </div>
      <div className="mobile-form">
        <form>
          <input type="text" placeholder="Search" />
          <img src={search} alt="search" />
        </form>
        <div></div>
      </div>
      <div className="border"></div>
      {header && (
        <div className="category-wrapper">
          <div className="categories">
            <img width="24px" height="24px" src={menu} alt="menu" />
            {categories.map((item, id) => (
              <div className="category" key={id}>
                <ul>
                  <li>{item.title}</li>
                </ul>
              </div>
            ))}
            <img width="24px" height="24px" src={expand} alt="expand-more" />
          </div>
          <div className="countries">
            <div>
              <p>English, USD</p>
              <img  width="24px" height="24px" src={expand} alt="expand-more" />
            </div>
            <DropDownList flags={flags} setFlags={setFlags} />
          </div>
        </div>
      )}
      <div className="border"></div>
    </>
  );
};

export { Header };
