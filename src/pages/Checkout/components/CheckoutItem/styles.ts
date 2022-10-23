import styled from 'styled-components';
import { device } from '../../../../styles/breakpoints';

export const CheckoutItemContainer = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-between;

	& .item-price {
		font-weight: 700;
	}

	@media ${device.mobileM} and (max-width: 767px) {
		width: 100%;
		flex-direction: column-reverse;

		& .item-price {
			align-self: flex-end;
			margin-bottom: 0.5rem;
		}
	}
`;

export const CheckoutItemInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.25rem;

	img {
		width: 4rem;
		height: 4rem;
	}

	p {
		color: ${props => props.theme.colors['base-subtitle']};
		margin-bottom: 0.5rem;
	}

	& .item-action {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		& .remove-button {
			height: 2rem;
			width: 5.688rem;

			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.438rem;

			border-radius: 6px;
			border: none;
			background-color: ${props => props.theme.colors['base-button']};

			&:hover {
				transition: background-color 0.2s;
				background-color: ${props => props.theme.colors['base-hover']};
			}
		}
	}
`;

export const Divider = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${props => props.theme.colors['base-button']};
	margin: 1.5rem 0;
`;
