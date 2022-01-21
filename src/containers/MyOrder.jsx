import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '../styles/MyOrder.scss';
// import { useContext } from 'react/cjs/react.development';

const MyOrder = () => {
	const {state} = useContext(AppContext)
	const sum_total = () => {
		const count_total = (counter, current_value) => counter + current_value.price
		const sum = state.car.reduce(count_total,0)
		return sum
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src="./icons/flechita.svg" alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.car.map((product, index) => (<OrderItem product={product} key={`orderItem-${product.id}`} index={index}/>))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${state.total}</p>
					{/* <p>${sum_total()}</p> */}
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
