import { products } from "../../constants";
import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem";

const Cart = () => {
  let { cart, addToCart, removeFromCart } = useCart();
  console.log(cart);

  cart = products.filter((product) => cart.includes(product.name));

  return (
    <main>
      <div>
        <ul className="mx-24 mt-80 flex w-[75%] flex-col gap-10 rounded-lg p-12 shadow-xl">
          <li className="flex justify-between font-bold">
            <div className="w-[39%]">Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total Price</div>
          </li>
          {cart.map((product) => (
            <li>
              <CartItem name={product.name} properties={{Color: "Black", Size: 42}} price={product.price} imgURL={product.imgURL} quantity={3}/>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Cart;
