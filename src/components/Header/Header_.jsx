import React from 'react';
import '/src/styles/components/Header.scss';
import MenuIcons from '/src/components/MenuIcons';
import fb from '@icons/fb-icon.svg';
import logo from '@logos/logo.svg'

const Header = () => {
    return (
        <nav>
            <img src={fb} alt="menu" className="menu"/>

                <div className="navbar-left">
                    <img src={logo} alt="logo" className="nav-logo"/>

                        <ul>
                            <li>
                                <a href="/">All</a>
                            </li>
                            <li>
                                <a href="/">Clothes</a>
                            </li>
                            <li>
                                <a href="/">Electronics</a>
                            </li>
                            <li>
                                <a href="/">Furnitures</a>
                            </li>
                            <li>
                                <a href="/">Toys</a>
                            </li>
                            <li>
                                <a href="/">Others</a>
                            </li>
                        </ul>
                </div>

                <div className="navbar-right">
                    <ul>
                        <li className="navbar-email">platzi@example.com</li>
                        <li>
                            <MenuIcons/>
                        </li>
                        <li className="navbar-shopping-cart">
                            <img src={fb} alt="shopping cart"/>
                                <div>2</div>
                        </li>
                    </ul>
                </div>
        </nav>

    )
}
export default Header