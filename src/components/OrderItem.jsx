import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import '../styles/OrderItem.scss';

const OrderItem = ({product, index}) => {
	const {remove_from_car} = useContext(AppContext)
	// const {state} = useContext(AppContext)
	const handle_remove = (product, index) => {
		remove_from_car(product, index)
	}
	console.log({product})
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src="./icons/icon_close.png" alt="close" onClick={() => handle_remove(product, index)} />
			<p>index: {index}</p>
			{/* <p>{remove_from_car.indextest}</p> */}
			{/* <p>state: {state.indextest}</p> */}
		</div>
	);
}

export default OrderItem;
