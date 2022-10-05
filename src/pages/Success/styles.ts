import styled from 'styled-components';

export const SuccessContainer = styled.main`
	width: 100%;
	max-width: 70rem;
	margin: 0 auto;
	margin-top: 5rem;
	margin-bottom: 2rem;

	h1 {
		font-weight: 800;
		font-size: 2rem;
		color: ${props => props.theme.colors['yellow-dark']};
		font-family: ${props => props.theme.fonts.header};
	}

	span {
		font-size: 1.25rem;
		color: ${props => props.theme.colors['base-subtitle']};
	}
`;

export const SuccessContent = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const OrderInfoWrapper = styled.div`
	width: 100%;
	max-width: 32.875rem;
	margin-top: 2.5rem;
	background: linear-gradient(to left, #8047f8, #dbac2c);
	padding: 1px;
	border-radius: 6px 36px 6px 36px;
`;

export const OrderInfo = styled.div`
	width: 100%;
	background-color: ${props => props.theme.colors.background};
	padding: 2.5rem;
	border-radius: inherit;

	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const InfoBase = styled.div`
	display: flex;
	gap: 0.75rem;

	& div:first-child {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;

		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const InfoLocation = styled(InfoBase)`
	& div:first-child {
		background-color: ${props => props.theme.colors.purple};
	}
`;
export const InfoTime = styled(InfoBase)`
	& div:first-child {
		background-color: ${props => props.theme.colors.yellow};
	}
`;
export const InfoPaymentMethod = styled(InfoBase)`
	& div:first-child {
		background-color: ${props => props.theme.colors['yellow-dark']};
	}
`;
