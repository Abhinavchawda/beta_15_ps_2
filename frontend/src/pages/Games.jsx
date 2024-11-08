import React, { useEffect, useState } from 'react'
import LeaderboardWin from '../components/LeaderboardWin';
export default function Games() {
    const [streakHolder,setStreakHolder] = useState([]);
    const [scoreHolder,setScoreHolder] = useState([]);
    const data1 = [
        {
            username:"Anshul Sharma",
            createdAt:'2024-10-08',
            streak_count:2,
            score : 1,
        },
        {
            username:"Anshul Sharma",
            createdAt:'2024-10-08',
            streak_count:2,
            score : 1,
        },
        {
            username:"Anshul Sharma",
            createdAt:'2024-10-08',
            streak_count:2,
            score : 1,
        }
    ];
    useEffect(()=>{
        setScoreHolder(data1);
        setStreakHolder(data1);
    },[])
  return (
    <div>
      {/* LeaderBoard Div */}
      <div>
        <LeaderboardWin data={streakHolder} flagS = {true}></LeaderboardWin>
        <LeaderboardWin data={scoreHolder} flagS = {false}></LeaderboardWin>
      </div>
    </div>
  )
}
