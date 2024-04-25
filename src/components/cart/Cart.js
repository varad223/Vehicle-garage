import React, { useState } from 'react';
import './Cart.css';
import spark from "./spark.jpg"
const Cart = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', image: 'image1.jpg', price: 10 },
        { id: 2, name: 'Product 2', image: 'image2.jpg', price: 20 },
        // Add more products as needed
    ]);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (productId) => {
        const productToAdd = products.find((product) => product.id === productId);
        const existingItem = cartItems.find((item) => item.id === productId);

        if (existingItem) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === productId ? { ...item, quantity: parseInt(quantity) || 1 } : item
            )
        );
    };

    // Calculate subtotal after cartItems are populated
    const subtotal = cartItems.reduce((acc, item) => {
        const itemPrice = item.price || 0; // Default to 0 if price is undefined
        const itemQuantity = item.quantity || 1; // Default to 1 if quantity is undefined
        return acc + itemPrice * itemQuantity;
    }, 0);

    return (
        <div className="shopping-cart">
            <h2>Products</h2>
            <ul className="products">
                {products.map((product) => (
                    <li key={product.id} className="product">
                        <img src={spark} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                    </li>
                ))}
            </ul>

            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="cart-items">
                    {cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                            <p>{item.name}</p>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, e.target.value)}
                            />
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            {cartItems.length > 0 && (
                <div className="cart-footer">
                    <p>Subtotal: ${subtotal.toFixed(2)}</p>
                    <button /* Implement payment processing */>Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
