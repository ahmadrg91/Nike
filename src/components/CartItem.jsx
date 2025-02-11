import React from "react";

const CartItem = ({
  name,
  imgURL,
  properties,
  price,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className="flex justify-between">
        <div className="flex w-[50%] gap-10">
            <img
                src={imgURL}
                width={92}
                height={96}
                className="rounded-lg border object-contain"
            />
            <div className="flex flex-col justify-center gap-6">
                <h2 className="font-montserrat text-xl font-semibold">{name}</h2>
                <div
                    id="cart-item-props"
                    className="flex flex-col text-sm font-medium"
                >
                    {Object.entries(properties).map(([property, value]) => (
                    <div>
                        <span className="text-gray-500">{property}</span>
                        <span className="font-extrabold"> &middot; </span>
                        <span>{value}</span>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="flex items-center font-semibold">${price}</div>
        <div id="cart-item-quantity" className="flex items-center">
            <button onClick={() => decreaseQuantity(name)} className="flex size-6 items-center justify-center rounded-md border-2 font-bold text-gray-600">
            &minus;
            </button>
            <span className="mx-5">{quantity}</span>
            <button onClick={() => increaseQuantity(name)} className="flex size-6 items-center justify-center rounded-md border-2 font-bold text-gray-600">
            &#43;
            </button>
        </div>
        <div className="flex items-center font-semibold text-coral-red">
            ${(price * quantity).toFixed(2)}
        </div>
    </div>
  );
};

export default CartItem;
