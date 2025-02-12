import { products } from "../../constants";
import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem";
import { capitalize } from "../../utils";
import { useEffect, useState } from "react";


const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [ subtotal, setSubtotal ] = useState();

  const itemsInCart = cart.map(cartItem => {
    let product = products.find(product => product.name == cartItem.name);
    return { ...product, quantity: cartItem.quantity };
  })

  useEffect(() => {
    let sum = 0;
    itemsInCart.forEach(item => {
      sum += Math.round(item.quantity * item.price, 2);
    });
    setSubtotal(sum);
  }, [itemsInCart])

  return (
    <main className="mt-40 mx-12 flex gap-4 justify-between">
      <div className="flex flex-col w-[73%]">
        <div>
          <h1 className="font-bold text-3xl font-palanquin text-coral-red">Shopping Bag</h1>
          <h2 className="text-sm font-montserrat"><strong>{cart.length} items</strong> in your bag</h2>
        </div>
        <ul className="ml-4 my-10 flex w-full flex-col gap-10 rounded-2xl p-12 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)]">
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
      </div>
      <div className="sticky top-2 w-[24%] h-fit shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)] px-3 py-6 my-10 rounded-2xl">
          <div className="p-2">
            <h2 className="font-bold text-xl">Calculated Shipping</h2>
            <form >
              <div className="flex flex-col gap-3 my-6">
                <div className="rounded-3xl bg-gray-100 pl-2 pr-3">
                  <select className="py-3 w-full text-sm font-semibold text-gray-700 outline-none bg-transparent">
                    <option disabled selected>Country</option>
                    <option>Pakistan</option>
                    <option>India</option>
                    <option>USA</option>
                  </select>
                </div>
                <div className="w-full flex gap-2">
                  <div className="rounded-3xl w-[45%] bg-gray-100 pl-2 pr-3">
                    <select className="text-sm py-3 font-semibold w-full text-gray-700 outline-none bg-transparent">
                      <option disabled selected>State/City</option>
                      <option>Pakistan</option>
                      <option>India</option>
                      <option>USA</option>
                    </select>
                  </div>
                  <div className="w-[45%] border rounded-full flex items-center justify-center">
                    <input type="text" placeholder="Zip Code" className="w-full mx-4 outline-none italic font-light"/>
                  </div>
                </div>     
              </div>
              <input type="submit" value="Update" className="bg-coral-red w-full rounded-3xl py-3 text-white font-palanquin text-lg font-semibold" />
            </form>
          </div>
          <hr className="border-1 border-gray-400 my-6 rounded-full" />
          <div className="p-2">
            <h2 className="font-bold text-xl">Coupon Code</h2>
            <p className="font-montserrat text-gray-700 text-sm my-2">Have a promo code? Enter it below and enjoy special discounts on your order. Make sure to apply it before checkout to maximize your savings!</p>
            <form>
              <div className="mb-6 rounded-3xl py-3 px-2 w-full text-sm text-gray-700 outline-none bg-gray-100">
                <input type="text" placeholder="Coupon Code" className="w-full mx-2 outline-none bg-transparent"/>
              </div>
              <input type="submit" value="Apply" className="bg-coral-red w-full rounded-full py-3 text-white font-palanquin text-lg font-semibold" />
            </form>
          </div>
          <div className="bg-[#ffd28d] rounded-2xl px-4 py-6 mt-12">
            <h2 className="font-bold text-xl">Cart Total</h2>
            <div className="flex flex-col mt-3 mb-6">
              <div className="flex justify-between">
                <p>Cart Subtotal</p><p>${subtotal}</p>
              </div>
              <div className="flex justify-between">
                <p>Discount</p><p className="text-white font-semibold">-$4.00</p>
              </div>
              <div className="flex justify-between font-semibold">
                <p>Cart Total</p><p className="text-xl">${subtotal}</p>
              </div>
            </div>
            <button className="w-full rounded-3xl bg-white p-3 mt-4 font-semibold">
              Checkout
            </button>
          </div>
      </div>
    </main>
  );
};

export default Cart;
