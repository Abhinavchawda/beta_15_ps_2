import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Chat from "./pages/chat"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<div>App</div>} />
      </Routes>
    </Router>
  )
}

export default App
