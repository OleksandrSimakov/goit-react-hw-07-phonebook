import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Components/App'
import 'modern-normalize/modern-normalize.css'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
