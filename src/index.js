// Styles
import 'bootstrap/dist/css/bootstrap.css'
import './scss/index.scss'

// Icons Font
import 'octicons/build/font/octicons.css'

// Modules
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
// App Container
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
