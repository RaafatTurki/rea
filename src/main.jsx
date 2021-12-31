import React from 'react'
import ReactDOM from 'react-dom'
import '@unocss/reset/normalize.css'
import 'virtual:uno.css'

import App from './App'

ReactDOM.render (
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react_root')
)
