import CartItem from "../../../components/CartItem";
import CartItemMobile from "../../../components/CartItemMobile";
import { capitalize } from "../../../utils";

const MainCart = ({ products, addToCart, removeFromCart }) => {
  return (
    <>
      <ul className="hidden h-fit flex-col gap-10 rounded-2xl p-12 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)] md:flex md:w-[80%] dark:bg-gray-800">
        <li className="flex justify-between font-bold">
          <div className="w-[50%]">Product</div>
          <div className="w-[10%] text-center">Price</div>
          <div className="w-[30%] text-center">Quantity</div>
          <div className="w-[10%] text-center">Total Price</div>
        </li>
        {products.map((product, index) => (
          <li key={product.name}>
            {index == 0 || (
              <hr className="border-1 border-gray-200 pb-10 dark:border-gray-700" />
            )}
            <CartItem
              key={product.name}
              properties={{
                Color: capitalize(product.color),
                Size: product.size,
              }}
              {...product}
              increaseQuantity={addToCart}
              decreaseQuantity={removeFromCart}
            />
          </li>
        ))}
      </ul>
      <ul className="mx-6 mb-72 flex w-full flex-col md:hidden">
        {products.map((product, index) => (
          <li key={product.name}>
            {index == 0 || (
              <hr className="border-1 my-6 border-gray-200 dark:border-gray-700" />
            )}
            <CartItemMobile
              key={product.name}
              properties={{
                Color: capitalize(product.color),
                Size: product.size,
              }}
              {...product}
              increaseQuantity={addToCart}
              decreaseQuantity={removeFromCart}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainCart;
