import React from 'react';
import BreathingExercise from './BreathingExercise';
import { HeartPulseIcon } from 'lucide-react/dist/cjs/lucide-react';

export default function MeditationDetail() {
  return (
    <div className="min-h-[100vh] my-10 px-2 md:px-16">
      {/* Header */}
      <header className="flex flex-col items-start mb-10">
        <h1 className="text-4xl text-[rgb(16,20,61)] font-bold">Mindful Activities</h1>
        <p className="text-sm text-gray-500">Best Practice Meditations</p>
      </header>

      {/* Image */}
      <div className="mt-8">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS01spqEYIHf54B_r42ABuBC2Rr80REjEHKTQ&s" alt="Meditation Image" className="w-full h-auto max-h-[45vh] object-cover rounded-xl" />
      </div>

      {/* Logo */}
      <div className="my-4 px-2">
        <HeartPulseIcon />
        {/* <img src="https://example.com/logo.png" alt="Logo" className="w-24 h-24" /> */}
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col justify-center items-center">
        Meditation is an ancient practice that has been used for centuries to promote relaxation, reduce stress, and improve overall well-being. It involves focusing your

        mind on a specific object, thought, or sensation. This can be done through various techniques, such as mindfulness meditation, transcendental meditation, and guided meditation.
        <br />
        <br />
        Additional Tips
        <br />
        Start with a short meditation session: Begin with 5-10 minutes and gradually increase the duration as you become more comfortable.<br />
        Find a meditation teacher or app: A teacher or app can provide guidance and structure to your meditation practice.<br />
        Be patient: It takes time to develop a regular meditation practice. Don't get discouraged if your mind wanders at first.<br />
        Experiment with different techniques: Try different meditation techniques to find what works best for you.<br />
      </div>

      {/* Start Button */}
      <div className="mt-8 flex justify-center">
        {/* <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl">Start Meditation</button> */}
        <BreathingExercise />
      </div>
    </div>
  );
}