import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cards from '../../components/Cards';
import { AppStyle } from '../styles';

const Favorites = () => {
	const [favorites, setFavorites] = useState([]);
	const { mode } = useSelector((state) => state?.theme || {});
	useEffect(() => {
		getFavorites();
	}, []);

	const getFavorites = () => {
		const key = 'favorites';
		const favorites = localStorage.getItem(key);
		if (favorites) {
			setFavorites(JSON.parse(favorites));
		}
	};

	return (
		<AppStyle mode={mode}>
			<div className=''>
				<Cards characters={favorites} />
			</div>
		</AppStyle>
	);
};

export default Favorites;
