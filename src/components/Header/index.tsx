import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/cartContext';
import {
	CartButton,
	HeaderContainer,
	HeaderContent,
	LocationButton,
} from './styles';
import logoImg from '/assets/coffee-delivery-logo.svg';

export const Header = () => {
	const { cart } = useCart();

	const numberOfCartItems = cart.length <= 0 ? '' : cart.length;

	return (
		<HeaderContainer>
			<HeaderContent>
				<Link to={'/'}>
					<img src={logoImg} alt='' />
				</Link>

				<div>
					<LocationButton>
						<MapPin size={22} weight='fill' color='#8047F8' />
						Utinga, BA
					</LocationButton>
					<CartButton ordersNumber={`${numberOfCartItems}`} tabIndex={-1}>
						<div className='badge'></div>
						<Link to={'/checkout'}>
							<ShoppingCart size={22} weight='fill' color='#C47F17' />
						</Link>
					</CartButton>
				</div>
			</HeaderContent>
		</HeaderContainer>
	);
};
