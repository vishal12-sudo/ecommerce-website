import "./FooterStyle.scss";
import brandLogo from "../../assets/logo-colored.svg";
import { footerInfoEnglish, footerInfoGerman, link } from "./FooterData";
import google from "../../assets/market-button.svg";
import apple from "../../assets/apple.svg";
import Usa from "../../assets/USA.png";
import German from "../../assets/flag.png";
import expandUp from "../../assets/expand_less.svg";
import { useState, useRef, useEffect } from "react";

const Footer = () => {
  const [arrowUp, setArrowUp] = useState(true);
  const [language, setLanguage] = useState("english");
  const [chooseLanguage, setChooseLanguage] = useState(false);

  const arrowUpRef = useRef(null);
  const englishRef = useRef(null);
  const germanRef = useRef(null);

  useEffect(() => {
    const click = (e) => {
      if (arrowUpRef.current) {
        if (arrowUpRef.current.contains(e.target)) {
          setChooseLanguage(true);
        } else if (!arrowUpRef.current.contains(e.target)) {
          setChooseLanguage(false);
        }
      }
      if (englishRef.current) {
        if (englishRef.current.contains(e.target)) {
          setChooseLanguage(false);
          setLanguage("english");
          setArrowUp(true);
        }
      }
      if (germanRef.current) {
        if (germanRef.current.contains(e.target)) {
          setChooseLanguage(false);
          setLanguage("german");
          setArrowUp(false);
        }
      }
    };

    document.addEventListener("click", click);

    return () => {
      document.removeEventListener("click", click);
    };
  }, [setChooseLanguage]);

  const getLocalizedFooterInfo = () => {
    if (language === "english") {
      return footerInfoEnglish;
    } else if (language === "german") {
      return footerInfoGerman;
    }
  };

  const footerInfo = getLocalizedFooterInfo();

  return (
    <>
      <div className="footer-wrapper">
        <div className="media">
          <img width="150px" height="46px" src={brandLogo} alt="logo" />
          {language === "english" ? (
            <p>
              Best information about the company gies here but now lorem ipsum
              is
            </p>
          ) : (
            <p>
              Beste Informationen über das Unternehmen stehen hier, aber jetzt
              Lorem Ipsum
            </p>
          )}
          <div className="media-icons">
            {link.map((item, id) => (
              <div key={id} className="icons">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img width="32px" height="32px" src={item.icon} alt="media-icon" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-info">
          {footerInfo.map((item, id) => (
            <div key={id}>
              <p className="footer-title">{item.title}</p>
              <p>{item.info}</p>
              <p>{item.info2}</p>
              <p>{item.info3}</p>
              <p>{item.info3}</p>
            </div>
          ))}
        </div>
        <div className="get-app">
          <p>Gett app</p>
          <div className="app-icons">
            <div>
              <img width="124px" height="42px" src={apple} alt="apple-icon" />
            </div>
            <div>
              <img  width="124px" height="42px" src={google} alt="google-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="ecommerce-wrapper">
        <div className="ecommerce">
          <div className="ecommerce-text">
            <p>© 2023 Ecommerce. </p>
          </div>
          <div className="language">
            {arrowUp ? (
              <img width="24px" height="17px" src={Usa} alt="flag" />
            ) : (
              <img src={German} alt="flag" />
            )}
            {arrowUp ? <p>English</p> : <p>German</p>}
            <div>
              <div ref={arrowUpRef}>
                <img  width="22px" height="22px"  src={expandUp} alt="arrow" />
              </div>
            </div>

            {chooseLanguage && (
              <div className="language-list">
                <ul>
                  <li ref={englishRef}>English</li>
                  <li ref={germanRef}>German</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { Footer };
