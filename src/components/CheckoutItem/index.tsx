import { Minus, Plus, Trash } from 'phosphor-react';

import { useCart } from '../../contexts/cartContext';
import { CheckoutItemQuantity } from '../../styles/commonStyles';
import { CheckoutItemContainer, CheckoutItemInfo, Divider } from './styles';

interface CartItem {
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
	const { addCoffeeToCart } = useCart();

	const handleAddCoffeeToCart = () => {
		addCoffeeToCart(cartItem);
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
								<button>
									<Minus size={14} color='#8047F8' weight='bold' />
								</button>
							</CheckoutItemQuantity>

							<button className='remove-button'>
								<Trash size={16} color='#8047F8' />
								Remover
							</button>
						</div>
					</div>
				</CheckoutItemInfo>

				<span className='item-price'>R$ {cartItem.price}</span>
			</CheckoutItemContainer>
			<Divider />
		</>
	);
};
