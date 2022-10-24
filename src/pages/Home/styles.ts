import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const MainHomeContainer = styled.main`
	width: 100%;
	max-width: 70rem;

	margin: 0 auto;
	margin-top: 6.75rem;
	margin-bottom: 3rem;

	h2 {
		width: max-content;
		font-family: ${props => props.theme.fonts.header};
		font-weight: 800;
		font-size: 2rem;
		color: ${props => props.theme.colors['base-subtitle']};
	}

	@media ${device.mobileS} and (max-width: 767px) {
		width: 90%;

		h2 {
			margin: 0 auto;
			font-size: 1.6rem;
		}
	}

	@media ${device.tablet} {
		width: 85%;
	}

	@media ${device.laptop} and (max-width: 1300px) {
		width: 85%;

		h2 {
			font-size: 2rem;
		}
	}
`;

export const CoffeeGridContainer = styled.div`
	margin-top: 3.375rem;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	column-gap: 2rem;
	row-gap: 2.5rem;
	place-items: center;

	@media ${device.tablet} and (max-width: 1023px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${device.laptop} {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 1300px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;
