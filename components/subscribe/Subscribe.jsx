import "./SubscribeStyle.scss";
import emailicon from "../../assets/email.svg";



const Subscribe = ()=>{
    return (
        <div className='subscribe-wrapper'>
            <div className="subscribe">
                <h4>Subscribe on our newsletter</h4>
                <p>Get daily news on upcoming offers from many suppliers all over the world</p>
                <div className="email-input">
                    <form>
                    <input type="email" placeholder="Email"/>
                    <button>Subscribe</button>
                    <img src={emailicon} alt="icon"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export {Subscribe}