import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const entryWithTimestamp = { ...data, timestamp: new Date().toLocaleString() };
    setEntries([entryWithTimestamp, ...entries]);
    reset();
  };

  return (
    <div className="container mx-auto mt-8 max-w-2xl p-6 bg-gradient-to-r from-blue-50 via-teal-100 to-slate-100 rounded-xl shadow-lg">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">Journal Entry</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="mb-10">
        <textarea
          {...register("entry", { required: true })}
          className="w-full h-48 p-4 text-gray-700 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none placeholder-gray-400 shadow-sm"
          placeholder="Write down your thoughts..."
        />
        <button
          type="submit"
          className="w-full bg-[rgb(16,20,61)] hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg mt-6 transition duration-200 shadow-md"
        >
          Save Entry
        </button>
      </form>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Entries</h2>

      {entries.length === 0 ? (
        <p className="text-gray-500 text-center">No entries yet. Start writing your thoughts!</p>
      ) : (
        <ul className="space-y-6">
          {entries.map((entry, index) => (
            <li key={index} className="p-5 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <p className="text-lg text-gray-800 mb-3">{entry.entry}</p>
              <p className="text-sm text-gray-400">Written on: {entry.timestamp}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Journal;