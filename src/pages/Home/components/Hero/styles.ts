import styled from 'styled-components';
import { device } from '../../../../styles/breakpoints';

export const HeroContainer = styled.div`
	width: 100%;
	max-width: 70rem;

	margin: 5.875rem auto 0;

	display: flex;
	align-items: center;
	justify-content: space-between;

	@media ${device.mobileS} {
		width: 90%;
	}

	@media ${device.tablet} and (max-width: 1023px) {
		width: 85%;
	}

	@media ${device.laptop} and (max-width: 1300px) {
		width: 85%;
	}
`;

export const HeroContent = styled.div`
	display: flex;
	flex-direction: column;

	h1 {
		font-size: 3rem;
		font-weight: 800;
		color: ${props => props.theme.colors['base-title']};
		font-family: ${props => props.theme.fonts.header};
		line-height: 130%;
		width: 36.75rem;
	}

	p {
		font-size: 1.25rem;
		font-weight: 400;
		line-height: 130%;
		width: 36.75rem;
		color: ${props => props.theme.colors['base-subtitle']};

		margin-top: 1rem;
	}

	& > div {
		margin-top: 4.125rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 1.5rem;
	}

	@media ${device.mobileS} and (max-width: 374px) {
		width: 100%;

		h1 {
			width: 100%;
			font-size: 1.5rem;
		}

		p {
			width: 100%;
			font-size: 0.875rem;
		}

		& > div {
			grid-template-columns: 1fr;
		}
	}

	@media ${device.mobileM} and (max-width: 767px) {
		width: 100%;

		h1 {
			width: 100%;
			font-size: 2rem;
		}

		p {
			width: 100%;
			font-size: 1rem;
		}

		& > div {
			grid-template-columns: 1fr;
		}
	}

	@media ${device.tablet} and (max-width: 1023px) {
		width: 100%;

		h1 {
			width: 100%;
		}

		p {
			width: 100%;
		}
	}

	@media ${device.laptop} and (max-width: 1300px) {
		width: 60%;

		h1 {
			font-size: 2.5rem;
			width: 31rem;
		}

		p {
			font-size: 0.95rem;
			width: 31rem;
		}
	}
`;

export const ImageHero = styled.div`
	img {
		width: 29.75rem;
		height: 22.5rem;

		@media ${device.mobileS} and (max-width: 1023px) {
			display: none;
		}

		@media ${device.laptop} and (max-width: 1300px) {
			width: 20rem;
			height: 14rem;
		}
	}
`;

export const HeroOptionsBase = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;

	& > div {
		width: 2rem;
		height: 2rem;

		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 50%;
	}

	span {
		font-size: 1rem;
		color: ${props => props.theme.colors['base-text']};
	}

	@media ${device.mobileS} and (max-width: 1300px) {
		gap: 0.5rem;

		span {
			font-size: 0.875rem;
		}
	}
`;

export const HeroOptionsCart = styled(HeroOptionsBase)`
	& > div {
		background-color: ${props => props.theme.colors['yellow-dark']};
	}
`;

export const HeroOptionsPackage = styled(HeroOptionsBase)`
	& > div {
		background-color: ${props => props.theme.colors['base-text']};
	}
`;

export const HeroOptionsClock = styled(HeroOptionsBase)`
	& > div {
		background-color: ${props => props.theme.colors.yellow};
	}
`;

export const HeroOptionsCoffee = styled(HeroOptionsBase)`
	& > div {
		background-color: ${props => props.theme.colors.purple};
	}
`;
