import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	height: 6.5rem;
`;

export const HeaderContent = styled.div`
	width: 100%;
	max-width: 1290px;
	height: 100%;
	margin: 0 auto;
	padding: 0 2rem;

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
`;

interface CartButtonProps {
	isVisible?: boolean;
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

	& .badge {
		position: relative;
		display: ${props => !props.isVisible && 'none'};

		&::after {
			content: '${props => props.ordersNumber}';
			position: absolute;
			right: -30px;
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
