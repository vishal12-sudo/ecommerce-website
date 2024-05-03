import flag from "../../assets/flag.png";
import expand from "../../assets/expand_more.png";
import { listFlag } from "./HeaderData";
import { useState } from "react";
import "./HeaderStyles.scss";

const DropDownList = ({ flags, setFlags }) => {
  const [selectedFlag, setSelectedFlag] = useState(null);

  const handleFlagClick = (flagImage) => {
    setSelectedFlag(flagImage);
    setFlags(false);
  };

  const openMenu = () => {
    setFlags(!flags);
  };

  return (
    <div className="dropDown">
      <p>Ship to</p>
      <img className="flag" src={selectedFlag || flag} alt="flag" />
      <img
        width="24px"
        height="24px"
        src={expand}
        alt="expand-more"
        onClick={(e) => {
          e.stopPropagation();
          openMenu();
        }}
      />
      {flags && (
        <div className="list">
          {listFlag.map((item, id) => (
            <ul key={id}>
              <li onClick={() => handleFlagClick(item.image)}>
                <img width="22px" height="16px" src={item.image} alt="flag" />
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export { DropDownList };
