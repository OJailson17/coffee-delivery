import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartContextProvider } from './contexts/cartContext';
import { Router } from './Router';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';

import 'react-toastify/dist/ReactToastify.css';

export function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={defaultTheme}>
				<CartContextProvider>
					<GlobalStyles />
					<Router />
				</CartContextProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
}
