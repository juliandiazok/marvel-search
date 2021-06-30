import { useEffect, useState } from 'react';
import { getAllCharacters } from '../../api/characters';
import { useSelector } from 'react-redux';
import Cards from '../../components/Cards';
import Loading from '../../components/Loading';
import { AppStyle } from '../styles';

const Homepage = () => {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);
	const { mode } = useSelector((state) => state?.theme || {});
	useEffect(() => {
		getAllCharacters()
			.then((c) => setCharacters(c))
			.finally(() => setLoading(false));
	}, []);

	/* 	const getCharacters = (c) =>
		getAllCharacters(c)
		  .then((characters) => dispatch(fetchCharactersSuccess(characters)))
			.catch(() => dispatch(fetchCharactersError())); */

	return (
		<AppStyle mode={mode}>
			<div className=''>
				{loading ? <Loading /> : <Cards characters={characters} />}
			</div>
		</AppStyle>
	);
};

export default Homepage;
