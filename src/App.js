import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes';

const theme = {
	colorsNav: {
		light: '#fff',
		dark: '#212121',
	},
	colorsIcon: {
		light: '##212121',
		dark: '#fff',
	},
	modalBackground: {
		light: '#fff',
		dark: '#212121',
	},
	modalFontColor: {
		light: '#212121',
		dark: '#fff',
	},
	pageBackground: {
		light: 'rgba(206, 205, 205, 0.589)',
		dark: 'rgba(61, 61, 61, 0.8)',
	},
};

const App = () => (
	<ThemeProvider theme={theme}>
		<AppRoutes />
	</ThemeProvider>
);

export default App;
