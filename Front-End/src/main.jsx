import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux"
import store from "./Store/Store.jsx"
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-tc0tyzmuzmc3ck8g.eu.auth0.com"
    clientId="bRtQ2dYHhDY9BfbPuAaWYTzOqpm43Y8A"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <Provider store={store}>
    <App />
  </Provider>,
  </Auth0Provider>
)
