import { createRoot } from 'react-dom/client'
import './index.css'
import { store , persistor} from './redux/Store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Home from "./pages/Home"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from "react-router-dom"

import Meditate from "./pages/Meditate"
import Chat from "./pages/Chat"
import Layout from './Layout'
import Wordle from './pages/Wordle'
import AuthForm from './components/AuthForm.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}/>
            {/* <Route path="landing" element={<Landing />}/> */}
            <Route path="chat" element={<Chat />}/>
            <Route path="meditate" element={<Meditate />}/>
            <Route path="user/authenticate" element={<AuthForm />}/>
            <Route path="game/" element={<Outlet />}>
              <Route path="wordle" element={<Wordle />}/>
            </Route>
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  </PersistGate>
)