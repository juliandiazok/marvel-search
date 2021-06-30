import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from '../views/Homepage';
import Favorites from '../views/Favorites';
import Navbar from '../components/Navbar';
import { NavStyle } from './styles';

function AppRoutes() {
	const { mode } = useSelector((state) => state?.theme || {});
	return (
		<Router>
			<NavStyle mode={mode}>
				<Navbar />
			</NavStyle>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/favorites' component={Favorites} />
			</Switch>
		</Router>
	);
}

export default AppRoutes;
