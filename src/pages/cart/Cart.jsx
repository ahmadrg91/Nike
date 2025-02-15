import { products } from "../../constants";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";
import MainCart from "./sections/MainCart";
import SideBar from "./sections/SideBar";


const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [ subtotal, setSubtotal ] = useState();
  const [ discounts, setDiscounts ] = useState({
  });

  const itemsInCart = cart.map(cartItem => {
    let product = products.find(product => product.name == cartItem.name);
    return { ...product, quantity: cartItem.quantity };
  })

  useEffect(() => {
    let sum = 0;
    itemsInCart.forEach(item => {
      sum += (item.quantity * item.price);
    });
    setSubtotal(sum.toFixed(2));
  }, [itemsInCart]);

  return (
    <main className="mt-40 mx-12 flex gap-4 justify-between">
      <div className="flex flex-col w-[73%]">
        <div>
          <h1 className="font-bold text-3xl font-palanquin text-coral-red">Shopping Bag</h1>
          <h2 className="text-sm font-montserrat"><strong>{cart.length} items</strong> in your bag</h2>
        </div>
         <MainCart products={itemsInCart}addToCart={addToCart} removeFromCart={removeFromCart} />
      </div>
      <SideBar subtotal={subtotal} discounts={discounts} setDiscounts={setDiscounts}/>
    </main>
  );
};

export default Cart;
