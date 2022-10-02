import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
	width: 100%;
	height: 19.375rem;
	max-width: 16rem;
	background-color: ${props => props.theme.colors['base-card']};
	border-radius: 6px 36px 6px 36px;
	padding: 0 1.25rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 7.5rem;
		height: 7.5rem;
		margin-top: -1.5rem;
	}

	& .tags {
		margin-top: 0.75rem;
		width: 5rem;
		height: 1.3rem;
		background-color: ${props => props.theme.colors['yellow-light']};
		color: ${props => props.theme.colors['yellow-dark']};
		font-size: 0.625rem;
		font-weight: 700;
		line-height: 13px;
		border-radius: 100px;

		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const CoffeeCardInfo = styled.div`
	margin-top: 1rem;
	text-align: center;
	word-wrap: break-word;

	p {
		font-family: ${props => props.theme.fonts.header};
		font-weight: 700;
		font-size: 1.25rem;
		color: '${props => props.theme.colors['base-subtitle']};';
	}

	& > span {
		font-size: 0.875rem;
		font-weight: 400;
		color: ${props => props.theme.colors['base-label']};
	}
`;

export const CoffeeCardAction = styled.div`
	margin-top: 2rem;

	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.4rem;
	/* padding: 0 1.5rem; */

	& .coffee-price {
		font-size: 0.875rem;
		line-height: 1.1rem;

		strong {
			font-size: 1.5rem;
			font-weight: 800;
			font-family: ${props => props.theme.fonts.header};
			line-height: 1.9rem;
		}
	}

	& > div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}
`;

export const CoffeeQuantity = styled.div`
	width: 4.5rem;
	height: 2.375rem;
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

export const CoffeeCartButton = styled.button`
	width: 2.375rem;
	height: 2.375rem;
	border: none;
	border-radius: 6px;
	background-color: ${props => props.theme.colors['purple-dark']};

	display: flex;
	align-items: center;
	justify-content: center;
`;
