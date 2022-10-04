import styled from 'styled-components';

export const CheckoutContainer = styled.main`
	width: 100%;
	max-width: 70rem;
	margin: 0 auto;
	margin-top: 2.5rem;
	margin-bottom: 3rem;
	gap: 2rem;

	display: flex;
	align-items: flex-start;
	background-color: ${props => props.theme.colors.background};
	color: ${props => props.theme.colors['base-text']};

	& .section-title {
		color: ${props => props.theme.colors['base-subtitle']};
		font-weight: 700;
		font-size: 1.125rem;
		margin-bottom: 0.938rem;
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
			background-color: ${props => props.theme.colors['base-button']};
			display: flex;
			align-items: center;
			justify-content: center;
			flex: 1;
			border-radius: 6px;
			gap: 0.75rem;
			text-transform: uppercase;
			font-size: 0.75rem;
		}
	}
`;
