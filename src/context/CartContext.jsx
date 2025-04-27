import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (itemName, quantity=1) => {
    setCart((prevCart) => {
      let temp = prevCart.map((i) =>
        i.name === itemName ? { ...i, quantity: i.quantity + quantity } : i,
      );
      return temp.some((i) => i.name == itemName)
        ? temp
        : [...temp, { name: itemName, quantity: quantity }];
    });
  };

  const decrementItemQuantity = (itemName) => {
    setCart((prevCart) => {
      let temp = prevCart
        .map((item) =>
          item.name === itemName
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
      return temp;
    });
  };

  const removeFromCart = (itemName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== itemName));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, decrementItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
