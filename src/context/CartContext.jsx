import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("nike-clone-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("nike-clone-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (itemName) => {
    setCart(prevCart => {
      let temp = prevCart.map(i =>
        i.name === itemName ? {...i, quantity: i.quantity + 1} : i
      );
      return temp.some(i => i.name == itemName)
      ? temp
      : [...temp, {name: itemName, quantity: 1}];
    });
  }

  const removeFromCart = (itemName) => { 
    setCart(prevCart => {
      let temp = prevCart.map(item =>
        item.name == itemName ? {...item, quantity: item.quantity - 1} : item
      ).filter(item =>
        item.quantity > 0
      );
      return temp;
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
