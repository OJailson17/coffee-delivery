import { Minus, Plus, ShoppingCart } from 'phosphor-react';

import {
	CoffeeCardAction,
	CoffeeCardContainer,
	CoffeeCardInfo,
	CoffeeCartButton,
	CoffeeQuantity,
} from './styles';

interface CoffeeCard {
	title: string;
	description: string;
	imageUrl: string;
}

interface CoffeeCardProps {
	coffee: CoffeeCard;
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
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
							R$ <strong>9,90</strong>
						</span>
					</div>

					<div>
						{/* Quantity */}
						<CoffeeQuantity>
							<button>
								<Plus size={14} color='#8047F8' weight='bold' />
							</button>
							<span>1</span>
							<button>
								<Minus size={14} color='#8047F8' weight='bold' />
							</button>
						</CoffeeQuantity>
						{/* Cart */}
						<CoffeeCartButton>
							<ShoppingCart size={22} weight='fill' color='#F3F2F2' />
						</CoffeeCartButton>
					</div>
				</CoffeeCardAction>
			</CoffeeCardInfo>
		</CoffeeCardContainer>
	);
};
