import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItemMobile = ({
  name,
  imgURL,
  price,
  quantity,
  properties,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  return (
    <div className="flex w-full items-center justify-between gap-2">
      <div className="flex gap-2">
      <div className="flex items-center mr-4">
          <button
            className="border border-gray-300 rounded-full size-6 flex items-center justify-center"
            onClick={() => removeFromCart(name)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
      </div>
        <img
          src={imgURL[0]}
          className="size-20 rounded-md border dark:border-gray-700"
        />
        <div className="flex flex-col">
          <h2 className="font-semibold">{name}</h2>
          <div className="flex gap-2 text-xs font-medium">
            {Object.entries(properties).map(([key, value]) => (
              <li>
                <span className="text-gray-500">{key}</span>
                <span className="font-semibold"> &middot; </span>
                <span>{value}</span>
              </li>
            ))}
          </div>
          <p className="mt-2 font-semibold text-coral-red">
            ${price}{" "}
            <span className="ml-1 text-xs font-light italic text-gray-500 dark:text-slate-50">
              x{quantity}
            </span>
          </p>
        </div>
      </div>
      <div
        id="cart-item-quantity"
        className="flex w-fit flex-col justify-between gap-4"
      >
        <button
          onClick={() => increaseQuantity(name)}
          className="flex size-6 items-center justify-center rounded-md border text-gray-600 dark:border-gray-700 dark:text-slate-200"
        >
          &#43;
        </button>
        <button
          disabled={quantity == 1}
          onClick={() => decreaseQuantity(name)}
          className="flex size-6 items-center justify-center rounded-md border text-gray-600 disabled:opacity-50 dark:border-gray-700 dark:text-slate-200"
        >
          &minus;
        </button>
      </div>
    </div>
  );
};

export default CartItemMobile;
