import React from 'react';

export default function MeditationDetail() {
  return (
    <div className="min-h-[100vh] my-10 px-2 md:px-16">
      {/* Header */}
      <header className="flex flex-col items-start mb-16">
        <h1 className="text-2xl font-bold">Mindful Breathing</h1>
        <p className="text-sm text-gray-500">Best Practice Meditations</p>
      </header>

      {/* Image */}
      <div className="mt-8">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS01spqEYIHf54B_r42ABuBC2Rr80REjEHKTQ&s" alt="Meditation Image" className="w-full h-auto max-h-[45vh] object-cover rounded-xl" />
      </div>

      {/* Logo */}
      <div className="my-4">
        <img src="https://example.com/logo.png" alt="Logo" className="w-24 h-24" />
      </div>

      {/* Content */}
      <div className="mt-4 prose prose-sm">
        <p>This is a calming meditation to help you relax and drift off to sleep. Find a comfortable position, close your eyes, and focus on your breath.</p>
        <p>Imagine a peaceful scene, like a serene beach or a quiet forest. Let go of any stress or worries, and allow your mind to unwind.</p>
      </div>

      {/* Start Button */}
      <div className="mt-8 flex justify-center">
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl">Start Meditation</button>
      </div>
    </div>
  );
}