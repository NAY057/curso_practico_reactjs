import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import MyOrder from '@containers/MyOrder';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logos from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCar from '@icons/icon_shopping_cart.svg'

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false)
	const {state} = useContext(AppContext)
	const handleToogle = () => {
		setToggle(!toggle)
	}
	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logos} alt="logo" className="nav-logo" />
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
					<li className="navbar-email" onClick={handleToogle}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart">
						<img src={shoppingCar} alt="shopping cart" onClick={() => setToggleOrders(!toggleOrders)} />
						{state.car.length > 0 ? <div>{state.car.length}</div>: null}
					</li>
				</ul>
			</div>
			{toggle ? <Menu /> : null}
			{/* {toggle && <Menu/>} */}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;