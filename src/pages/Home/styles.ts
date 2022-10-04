import styled from 'styled-components';

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
`;

export const CoffeeGridContainer = styled.div`
	margin-top: 3.375rem;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 2rem;
	row-gap: 2.5rem;
	place-items: center;
`;
