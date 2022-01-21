import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/ProductItem.scss';
import addToCarImage from '@icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {
	const {addToCar} = useContext(AppContext)
	const handleClick = (item) =>
	{
		addToCar (item)
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
					{/* <p>id = {product.id}</p> */}
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addToCarImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
