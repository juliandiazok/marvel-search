import { useEffect, useState } from 'react';
import { getAllCharacters } from '../../api/characters';
import Card from '../../components/Card';

const Homepage = () => {
	const [characters, setCharacters] = useState([]);
	useEffect(() => {
		getAllCharacters().then((c) => setCharacters(c));
	}, []);

	/* 	const getCharacters = (c) =>
		getAllCharacters(c)
		  .then((characters) => dispatch(fetchCharactersSuccess(characters)))
			.catch(() => dispatch(fetchCharactersError())); */

	return (
		<div className=''>
			{characters.map((character) => (
				<Card character={character} />
			))}
		</div>
	);
};

export default Homepage;
