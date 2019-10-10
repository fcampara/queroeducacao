import { ADD, STORE, DELETE } from './constant'

export function addFavorites (favorites) {
  return {
    type: `@${STORE}/${ADD}`,
    favorites
  }
}

export function deleteFavorite (index) {
  return {
    type: `@${STORE}/${DELETE}`,
    index
  }
}
