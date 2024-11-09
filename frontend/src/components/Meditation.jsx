import React from 'react';
import { Moon, Heart, Zap, Wind } from 'lucide-react';

// Define categories and meditations arrays
const categories = [
  { name: 'Sleep', icon: Moon },
  { name: 'Inner Peace', icon: Heart },
  { name: 'Stress', icon: Zap },
  { name: 'Anxiety', icon: Wind },
]

const meditations = [
  {
    "title": "Mindful Breathing",
    "duration": "10 min",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB-DiOLHIyMAQSXs3U1mrBWhn4Ga2-ubaqQ&s",
    "bgColor": "rgb(255,154,118)"  // Vibrant Orange
  },
  {
    "title": "Laughter time",
    "duration": "15 min",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rPMlS8_FhnYxhQy1LsUQ1iKOngPnUv4Fgw&s",
    "bgColor": "rgb(255,209,220)"  // Pastel Pink
  },
  {
    "title": "Body Scan",
    "duration": "20 min",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZl3zTskLhCQP4SZTcuqtRi88Z2QGddTapw&s",
    "bgColor": "rgb(174,225,225)"  // Pastel Blue
  },
  {
    "title": "Guided Visualization",
    "duration": "25 min",
    "image": "/placeholder.svg?height=200&width=200",
    "bgColor": "rgb(77,208,225)"  // Bright Cyan
  },
  {
    "title": "Progressive Relaxation",
    "duration": "30 min",
    "image": "/placeholder.svg?height=200&width=200",
    "bgColor": "rgb(224,224,224)"  // Light Gray
  },
  {
    "title": "Focused Attention",
    "duration": "10 min",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_AUbIWk4x_aNHNTZ4j-CGDLHK1IkjSLpZA&sy",
    "bgColor": "rgb(193,225,193)"  // Pastel Green
  },
  {
    "title": "Calming Sounds",
    "duration": "12 min",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJs3sShikiCyiefF80i56MTO8zhgbOqs6AA&s",
    "bgColor": "rgb(255,235,59)"  // Sunny Yellow
  }
]


export default function Meditation() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 p-8 md:px-16">
      
      {/* Header Section */}
      <header className="mb-12">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Hello, User</h1>
          <ul className="flex flex-wrap space-x-6">
            {categories.map((category) => (
              <li key={category.name}>
                <button
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${category.name === 'Inner Peace'
                      ? 'bg-blue-200 text-blue-800'
                      : 'hover:bg-blue-100'
                    }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Meditations Section */}
            <section className="py-16 bg-gradient-to-r from-blue-300 via-teal-200 to-blue-100">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="order-2 md:order-1 text-center md:text-left">
                            <h2 className="text-4xl font-semibold text-[rgb(16,20,61)] mb-6">
                                Discover the Power of Meditation
                            </h2>
                            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                                Meditation is a powerful tool for reducing stress, improving focus, and promoting overall well-being. Our guided meditations are designed to help you cultivate mindfulness and inner peace in your daily life.
                            </p>
                            <button className="bg-[rgb(16,20,61)] hover:bg-blue-700 text-white py-3 px-8 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105">
                                Start Meditating
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="order-1 md:order-2 flex justify-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6Wu1knPMDHjpRc341rPR1JJXNrYeOvqFag&s"
                                alt="Person meditating"
                                className="rounded-lg shadow-2xl transform transition duration-300 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

      {/* Main Content Section */}
      <main>
        <h2 className="text-2xl font-semibold mb-6">Inner Peace Meditations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {meditations.map((meditation) => (
            <div
              key={meditation.title}
              style={{ backgroundColor: meditation.bgColor }} // Set background color inline
              className="rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={meditation.image}
                alt={meditation.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{meditation.title}</h3>
                <p className="text-gray-600">{meditation.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}