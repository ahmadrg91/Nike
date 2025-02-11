import { products } from "../../constants";
import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem";
import { capitalize } from "../../utils";


const Cart = () => {
  let { cart, addToCart, removeFromCart } = useCart()

  const itemsInCart = cart.map(cartItem => {
    let product = products.find(product => product.name == cartItem.name);
    return { ...product, quantity: cartItem.quantity };
  })

  return (
    <main className="mt-40 mx-24">
      <div>
        <h1 className="font-bold text-3xl font-palanquin">Shopping Bag</h1>
        <h2 className="text-sm font-montserrat"><strong>{cart.length} items</strong> in your bag</h2>
      </div>
      <div className="">
        <ul className="ml-4 mt-10 flex w-[75%] flex-col gap-10 rounded-lg p-12 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)]">
          <li className="flex justify-between font-bold">
            <div className="w-[50%]">Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total Price</div>
          </li>
          {itemsInCart.map((product, index) => (
            <li key={product.name}>
              {index == 0 || <hr className="border-1 border-gray-300 pb-10" /> }
              <CartItem properties={{Color: capitalize(product.color), Size: product.size}} {...product} increaseQuantity={addToCart} decreaseQuantity={removeFromCart}/>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Cart;
