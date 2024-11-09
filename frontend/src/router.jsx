import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"

import Meditate from "./pages/Meditate"
import Chat from "./pages/Chat"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            {/* <Route path="" element={<Home />}/> */}
            {/* <Route path="landing" element={<Landing />}/> */}
            <Route path="chat" element={<Chat />}/>
            <Route path="meditate" element={<Meditate />}/>
        </Route>
    )
)

export default router