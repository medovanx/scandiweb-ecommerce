import './Navbar.css'
import { BsCart2 } from "react-icons/bs";
import Button from '../Button/Button';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [cartCount] = useState(0); // Initialize cart count state
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
                <div className="cart-icon">
                    <Button data-testid='cart-btn'><BsCart2 size={20} /></Button>
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </div>
            </div>
        </header>
    )
}

export default Navbar