import { star } from "../assets/icons";
import { Link } from "react-router-dom";

const ProductCard = ({ name, price, ratings, color }) => {
  return (
    <Link to={`/product/${name}`}>
      <div className="flex h-full w-full flex-col gap-1">
        <div className="w-fit bg-product-card bg-cover bg-center dark:bg-d-procuct-card">
          <img
            src={`../../src/assets/products/images/${name.split(" ").join("").split('.').join("")}_${color.toUpperCase()}_0.jpg`}
            alt="shoe card"
            width={212}
            height={212}
            className="rounded-xl"
          />
        </div>
        <div className="mt-3 flex gap-1 text-xl text-slate-gray">
          <img src={star} width={18} height={18} className="inline-block" /> (
          {ratings})
        </div>
        <p className="font-palanquin text-xl font-semibold">{name}</p>
        <p className="font-montserrat text-xl font-semibold text-coral-red">
          $ {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
