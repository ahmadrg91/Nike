import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = ({
  name,
  imgURL,
  properties,
  price,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center mr-4">
          <button
            className="border border-gray-300 rounded-full size-6 flex items-center justify-center"
            onClick={() => removeFromCart(name)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
      </div>
      <div className="flex w-[50%] gap-10">
        <img
          src={imgURL[0]}
          width={92}
          height={96}
          className="rounded-lg border object-contain dark:border-gray-700"
        />
        <div className="flex flex-col justify-center gap-6">
          <h2 className="font-montserrat text-xl font-semibold">{name}</h2>
          <div
            id="cart-item-props"
            className="flex flex-col text-sm font-medium"
          >
            {Object.entries(properties).map(([property, value]) => (
              <div key={property}>
                <span className="text-gray-500">{property}</span>
                <span className="font-extrabold"> &middot; </span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-[10%] items-center justify-center text-center font-semibold">
        ${price}
      </div>
      <div
        id="cart-item-quantity"
        className="flex w-[30%] items-center justify-center"
      >
        <button
          disabled={quantity == 1}
          onClick={() => decreaseQuantity(name)}
          className="flex size-6 items-center justify-center rounded-md border-2 text-gray-600 disabled:opacity-50 dark:border-gray-700 dark:text-slate-200"
        >
          &minus;
        </button>
        <span className="mx-5">{quantity}</span>
        <button
          onClick={() => increaseQuantity(name)}
          className="flex size-6 items-center justify-center rounded-md border-2 text-gray-600 dark:border-gray-700 dark:text-slate-200"
        >
          &#43;
        </button>
      </div>
      <div className="flex w-[10%] items-center justify-center font-semibold text-coral-red">
        ${(price * quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
