import { Provider } from 'react-redux';
import AppRoutes from './routes';
import Theme from './theme';
import store from './redux/store';

const App = () => (
	<Provider store={store}>
		<Theme>
			<AppRoutes />
		</Theme>
	</Provider>
);

export default App;
