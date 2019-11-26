export const isFavouritedSelector = (state, id) => state.favourites.favourites.some(x => x === id)
export const getFavourites = state => state.events.favourites
