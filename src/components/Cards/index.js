import Card from '../Card';
import Loading from '../Loading';
import { CardsStyle } from './styles';

const Cards = ({ characters = [] }) => {
	return !characters.length ? (
		<CardsStyle>
			<h2 className='nofav'>No hay elementos... Todavía</h2>
		</CardsStyle>
	) : (
		<CardsStyle>
			<section className='containerHero'>
				{characters.map((character) => (
					<Card key={character.id} character={character} />
				))}
			</section>
		</CardsStyle>
	);
};

export default Cards;
