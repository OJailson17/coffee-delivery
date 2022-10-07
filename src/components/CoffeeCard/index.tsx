import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useCart } from '../../contexts/cartContext';
import { CoffeeCardQuantity } from '../../styles/commonStyles';

import {
	CoffeeCardAction,
	CoffeeCardContainer,
	CoffeeCardInfo,
	CoffeeCartButton,
} from './styles';

interface CoffeeCard {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	tags: string[];
	price: number;
}

interface CoffeeCardProps {
	coffee: CoffeeCard;
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
	const { addCoffeeToCart, cart, removeCoffeeFromCart } = useCart();
	const [coffeeQuantity, setCoffeeQuantity] = useState(0);

	const getItemQuantity = (): number => {
		const item = cart.find(coffeeItem => coffeeItem.id === coffee.id);
		setCoffeeQuantity(item?.quantity || 0);
		return item?.quantity || 0;
	};

	// Add selected coffee to cart
	const handleAddCoffeeToCart = () => {
		const { id, title, imageUrl, price } = coffee;

		const coffeeData = {
			id,
			title,
			imageUrl,
			price,
			quantity: coffeeQuantity,
		};

		addCoffeeToCart(coffeeData);
	};

	const handleRemoveCoffeeFromCart = () => {
		removeCoffeeFromCart({ coffeeId: coffee.id });
	};

	useEffect(() => {
		getItemQuantity();
	}, [cart]);

	return (
		<CoffeeCardContainer>
			<img src={coffee.imageUrl} alt='' />

			{/* Tags */}
			<div className='tags'>
				<span>TRADICIONAL</span>
			</div>

			{/* card info */}
			<CoffeeCardInfo>
				<p>{coffee.title}</p>
				<span>{coffee.description}</span>

				<CoffeeCardAction>
					{/* Price */}
					<div className='coffee-price'>
						<span>
							R$ <strong>{coffee.price}</strong>
						</span>
					</div>

					<div>
						{/* Quantity */}
						<CoffeeCardQuantity>
							<button onClick={handleAddCoffeeToCart}>
								<Plus size={14} color='#8047F8' weight='bold' />
							</button>
							<span>{coffeeQuantity}</span>
							<button onClick={handleRemoveCoffeeFromCart}>
								<Minus size={14} color='#8047F8' weight='bold' />
							</button>
						</CoffeeCardQuantity>
						{/* Cart */}
						<CoffeeCartButton onClick={handleAddCoffeeToCart}>
							<ShoppingCart size={22} weight='fill' color='#F3F2F2' />
						</CoffeeCartButton>
					</div>
				</CoffeeCardAction>
			</CoffeeCardInfo>
		</CoffeeCardContainer>
	);
};
