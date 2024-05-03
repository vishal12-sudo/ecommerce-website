import { Navigation } from "../secondPage/Navigation";
import "../secondPage/SecondPageStyles.scss";
import { InStock } from "../thirdPageInStock/InStock";
import { Description } from "../thirdPagedescription/Description";
import { MayLike } from "../thirdPagedescription/MayLike";
import { RelatedItems } from "../relatedItmesThirdPade/RelatedItems";
import { Discount } from "../discountThirdPage/Discount";

const Clothing = () => {
  return (
    <div className="main-wrapper">
      <div className="content-wrapper">
        <Navigation />
        <InStock />
        <div className="description-section">
          <Description/>
          <MayLike/>
        </div>
         <RelatedItems/>
         <Discount/>
      </div>  
    </div>
  );
};

export { Clothing };
