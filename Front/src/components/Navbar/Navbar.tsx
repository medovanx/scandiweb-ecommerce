import './Navbar.css'
import { BsCart2 } from "react-icons/bs";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartOverlay from '../CartOverlay/CartOverlay';
import { useCartContext } from '../../context/CartContext';

const Navbar = () => {
    const { cartCount } = useCartContext(); // Destructure cartCount from the context
    const [cartOpen, setCartOpen] = useState(false); // State to manage cart overlay

    const toggleCart = () => {
        console.log('Cart is now:', cartOpen ? 'open' : 'closed');
        setCartOpen(!cartOpen);
    };

    return (
        <header>
            <div className="header-items">
                <nav>
                    <ul>
                        <li data-testid='category-link'><NavLink
                            to="/all"
                            className={({ isActive }) => isActive ? "active-link" : ""}
                        >
                            All
                        </NavLink>
                        </li>
                        <li data-testid='category-link'>
                            <NavLink
                                to="/clothes"
                                className={({ isActive }) => isActive ? "active-link" : ""}
                            >
                                Clothes
                            </NavLink>
                        </li>
                        <li data-testid='category-link'>
                            <NavLink
                                to="/tech"
                                className={({ isActive }) => isActive ? "active-link" : ""}
                            >
                                Tech
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="cart-icon" onClick={toggleCart}>
                    <span data-testid='cart-btn'><BsCart2 size={30} /></span>
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </div>
                <CartOverlay isOpen={cartOpen} onClose={toggleCart} />
            </div>
        </header>
    )
}

export default Navbar