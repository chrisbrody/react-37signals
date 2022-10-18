// components
import Image from "./Image";

function Product(props) {
  return (
    <div>
      <Image src={props.src} alt={props.alt} />
      <h3>
        <span>{props.h3}</span>
        <sup>{props.symbol}</sup>
      </h3>
      <h4>{props.h4}</h4>
      <p>{props.p}</p>
    </div>
  );
}

export default Product;
