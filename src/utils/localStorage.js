export const manageFavorite = (character) => {
	const key = 'favorites';
	let favorites = localStorage.getItem(key);
	if (!favorites) {
		return localStorage.setItem(key, JSON.stringify([character]));
	}
	favorites = JSON.parse(favorites);
	const exists = favorites.find((c) => c.id === character.id);
	if (!exists) {
		return localStorage.setItem(key, JSON.stringify([...favorites, character]));
	}
	localStorage.setItem(
		key,
		JSON.stringify(favorites.filter((e) => e.id !== character.id))
	);
};
