import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { store , persistor} from './redux/Store.jsx'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
  </PersistGate>
)
