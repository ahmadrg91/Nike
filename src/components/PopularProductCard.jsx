import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, ratings }) => {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="w-fit bg-product-card bg-cover bg-center dark:bg-d-procuct-card">
        <img
          src={imgURL}
          alt="shoe card"
          width={282}
          height={282}
          className="object-contain"
        />
      </div>
      <div className="mt-6 flex gap-3 text-2xl text-slate-gray">
        <img src={star} width={24} height={24} className="inline-block" /> (
        {ratings})
      </div>
      <p className="font-palanquin text-2xl font-semibold">{name}</p>
      <p className="font-montserrat text-2xl font-semibold text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
