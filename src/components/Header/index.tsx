import { MapPin, ShoppingCart } from 'phosphor-react';
import logoImg from '../../assets/coffee-delivery-logo.svg';
import {
	CartButton,
	HeaderContainer,
	HeaderContent,
	LocationButton,
} from './styles';

export const Header = () => {
	return (
		<HeaderContainer>
			<HeaderContent>
				<img src={logoImg} alt='' />

				<div>
					<LocationButton>
						<MapPin size={22} weight='fill' color='#8047F8' />
						Porto Alegre, RS
					</LocationButton>
					<CartButton isVisible={false} ordersNumber={''}>
						<div className='badge'></div>
						<ShoppingCart size={22} weight='fill' color='#C47F17' />
					</CartButton>
				</div>
			</HeaderContent>
		</HeaderContainer>
	);
};
