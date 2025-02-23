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
    <main className="mx-12 mt-40 flex justify-between gap-4">
      <div className="flex w-[73%] flex-col">
        <div>
          <h1 className="font-palanquin text-3xl font-bold text-coral-red">
            Shopping Bag
          </h1>
          <h2 className="font-montserrat text-sm">
            <strong>{cart.length} items</strong> in your bag
          </h2>
        </div>
        <MainCart
          products={itemsInCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </div>
      <SideBar
        subtotal={subtotal}
        discounts={discounts}
        setDiscounts={setDiscounts}
      />
    </main>
  );
};

export default Cart;
