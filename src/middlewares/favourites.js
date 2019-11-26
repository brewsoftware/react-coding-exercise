/* global fetch:false */
import get from 'lodash/get'
import { TOGGLE_FAVOURITE_TYPE, REHYDRATED, fetchFavouritesActionCreator, toggleFavouriteActionCreator } from '../actions'
import { getFavouritesApiUrl } from '../selectors/config'

const fetchFavourites = async (apiUrl) => {
  const response = await fetch(apiUrl, {
    headers: {
      Accept: 'application/json'
    }
  })

  const data = await response.json()
  const favourites = data

  if (!response.ok) {
    const error = new Error(get(data, ['error', 'message']) || 'Failed to fetch favourites')
    error.status = response.status
    throw error
  }

  return favourites
}

const toggleFavourites = async (apiUrl, id) => {
  var url = `${apiUrl}/${id}`
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json'
    },
    method: 'PUT'
  })

  const data = await response.json()
  const favourites = data

  if (!response.ok) {
    const error = new Error(get(data, ['error', 'message']) || 'Failed to fetch favourites')
    error.status = response.status
    throw error
  }

  return favourites
}

export default store => next => action => {
  const ret = next(action)

  if (action.type === REHYDRATED) {
    const state = store.getState()
    const apiUrl = getFavouritesApiUrl(state)
    store.dispatch(fetchFavouritesActionCreator(fetchFavourites(apiUrl)))
  }
  if (action.type === TOGGLE_FAVOURITE_TYPE) {
    const state = store.getState()
    const apiUrl = getFavouritesApiUrl(state)
    store.dispatch(toggleFavouriteActionCreator(toggleFavourites(apiUrl, action.payload)))
  }

  return ret
}
