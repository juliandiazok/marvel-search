import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../views/Homepage';
import Navbar from '../components/Navbar';

function AppRoutes() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/' component={HomePage} />
			</Switch>
		</Router>
	);
}

export default AppRoutes;
