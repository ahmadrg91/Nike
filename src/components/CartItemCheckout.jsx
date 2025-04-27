import React from "react";

const CartItemMobile = ({
  name,
  imgURL,
  price,
  quantity,
  properties,
}) => {
  return (
    <div className="flex w-full items-center justify-between gap-2">
      <div className="flex gap-6 items-center">
        <img
          src={imgURL[0]}
          className="size-20 rounded-md border dark:border-gray-700"
        />
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg">{name}</h2>
          <div className="flex gap-2 text-sm font-medium">
            {Object.entries(properties).map(([key, value]) => (
              <li>
                <span className="text-gray-500">{key}</span>
                <span className="font-semibold"> &middot; </span>
                <span>{value}</span>
              </li>
            ))}
          </div>
          <p className="mt-2 font-semibold text-lg text-coral-red">
            ${price}{" "}
            <span className="ml-1 text-xs font-light italic text-gray-500 dark:text-slate-50">
              x{quantity}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItemMobile;
