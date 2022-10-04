import styled from 'styled-components';

export const HeroContainer = styled.div`
	width: 100%;
	max-width: 70rem;

	margin: 5.875rem auto 0;

	display: flex;
	align-items: center;
	justify-content: space-between;
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
`;

export const ImageHero = styled.div`
	img {
		width: 29.75rem;
		height: 22.5rem;
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
