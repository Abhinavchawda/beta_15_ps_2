import React, { useEffect, useState } from 'react';
// import LeaderboardWin from '../components/LeaderboardWin';
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
    <>
      {/* Games Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12 text-[rgb(16,20,61)]">Mental Wellness Games</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Mindfulness Maze', 'Emotion Explorer', 'Stress Buster'].map((game) => (
                  <div key={game} className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300 rounded-xl p-6 flex flex-col items-center justify-between border border-gray-200">
                      <div className="w-full flex justify-center mb-4">
                          <Gamepad2 className="h-16 w-16 text-blue-700" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{game}</h3>
                      <p className="text-gray-600 text-center mb-6 text-base">
                          Engage in fun activities designed to improve your mental well-being and cognitive skills.
                      </p>
                      <button className="w-full bg-gray-800 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300">
                          Play Now
                      </button>
                  </div>
              ))}
            </div>
          </div>
      </section>
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
    </>
  )
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
