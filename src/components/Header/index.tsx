import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
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
				<Link to={'/'}>
					<img src={logoImg} alt='' />
				</Link>

				<div>
					<LocationButton>
						<MapPin size={22} weight='fill' color='#8047F8' />
						Porto Alegre, RS
					</LocationButton>
					<CartButton ordersNumber={''} tabIndex={-1}>
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
