import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (productId) => {
        const existingItem = cartItems.find((item) => item.id === productId);
        if (existingItem) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCartItems([...cartItems, { id: productId, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === productId ? { ...item, quantity: parseInt(quantity) } : item
            )
        );
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };