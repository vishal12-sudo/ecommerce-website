import "./inquiryStyles.scss";
import germanFlag from "../../assets/flag.png";
import language from "../../assets/language.png";
import verified from "../../assets/verified_user.png";
import heart from "../../assets/favorite_border.png";


const SendInquiry = () => {
  return (
 <div>
    <div className="sendInquiry">
      <div className="supplier">
        <div>
          <h4>R</h4>
        </div>
        <div>
          <p>Supplier</p>
          <p>Guanjoi Trading LLC</p>
        </div>
      </div>
      <div className="border"></div>
      <div className="supplier-icons-inquiry">
        <div className="supplier-icons">
          <img src={germanFlag} alt="flag" />
          <img src={verified} alt="verified-icon" />
          <img src={language} alt="world" />
        </div>
        <div className="about-icons">
          <p>Germany, Berlin</p>
          <p>Verified Seller</p>
          <p>Worldwide shipping</p>
        </div>
      </div>
      <div className="send-inquiry-btn">
        <button>Send inquiry</button>
        <button>Seller’s profile</button>
      </div>
    </div>
   <div className="save-later">
    <img src={heart} alt="heart-icon"/>
    <span>Save for later</span>
   </div>
    </div>
  );
};

export { SendInquiry };
