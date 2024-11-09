import Meditation from "./components/Meditation"
import MeditationDetail from "./components/MeditationDetail"
import Games from "./pages/Games"

import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Chat from "./pages/chat"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
      <div>
        <Home />
        <Meditation />
        <MeditationDetail />
        <Games></Games>
      </div>
    </div>
  )
}

export default App
