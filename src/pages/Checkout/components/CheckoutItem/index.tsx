import { Minus, Plus, Trash } from 'phosphor-react';

import { useCart } from '../../../../contexts/cartContext';
import { CheckoutItemQuantity } from '../../../../styles/commonStyles';
import { CheckoutItemContainer, CheckoutItemInfo, Divider } from './styles';

export interface CartItem {
	id: number;
	title: string;
	price: number;
	quantity: number;
	imageUrl: string;
}

interface CheckoutItemProps {
	cartItem: CartItem;
}

export const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
	const { addCoffeeToCart, removeCoffeeFromCart, cart } = useCart();

	const handleAddCoffeeToCart = () => {
		addCoffeeToCart(cartItem);
	};

	// Remove coffee from cart
	const handleRemoveCoffeeFromCart = () => {
		removeCoffeeFromCart({ coffeeId: cartItem.id, removeCoffee: true });

		if (cart.length <= 1) {
			localStorage.removeItem('@coffee-delivery');
		}
	};

	// Reduce coffee quantity by 1
	const handleReduceCoffeeQuantity = () => {
		removeCoffeeFromCart({ coffeeId: cartItem.id });
	};

	const calculatePrice = () => {
		const totalPrice = cartItem.price * cartItem.quantity;
		return totalPrice;
	};

	return (
		<>
			<CheckoutItemContainer>
				<CheckoutItemInfo>
					<img src={cartItem.imageUrl} alt='' />

					<div>
						<p>{cartItem.title}</p>

						<div className='item-action'>
							<CheckoutItemQuantity>
								<button onClick={handleAddCoffeeToCart}>
									<Plus size={14} color='#8047F8' weight='bold' />
								</button>
								<span>{cartItem.quantity}</span>
								<button onClick={handleReduceCoffeeQuantity}>
									<Minus size={14} color='#8047F8' weight='bold' />
								</button>
							</CheckoutItemQuantity>

							<button
								className='remove-button'
								onClick={handleRemoveCoffeeFromCart}
							>
								<Trash size={16} color='#8047F8' />
								Remover
							</button>
						</div>
					</div>
				</CheckoutItemInfo>

				<span className='item-price'>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					}).format(calculatePrice())}
				</span>
			</CheckoutItemContainer>
			<Divider />
		</>
	);
};
