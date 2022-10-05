import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: ${props => props.theme.colors['base-text']};
  font-size: 1rem;
  background-color: ${props => props.theme.colors.background};
}

body, input, button, text-area {
  font-family: ${props => props.theme.fonts.text};
}

button {
  cursor: pointer;
}

/* It removes input number arrows */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}

`;
