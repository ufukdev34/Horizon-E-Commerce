import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import './assets/styles/main.css'
import App from './App'

const root = createRoot(document.getElementById("root"))

root.render(
        <Provider store={store}>
                <BrowserRouter>
                        <App/>
                </BrowserRouter>
        </Provider>
);