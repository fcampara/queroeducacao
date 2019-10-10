import produce from 'immer'
import { ADD, STORE, DELETE } from './constant'
import { FAVORITES } from '../../../constants/localStorage'
import { _setItemLocalStorage, _getItemLocalStorage } from '../../../utils/localStorage'
import { formatPrice } from '../../../utils/format'

const list = _getItemLocalStorage(FAVORITES)

const initialState = {
  list: list || []
}

export default function favorte (state = initialState, action) {
  switch (action.type) {
    case `@${STORE}/${ADD}`:
      return produce(state, (draft) => {
        const { favorites } = action

        const newItens = favorites.map(({ full_price, price_with_discount, ...rest }) => ({
          ...rest,
          formatted_full_price: formatPrice(full_price),
          formatted_price_with_discount: formatPrice(price_with_discount)
        }))

        draft.list = draft.list.concat(newItens)
        _setItemLocalStorage(FAVORITES, draft.list)
      })

    case `@${STORE}/${DELETE}`:
      return produce(state, (draft) => {
        draft.list.splice(action.index, 1)
        _setItemLocalStorage(FAVORITES, draft.list)
      })

    default:
      return state
  }
}
