import React, { useEffect, useState } from 'react';
import LeaderboardWin from '../components/LeaderboardWin';
import { Button } from 'flowbite-react';

export default function Games() {
  const [streakHolder, setStreakHolder] = useState([]);
  const [scoreHolder, setScoreHolder] = useState([]);
  
  const data = [
    {
      username: "Anshul Sharma",
      createdAt: '2024-10-08',
      streak_count: 2,
      score: 1,
    },
    {
      username: "Anshul Sharma",
      createdAt: '2024-10-08',
      streak_count: 2,
      score: 1,
    },
    {
      username: "Anshul Sharma",
      createdAt: '2024-10-08',
      streak_count: 2,
      score: 1,
    }
  ];

  useEffect(() => {
    setScoreHolder(data);
    setStreakHolder(data);
  }, []);

  return (
    <div className='w-[90%] mx-auto mt-5'>
      {/* Game 1 */}
      <GameCard
      className="h-auto w-auto"
        imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFw4coOynCmPyuRXQpIq9-DXOd9klnXWl0g&s'
        title="Wordle Game"
        description="Wordle is a fun and addictive word puzzle game where players have six attempts to guess a hidden 5-letter word. After each guess, tiles change color to give clues: green for correct letters in the right position, yellow for correct letters in the wrong position, and gray for letters not in the word. It’s a game of logic, vocabulary, and deduction. Challenge yourself to crack the word in as few tries as possible!"
        buttonText="Play Game"
      />

      {/* Game 2 */}
      <div>
        {/* Add content for Game 2 here */}
      </div>

      {/* Game 3 */}
      <div>
        {/* Add content for Game 3 here */}
      </div>
    </div>
  );
}

function GameCard({ imageUrl, title, description, buttonText }) {
  return (
    <div className='flex flex-col sm:flex-row gap-7 items-center sm:items-start my-5'>
      <img 
        src={imageUrl}
        alt={title}
        className='rounded'
      />
      <div className='flex flex-col space-y-4'>
        <p className='text-gray-700 text-sm sm:text-base'>
          {description}
        </p>
        <Button className='w-max bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
