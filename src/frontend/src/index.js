import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import Store from './Store'
import App from './Components/App/App'
import registerServiceWorker from './registerServiceWorker'

import './Themes/light-theme.css'
import './Themes/dark-theme.css'

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()
