import "../suppliers/SuppliersStyle.scss";
import supply from "../../assets/supply.WebP";


const Suppliers = () => {
  return (
    <div className="supply-wrapper">
      <img width="100%" height="auto"  src={supply} alt="supply" />
      <div className="overlay"></div>
      <div className="supply-text">
        <h2>An easy way to send requests to all suppliers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        <div className="desktop">
                <button className="sendbtn">Send inquiry</button>
            </div>
      </div>
      <div className="supply-form">
        <form>
            <h4>Send quote to suppliers</h4>
            <div>
                <input type="text" placeholder="What item you need?"/>
            </div>
            <div>
            <textarea className="text" cols="40" rows="3" placeholder="Type more details"></textarea>
            </div>
            <div className="quantity">
              <input type="number" className="number" placeholder="Quantity"/>
              <input type='number' className="pcs" placeholder="Pcs"/>
            </div>
            <div>
                <button className="sendbtn">Send inquiry</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export { Suppliers };
