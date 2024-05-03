import "./MayLikeStyle.scss";
import { slider } from "./sliderdata";

const MayLike = () =>{
    return(
      <div className="may-like-slider">
         <h6>You may like</h6>
         <div className="slider-wrapper">
          {slider.map((item,id)=>(
            <div key={id} className="slider" >
            <div className="may-like-img">
                <img src={item.image} alt="clothes"/>
            </div>
            <div className="may-like-description">
                <h5>{item.title}</h5>
                <p>{item.price}</p>
            </div>
            </div>
          ))}
         </div>
      </div>
    )
}

export {MayLike}
