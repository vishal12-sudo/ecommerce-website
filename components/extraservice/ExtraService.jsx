import "./ExtraServiceStyle.scss";
import { extra } from "./ExtraData";


const ExtraService = ()=>{
    return (
        <div className="extra-service-wrapper">
           <h3>
            Our extra services
           </h3>
           <div className="extra-wrapper">
            {extra.map((item,id)=>(
                <div key={id} className="extra">
                <img width="100%" height="120px"  className="img" src={item.image} alt="img"/>
                <p>{item.title}</p>
                <img  className="icon" src={item.icon} alt="icon"/>
              </div>
            ))}
             
           </div>
        </div>
    )
}

export {ExtraService}