import { useEffect } from 'react';
import { getAllCharacters } from '../../api/characters';

const Homepage = () => {
	useEffect(() => {
		getAllCharacters().then((character) => console.log(character));
	}, []);

	/* 	const getCharacters = (c) =>
		getAllCharacters(c)
		  .then((characters) => dispatch(fetchCharactersSuccess(characters)))
			.catch(() => dispatch(fetchCharactersError())); */

	return <div className=''>Hola</div>;
};

export default Homepage;
