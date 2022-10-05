import styled from 'styled-components';

const CoffeeQuantityBase = styled.div`
	width: 4.5rem;
	background-color: ${props => props.theme.colors['base-button']};

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 6px;

	button {
		flex: 1;
		height: 100%;
		border: none;
		background-color: transparent;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	span {
		color: ${props => props.theme.colors['base-title']};
		line-height: 130%;
	}
`;

export const CoffeeCardQuantity = styled(CoffeeQuantityBase)`
	height: 2.375rem;
`;

export const CheckoutItemQuantity = styled(CoffeeQuantityBase)`
	height: 2rem;
`;
