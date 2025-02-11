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
    <main className="mt-40 mx-12">
      <div>
        <h1 className="font-bold text-3xl font-palanquin">Shopping Bag</h1>
        <h2 className="text-sm font-montserrat"><strong>{cart.length} items</strong> in your bag</h2>
      </div>
      <div className="flex gap-5">
        <ul className="ml-4 my-10 flex w-[75%] flex-col gap-10 rounded-lg p-12 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)]">
          <li className="flex justify-between font-bold">
            <div className="w-[50%] ">Product</div>
            <div className="w-[10%] text-center ">Price</div>
            <div className="w-[30%] text-center ">Quantity</div>
            <div className="w-[10%] text-center ">Total Price</div>
          </li>
          {itemsInCart.map((product, index) => (
            <li key={product.name}>
              {index == 0 || <hr className="border-1 border-gray-200 pb-10" /> }
              <CartItem properties={{Color: capitalize(product.color), Size: product.size}} {...product} increaseQuantity={addToCart} decreaseQuantity={removeFromCart}/>
            </li>
          ))}
        </ul>
        <div className="shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)] pl-4 my-10 py-6 rounded-lg w-80">
          <div className="p-2">
            <h2 className="font-bold text-xl">Calculated Shipping</h2>
            <form className="pt-4 flex flex-col gap-4">
              <select className="rounded-full py-3 px-2 w-full text-sm font-semibold text-gray-700 outline-none bg-gray-100">
                <option disabled selected>Country</option>
                <option>Pakistan</option>
                <option>India</option>
                <option>USA</option>
              </select>
              <div className="w-full flex gap-2">
                <select className="rounded-full text-sm font-semibold py-3 px-2 w-[45%] text-gray-700 outline-none bg-gray-100">
                  <option disabled selected>State/City</option>
                  <option>Pakistan</option>
                  <option>India</option>
                  <option>USA</option>
                </select>
                <div className="w-[45%] border rounded-full flex items-center justify-center">
                  <input type="text" placeholder="Zip Code" className="w-full mx-2 outline-none"/>
                </div>
              </div>
              <input type="submit" value="Update" className=" bg-coral-red w-full rounded-full py-3 text-white font-palanquin text-lg font-semibold" />
            </form>
          </div>
        </div> 
      </div>
    </main>
  );
};

export default Cart;
