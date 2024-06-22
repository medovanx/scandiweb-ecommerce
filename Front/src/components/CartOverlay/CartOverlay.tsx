import React from 'react';
import './CartOverlay.css'; // Import CSS for CartOverlay styling
import { useCartContext } from '../../context/CartContext';

interface CartOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartOverlay: React.FC<CartOverlayProps> = ({ isOpen, onClose }) => {
    const { cartCount, cartItems } = useCartContext();

    if (!isOpen) return null;

    return (
        <>
            <div className="overlay-bg" onClick={onClose}></div>
            <div className="cart-overlay">
                <div className="cart-overlay-content">
                    <span className="close-btn" onClick={onClose}>&times;</span>
                    <p><span className='main-bag-text'>My Bag</span>, {cartCount} {cartCount === 1 ? 'item' : 'items'}</p>
                    <ul className="cart-items">
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <div className="item-info">
                                    <span>{item.name}</span>
                                    <span>Quantity: {item.quantity}</span>
                                    <span>Price: ${item.price}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button className="checkout-btn">Place Order</button>
                </div>
            </div>
        </>
    );
};

export default CartOverlay;
