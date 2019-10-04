import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

import { NODE_ENV } from '../constants/enviroments'

if (NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .connect()

  tron.clear()

  console.tron = tron
}
