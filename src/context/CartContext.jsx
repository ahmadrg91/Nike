import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
      });
      
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    const addToCart = itemName => setCart(prevCart => [...prevCart, itemName]);
    const removeFromCart = itemName => setCart(prevCart => prevCart.filter(item => item.name != itemName));

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);