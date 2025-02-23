import { products } from "../../constants";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";
import MainCart from "./sections/MainCart";
import SideBar from "./sections/SideBar";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [subtotal, setSubtotal] = useState();
  const [discounts, setDiscounts] = useState({});

  const itemsInCart = cart.map((cartItem) => {
    let product = products.find((product) => product.name == cartItem.name);
    return { ...product, quantity: cartItem.quantity };
  });

  useEffect(() => {
    let sum = 0;
    itemsInCart.forEach((item) => {
      sum += item.quantity * item.price;
    });
    setSubtotal(sum.toFixed(2));
  }, [itemsInCart]);

  return (
    <main className="mt-24 flex flex-col gap-4 md:mx-12 dark:bg-gray-900 dark:text-slate-200">
      <div className="mx-4">
        <h1 className="font-palanquin text-3xl font-bold text-coral-red">
          Shopping Bag
        </h1>
        <h2 className="font-montserrat text-sm">
          <strong>{cart.length} items</strong> in your bag
        </h2>
      </div>
      <div className="flex gap-4">
        <MainCart
          products={itemsInCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <SideBar
          subtotal={subtotal}
          discounts={discounts}
          setDiscounts={setDiscounts}
        />
      </div>
    </main>
  );
};

export default Cart;
