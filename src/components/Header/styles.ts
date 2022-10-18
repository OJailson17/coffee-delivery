import styled from 'styled-components';

import { device } from '../../styles/breakpoints';

export const HeaderContainer = styled.header`
	width: 100%;
	height: 6.5rem;

	@media ${device.mobileM} and (max-width: 1300px) {
		width: 85%;
		margin: 0 auto;
	}
`;

export const HeaderContent = styled.div`
	width: 100%;
	max-width: 70rem;
	height: 100%;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: space-between;

	& > div {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
`;

export const LocationButton = styled.div`
	width: 8.9rem;
	height: 2.375rem;
	font-size: 0.875rem;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.4rem;

	background-color: ${props => props.theme.colors['purple-light']};
	color: ${props => props.theme.colors['purple-dark']};
	border: none;
	border-radius: 6px;

	@media ${device.mobileM} and (max-width: 767px) {
		width: 7rem;
	}
`;

interface CartButtonProps {
	ordersNumber?: string;
}

export const CartButton = styled.button<CartButtonProps>`
	width: 2.375rem;
	height: 2.375rem;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${props => props.theme.colors['yellow-light']};
	border: none;
	border-radius: 6px;
	position: relative;

	a {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	& .badge {
		position: relative;
		display: ${props => !props.ordersNumber && 'none'};

		&::after {
			content: '${props => props.ordersNumber}';
			position: absolute;
			right: -40px;
			top: -30px;
			min-width: 20px;
			min-height: 20px;
			line-height: 20px;
			color: ${props => props.theme.colors.white};
			background-color: ${props => props.theme.colors['yellow-dark']};
			font-size: 10px;
			font-weight: bold;
			border-radius: 20px;
		}
	}
`;
