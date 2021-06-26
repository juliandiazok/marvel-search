import { CardStyle } from './styles';

const Card = ({ character = {} }) => (
	<CardStyle>
		<span id='myCard' className='card text-white'>
			<img
				src={
					character.thumbnail?.path +
					'/portrait_uncanny.' +
					character.thumbnail?.extension
				}
				className='card-img'
				alt={character.name}></img>
			<div className='card-img-overlay d-flex flex-column'>
				<h6 className='mt-auto name'>
					<strong>{character.name}</strong>
				</h6>
			</div>
			<div className='card-img-overlay'>
				<div
					className='favorito'
					/* onClick={onFavoriteClick} */
					title='Agregar a Favoritos'>
					<i className={`${false ? 'fas' : 'far'} fa-star fav`} />
				</div>
			</div>
		</span>
	</CardStyle>
);

export default Card;
