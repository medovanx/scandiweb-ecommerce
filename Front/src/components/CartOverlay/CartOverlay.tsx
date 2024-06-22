import React from 'react';
import './CartOverlay.css'; // Import CSS for CartOverlay styling
import { useCartContext } from '../../context/CartContext';
import { updateCartItemQuantity, removeCartItem } from '../../utils/CartUtil'; // Import the utility functions
import { CartItem } from '../../types/CartItem';

interface CartOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartOverlay: React.FC<CartOverlayProps> = ({ isOpen, onClose }) => {
    const { cartCount, cartItems, setCartItems } = useCartContext();

    if (!isOpen) return null;

    const handleIncrement = (itemId: string) => {
        const updatedCartItems = updateCartItemQuantity(cartItems, itemId, 1);
        setCartItems(updatedCartItems);
    };

    const handleDecrement = (itemId: string) => {
        const updatedCartItems = updateCartItemQuantity(cartItems, itemId, -1);
        setCartItems(updatedCartItems);
    };

    const handleRemove = (itemId: string) => {
        const updatedCartItems = removeCartItem(cartItems, itemId);
        setCartItems(updatedCartItems);
    };

    const renderAttributes = (item: CartItem) => {
        const attributesMap = new Map<string, string[]>(); // Map to store attributes by name

        // Group attributes by name
        item.attributes.forEach(attr => {
            const attributeName = attr.name.toLowerCase();
            const attributeValue = attr.value;

            if (attributesMap.has(attributeName)) {
                attributesMap.get(attributeName)!.push(attributeValue);
            } else {
                attributesMap.set(attributeName, [attributeValue]);
            }
        });

        return (
            <div className="item-attributes">
                {/* Render Color attribute if exists */}
                {attributesMap.has('color') && (
                    <div>
                        <span className="attribute-name">Color: </span>
                        {attributesMap.get('color')!.map((value, index) => (
                            <span key={`color-${index}`} style={{ backgroundColor: value }} className="color-attribute"></span>
                        ))}
                    </div>
                )}

                {/* Render Size attribute if exists */}
                {attributesMap.has('size') && (
                    <div>
                        <span className="attribute-name">Size: </span>
                        {attributesMap.get('size')!.map((value, index) => (
                            <span key={`size-${index}`} className="attribute-value-box">{value}</span>
                        ))}
                    </div>
                )}

                {/* Render other attributes */}
                {Array.from(attributesMap.entries()).map(([name, values], index) => {
                    if (name !== 'color' && name !== 'size') {
                        return (
                            <div key={`other-${index}`}>
                                <span className="attribute-name">{name}: </span>
                                {values.map((value, idx) => (
                                    <span key={`${name}-${idx}`} className="attribute-value-box">{value}</span>
                                ))}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        );
    };

    return (
        <div className="overlay-bg">
            <div className="cart-overlay">
                <div className="cart-overlay-content">
                    <span className="close-btn" onClick={onClose}>&times;</span>
                    <p><span className='main-bag-text'>My Bag</span>, {cartCount} {cartCount === 1 ? 'item' : 'items'}</p>
                    <ul className="cart-items">
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <div className="item-info">
                                    <div className="item-details">
                                        <h4>{item.name}</h4>
                                        <p>${item.totalPrice.toFixed(2)}</p> {/* Display totalPrice */}
                                        {renderAttributes(item)}
                                        <p>Quantity: {item.quantity}</p>
                                        <div className="quantity-btns">
                                            <button className="quantity-btn" onClick={() => handleIncrement(item.id)}>+</button>
                                            <button className="quantity-btn" onClick={() => handleDecrement(item.id)}>-</button>
                                            <button className="quantity-btn" onClick={() => handleRemove(item.id)}>Remove</button>

                                        </div>
                                    </div>
                                    <div className="item-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="total-price">Total: ${cartItems.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2)}</p>
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartOverlay;
