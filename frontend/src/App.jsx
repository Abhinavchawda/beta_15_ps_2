import Meditation from "./components/Meditation"
import MeditationDetail from "./components/MeditationDetail"
import Games from "./pages/Games"

import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Chat from "./pages/chat"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <div>
          <Meditation />
          <MeditationDetail />
          <Games></Games>
        </div>
      </Routes>
    </Router>
  )
}

export default App
