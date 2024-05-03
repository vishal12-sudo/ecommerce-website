import "./CartPageStyle.scss";
import { useState } from "react";

const Select = ({ item,  handleSelected }) => {
  const [selectedValue, setSelectedValue] = useState("1");
  const handleChange = (event, id) => {
    setSelectedValue(event.target.value);
    item.quantity = Number(event.target.value);
    handleSelected(item);
  };


  return (
    <select
      name="number"
      onChange={(e) => handleChange(e, item.id)}
      value={selectedValue}
      className="cart"
    >
      <option value="1">Qty:1</option>
      <option value="2">Qty:2</option>
      <option value="3">Qty:3</option>
      <option value="4">Qty:4</option>
      <option value="5">Qty:5</option>
      <option value="6">Qty:6</option>
      <option value="7">Qty:7</option>
      <option value="8">Qty:8</option>
      <option value="9">Qty:9</option>
      <option value="10">Qty:10</option>
    </select>
  );
};

export { Select };
