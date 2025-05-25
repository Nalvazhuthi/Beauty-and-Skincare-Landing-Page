import React from 'react'
import { useCartStore } from '../store/cartList' // Adjust path as needed

const CartList = () => {
    const items = useCartStore((state) => state.items)
    const removeItem = useCartStore((state) => state.removeItem)
    const updateQuantity = useCartStore((state) => state.updateQuantity)
    const clearCart = useCartStore((state) => state.clearCart)

    const getTotal = () => {
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }

    return (
        <div className="cart-list-container">
            <h2>Your Cart</h2>

            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {items.map(item => (
                            <li key={item.id} className="cart-item">
                                <div className="item-info">
                                    <div><strong>{item.name}</strong></div>
                                    <div>Price: ₹{item.price}</div>
                                    <div>Quantity:
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        {item.quantity}
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <div>Total: ₹{item.price * item.quantity}</div>
                                </div>
                                <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>

                    <div className="cart-summary">
                        <h3>Total: ₹{getTotal()}</h3>
                        <button onClick={clearCart}>Clear Cart</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default CartList
