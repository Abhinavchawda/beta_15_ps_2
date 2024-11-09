import React, { useState, useEffect } from 'react';

function Simon() {
  const [gameSequence, setGameSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [level, setLevel] = useState(0);
  const [start, setStart] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const colors = ["blue", "green", "yellow", "red", "orange", "pink"];

  useEffect(() => {
    if (start) {
      nextPattern();
    }
  }, [start]);

  useEffect(() => {
    if (userSequence.length > 0) {
      checkPattern(userSequence.length - 1);
    }
  }, [userSequence]);

  const nextPattern = () => {
    setLevel(prevLevel => prevLevel + 1);
    setUserSequence([]);
    const random = Math.floor(Math.random() * colors.length);
    const newSequence = [...gameSequence, colors[random]];
    setGameSequence(newSequence);
    playSound(colors[random]);
    animateButton(colors[random]);
  };

  const checkPattern = (currentPattern) => {
    if (gameSequence[currentPattern] === userSequence[currentPattern]) {
      if (gameSequence.length === userSequence.length) {
        setTimeout(() => {
          nextPattern();
        }, 500);
      }
    } else {
      playSound("wrong");
      alert("Game Over! Press any key to restart.");
      resetGame();
    }
  };

  const handleUserClick = (color) => {
    setUserSequence([...userSequence, color]);
    playSound(color);
    animateButton(color);
  };

  const playSound = (name) => {
    const audio = new Audio(`../assets/sounds/${name}.mp3`);
    audio.play();
  };

  const animateButton = (color) => {
    const button = document.getElementById(color);
    if (button) {
      button.classList.add("animate-press");
      setTimeout(() => button.classList.remove("animate-press"), 100);
    }
  };

  const resetGame = () => {
    setLevel(0);
    setGameSequence([]);
    setUserSequence([]);
    setStart(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8">Choose Difficulty</h1>

      {/* Rules Section */}
      <div className="relative w-full max-w-lg">
        {showRules && (
          <div className="absolute inset-0 bg-gray-800 p-4 rounded-lg shadow-lg z-10 text-left">
            <button className="text-red-500 text-xl absolute top-4 right-4" onClick={() => setShowRules(false)}>x</button>
            <h3 className="text-2xl mb-4">Rules</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>The game consists of a series of lights and sounds.</li>
              <li>The game unit will randomly generate a sequence of lights by lighting up different colored pads.</li>
              <li>The player's objective is to repeat the sequence by pressing the colored pads in the same order.</li>
              <li>With each success, an additional light is added to the sequence.</li>
              <li>Reproduce the sequence correctly to advance.</li>
              <li>If you make a mistake, the game ends.</li>
            </ul>
          </div>
        )}

        {/* Difficulty Buttons */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <button className="bg-green-600 p-4 rounded" onClick={() => setStart(true)}>Easy</button>
          <button className="bg-yellow-600 p-4 rounded" onClick={() => setStart(true)}>Moderate</button>
          <button className="bg-red-600 p-4 rounded" onClick={() => setStart(true)}>Hard</button>
        </div>
      </div>

      {/* Game Buttons */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {colors.map((color, index) => (
          <button
            key={index}
            id={color}
            className={`w-20 h-20 rounded-full ${getColorClass(color)}`}
            onClick={() => handleUserClick(color)}
          ></button>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-8">
        <button className="underline" onClick={() => setShowRules(!showRules)}>
          How to Play?
        </button>
      </footer>
    </div>
  );
}

// Function to return Tailwind background color classes based on color name
function getColorClass(color) {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    pink: 'bg-pink-500',
  };
  return colorClasses[color] || 'bg-gray-500';
}

export default Simon;