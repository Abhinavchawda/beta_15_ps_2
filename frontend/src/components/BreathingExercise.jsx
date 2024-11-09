import { CirclePause, CirclePlay } from "lucide-react/dist/cjs/lucide-react"
import React, { useState, useEffect } from "react"

const BreathingExercise = () => {
  const [isSessionActive, setIsSessionActive] = useState(false)
  const [phase, setPhase] = useState("")
  const [timeLeft, setTimeLeft] = useState(0)
  const [cycleCount, setCycleCount] = useState(0)

  const phases = ["Breath In", "Hold", "Breath Out"]

  useEffect(() => {
    let timer
    if (isSessionActive && cycleCount < 5) {
      if (timeLeft > 0) {
        timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000)
      } else {
        if (phase === "Breath Out") {
          if (cycleCount < 4) {
            setCycleCount((prev) => prev + 1)
          } else {
            setIsSessionActive(false) // End session after 5 cycles
          }
        }
        setPhase(phases[(phases.indexOf(phase) + 1) % phases.length])
        setTimeLeft(getPhaseDuration(phases[(phases.indexOf(phase) + 1) % phases.length]))
      }
    }
    return () => clearInterval(timer)
  }, [isSessionActive, timeLeft, phase, cycleCount])

  const getPhaseDuration = (phase) => {
    switch (phase) {
      case "Breath In":
        return 4 // 4 seconds for breath in
      case "Hold":
        return 7 // 7 seconds to hold breath
      case "Breath Out":
        return 6 // 6 seconds for breath out
      default:
        return 0
    }
  }

  const startSession = () => {
    setIsSessionActive(true)
    setCycleCount(0)
    setPhase("Breath In")
    setTimeLeft(getPhaseDuration("Breath In"))
  }

  const stopSession = () => {
    setIsSessionActive(false)
    setCycleCount(0)
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-2">
      <h1 className="text-2xl font-semibold">Breathing Exercise</h1>
      {isSessionActive ? (
        <div className="text-xl">
          <p>{phase}</p>
          <p>{timeLeft} seconds</p>
        </div>
      ) : (
        <div>
          <p>Click to start your breathing session</p>
        </div>
      )}
      <button
        onClick={(e) => { isSessionActive ? stopSession() : startSession() }}
        className="bg-[rgb(16,20,61)] hover:bg-blue-700 text-white py-2 px-4 rounded-xl"
      >
        {isSessionActive ? <CirclePause /> : <CirclePlay />}
      </button>
    </div>
  )
}

export default BreathingExercise