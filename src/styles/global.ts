import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body: {
  color: ${props => props.theme.colors['base-text']};
  font-size: 1rem;
}

body, input, button, text-area {
  font-family: ${props => props.theme.fonts.text};
}

button {
  cursor: pointer;
}

`;
