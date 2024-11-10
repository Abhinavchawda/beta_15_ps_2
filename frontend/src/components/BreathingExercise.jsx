import { CirclePause, CirclePlay } from "lucide-react/dist/cjs/lucide-react"
import React, { useState, useEffect } from "react"
import {useSelector} from 'react-redux'
const BreathingExercise = () => {
  const [isSessionActive, setIsSessionActive] = useState(false)
  const [phase, setPhase] = useState("")
  const [timeLeft, setTimeLeft] = useState(0)
  const [cycleCount, setCycleCount] = useState(0)
  const {currentUser} = useSelector(state=>state.user);
  console.log(currentUser);
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



  const [time, setTime] = useState(0)
  const startSession = () => {
    let temp = new Date();
    setTime(temp)
    setIsSessionActive(true)
    setCycleCount(0)
    setPhase("Breath In")
    setTimeLeft(getPhaseDuration("Breath In"))
  }

  const stopSession = async() => {
    //call 
    let timeScore = new Date();
    const abc = parseInt((timeScore - time)/1000);
    const id = currentUser.data._doc.username;
    console.log(id, abc);
    const response = await fetch("/api/v1/user/createmeditate",{
      method:'POST',
      headers:{'Content-Type':"application/json"},
      body:JSON.stringify({
        userId:id,
        time:abc,
      })
    });
    
    const data = await response.json();
    if(!response.ok){
      console.log(data.message);
    }
    else{
      console.log(data);
    }
    setIsSessionActive(false)
    setCycleCount(0)
  }


  const getMeditate = async(req,res) => {
    try{
      const id = currentUser.data._doc.username;
      const response = await fetch("/api/v1/user/getmeditate",{
        method:'POST',
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify({
          userId:id,
        })
      });
      const data = await response.json();
      console.log(data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getMeditate();
  },[]);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-xl border border-white p-4 min-h-[30vh] w-fit mx-auto shadow-xl gap-3">
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
        className="bg-[rgb(16,20,61)] hover:bg-blue-700 text-white py-2 px-4 rounded-xl w-full"
      >
        <div className="flex justify-around">
          {isSessionActive ? <CirclePause /> : <CirclePlay />}
          <span>
            {
              isSessionActive ?
              "Pause"
              :
              "Play"
            }
          </span>
        </div>
      </button>
    </div>
  )
}

export default BreathingExercise