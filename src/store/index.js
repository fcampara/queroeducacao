import { createStore } from 'redux'

import rootReducer from './modules/rootReducer'
import { NODE_ENV } from '../constants/enviroments'

const enhancer = NODE_ENV === 'development' ? console.tron.createEnhancer() : null

const store = createStore(rootReducer, enhancer)

export default store
