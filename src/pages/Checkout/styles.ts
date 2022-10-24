import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const CheckoutContainer = styled.main`
	width: 70rem;
	margin: 0 auto;
	margin-top: 2.5rem;
	margin-bottom: 3rem;
	gap: 2rem;

	display: flex;
	align-items: flex-start;

	& .section-title {
		color: ${props => props.theme.colors['base-subtitle']};
		font-weight: 700;
		font-size: 1.125rem;
		margin-bottom: 0.938rem;
	}

	& > .first {
		width: 100%;
	}

	@media ${device.mobileS} and (max-width: 374px) {
		width: 95%;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.section-title {
			text-align: center;
		}
	}
	@media ${device.mobileM} and (max-width: 767px) {
		width: 95%;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.section-title {
			text-align: center;
		}
	}

	@media ${device.tablet} and (max-width: 1023px) {
		width: 85%;
		flex-direction: column;
	}

	@media ${device.laptop} and (max-width: 1300px) {
		width: 85%;
		gap: 0;
	}
`;

export const CheckoutAddress = styled.div`
	width: 40rem;
	padding: 2.5rem;

	display: flex;
	flex-direction: column;
	gap: 2rem;

	background-color: ${props => props.theme.colors['base-card']};
	border-radius: 6px;

	& .checkout-title {
		display: flex;
		gap: 0.5rem;

		p {
			color: ${props => props.theme.colors['base-subtitle']};
			font-weight: 400;
		}

		span {
			font-size: 0.875rem;
		}
	}

	@media ${device.mobileS} and (max-width: 767px) {
		width: 100%;
		align-items: center;
		justify-content: center;
		padding: 0.2rem;
		margin: 0 auto;

		& .checkout-title {
			margin-top: 1rem;
		}
	}
	@media ${device.mobileM} and (max-width: 767px) {
		padding: 0;
	}

	@media ${device.laptop} and (max-width: 1300px) {
		width: 90%;
		padding: 1.5rem;
	}
`;

export const CheckoutFormAddress = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
	}

	.complement {
		flex: 1;
		height: 100%;
		position: relative;

		display: flex;
		align-items: center;

		input {
			width: 100%;
			padding-right: 4rem;
			/* background-color: red; */
		}

		&::after {
			content: 'optional';
			position: absolute;
			color: ${props => props.theme.colors['base-label']};
			font-size: 0.75rem;
			right: 0.75rem;
			font-style: italic;
		}
	}

	@media ${device.mobileS} and (max-width: 767px) {
		width: 90%;
		margin-bottom: 1.5rem;

		div {
			flex-direction: column;
		}

		.complement {
			width: 100%;
		}
	}
`;

interface CheckoutInputComponentProps {
	variant?: 'xs' | 'sm' | 'normal';
}

const inputSizes = {
	xs: '3.75rem',
	sm: '12.5rem',
	normal: '',
};

export const CheckoutInputComponent = styled.input<CheckoutInputComponentProps>`
	background-color: ${props => props.theme.colors['base-input']};
	width: ${props => inputSizes[props.variant || 'normal']};
	height: 2.625rem;
	padding: 0.75rem;
	border: none;
	border-radius: 4px;
	position: relative;

	&::placeholder {
		color: ${props => props.theme.colors['base-label']};
		font-size: 0.875;
	}

	&:nth-child(2) {
		flex: 1;
	}

	&:focus {
		outline-color: ${props => props.theme.colors['yellow-dark']};
	}

	@media ${device.mobileS} and (max-width: 767px) {
		width: 100%;
	}
`;

export const CheckoutPaymentMethodContainer = styled.div`
	width: 40rem;
	padding: 2.5rem;
	margin-top: 0.75rem;
	background-color: ${props => props.theme.colors['base-card']};
	border-radius: 6px;

	& .payment-method-title {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 2rem;

		p {
			color: ${props => props.theme.colors['base-subtitle']};
			font-weight: 400;
		}

		span {
			font-size: 0.875rem;
		}
	}

	& .methods {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;

		div {
			height: 3.188rem;
			flex: 1;
		}

		button {
			width: 100%;
			height: 100%;
			background-color: ${props => props.theme.colors['base-button']};
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 6px;
			gap: 0.75rem;
			text-transform: uppercase;
			font-size: 0.75rem;
			border: none;

			&:hover {
				transition: background-color 0.2s;
				background-color: ${props => props.theme.colors['base-hover']};
			}

			&[aria-checked='true'] {
				background-color: ${props => props.theme.colors['purple-light']};
				border: 1px solid ${props => props.theme.colors.purple};
			}
		}
	}

	@media ${device.mobileS} and (max-width: 767px) {
		width: 100%;
		padding: 0 1rem;
		margin: 0 auto;
		margin-top: 2rem;

		& .payment-method-title {
			padding-top: 1rem;
		}

		& .methods {
			flex-direction: column;
			width: 100%;
			margin: 0 auto;
			padding: 2rem;
			gap: 1rem;
			/* background-color: yellow; */

			div {
				width: 100%;
			}

			button {
				width: 100%;
				height: 3.188rem;
				font-size: 0.8rem;
			}
		}
	}

	@media ${device.laptop} and (max-width: 1300px) {
		width: 95%;
		/* background-color: green; */
		padding: 1.5rem;

		& .payment-method-title {
			span {
				font-size: 0.813rem;
			}
		}

		& .methods {
			button {
				/* background-color: orange; */
				font-size: 0.625rem;
				gap: 0.625rem;
			}
		}
	}
`;

export const SelectedItemsContainer = styled.div`
	max-width: 28rem;
	padding: 2.5rem;

	display: flex;
	flex-direction: column;

	background-color: red;
	background-color: ${props => props.theme.colors['base-card']};
	border-radius: 6px 44px 6px 44px;

	@media ${device.mobileS} and (max-width: 374px) {
		width: 100%;
		margin: 0 auto;
		/* padding: 1.5rem; */
		/* background-color: green; */
	}

	@media ${device.mobileM} and (max-width: 767px) {
		width: 100%;
		margin: 0 auto;
		/* padding: 1.5rem; */
		/* background-color: green; */
	}

	@media ${device.laptop} and (max-width: 1300px) {
		width: 95%;
		padding: 2rem;
		/* background-color: red; */
	}
`;

export const CheckoutPriceList = styled.div`
	width: 100%;

	div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		& + div {
			margin-top: 0.75rem;
		}
	}

	& .total-price {
		font-size: 1.25rem;
		font-weight: 700;
		color: ${props => props.theme.colors['base-subtitle']};
	}

	button {
		width: 100%;
		height: 2.875rem;
		margin-top: 1.5rem;

		display: flex;
		align-items: center;
		justify-content: center;

		background-color: ${props => props.theme.colors.yellow};
		color: ${props => props.theme.colors.white};
		font-weight: 700;
		text-transform: uppercase;
		border: none;
		border-radius: 6px;

		&:hover {
			transition: background-color 0.2s;
			background-color: ${props => props.theme.colors['yellow-dark']};
		}
	}
`;
