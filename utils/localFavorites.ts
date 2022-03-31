/* eslint-disable import/no-anonymous-default-export */

const toggleFavorite = (id: Number) => {

    let favorites: Number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: Number): boolean => {
    if( typeof window === 'undefined' ) return false;
    const favorites: Number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
};

const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}
export default {
    toggleFavorite,
    existInFavorites,
    pokemons
};