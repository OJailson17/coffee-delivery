import { Minus, Plus, Trash } from 'phosphor-react';

import coffeeImg from '../../assets/coffee-1.png';
import { CheckoutItemQuantity } from '../../styles/commonStyles';
import { CheckoutItemContainer, CheckoutItemInfo, Divider } from './styles';

export const CheckoutItem = () => {
	return (
		<>
			<CheckoutItemContainer>
				{/* image and details */}
				<CheckoutItemInfo>
					<img src={coffeeImg} alt='' />

					<div>
						<p>Expresso Tradicional</p>

						<div className='item-action'>
							{/* Coffee quantity component */}
							<CheckoutItemQuantity>
								<button>
									<Plus size={14} color='#8047F8' weight='bold' />
								</button>
								<span>1</span>
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

				{/* Item price */}
				<span className='item-price'>R$ 9,90</span>
			</CheckoutItemContainer>
			<Divider />
		</>
	);
};
