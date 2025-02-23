import CartItem from "../../../components/CartItem";
import { capitalize } from "../../../utils";

const MainCart = ({ products, addToCart, removeFromCart }) => {
  return (
    <ul className="my-10 ml-4 flex w-full flex-col gap-10 rounded-2xl p-12 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)]">
      <li className="flex justify-between font-bold">
        <div className="w-[50%]">Product</div>
        <div className="w-[10%] text-center">Price</div>
        <div className="w-[30%] text-center">Quantity</div>
        <div className="w-[10%] text-center">Total Price</div>
      </li>
      {products.map((product, index) => (
        <li key={product.name}>
          {index == 0 || <hr className="border-1 border-gray-200 pb-10" />}
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
  );
};

export default MainCart;
