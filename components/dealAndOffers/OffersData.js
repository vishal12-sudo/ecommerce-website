
import camera from "../../assets/camera.WebP";
import headPhones from "../../assets/headphones.WebP";
import leptop from "../../assets/leptop.WebP";
import mobile from "../../assets/mobile.WebP";
import watch from "../../assets/watch.WebP";



const offers = [
    {
       image:watch,
       title:'Smart watches',
       price:"-25%",
       type:'watch'
    },
    {
        image:leptop,
        title:'Laptops',
        price:"-15%",
        type:'leptop'
     },
     {
        image:camera,
        title:'GoPro cameras',
        price:"-40%",
        type:'camera'
     },
     {
        image:headPhones,
        title:'Headphones',
        price:"-25%",
        type:'headphones'
        
     },
     {
        image:mobile,
        title:'Canon cameras',
        price:"-25%",
        type:'mobile'
     }
];

export {offers}