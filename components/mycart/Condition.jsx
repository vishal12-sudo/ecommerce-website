import "./ConditionStyle.scss";
import lock from "../../assets/icon.svg";
import messageicon from "../../assets/icon (1).svg";
import delivery from "../../assets/icon (2).svg"; 

const Conditions = ()=>{
    return(
        <div className="condition-wrapper">
             <div className="conditions">
                <div>
                    <img width="48px" height="48px" src={lock} alt="icon"/>
                </div>
                <div>
                    <p>Secure payment</p>
                    <span>Have you ever finally just </span>
                </div>
             </div>
             <div className="conditions">
                <div>
                    <img width="48px" height="48px" src={messageicon} alt="icon"/>
                </div>
                <div>
                    <p>Customer support</p>
                    <span>Have you ever finally just </span>
                </div>
             </div>
             <div className="conditions">
                <div>
                    <img  width="48px" height="48px" src={delivery} alt="icon"/>
                </div>
                <div>
                    <p>Free delivery</p>
                    <span>Have you ever finally just </span>
                </div>
             </div>
        </div>
    )
}

export {Conditions}