import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

const enhancers = []
const middleware = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(reducer, {}, composedEnhancers)

export default store
