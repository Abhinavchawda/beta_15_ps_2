import { useState } from 'react'
import { Brain, Gamepad2 } from "lucide-react"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Joke from './Joke'

export default function LandingPage() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle newsletter signup
        console.log('Newsletter signup:', email)
        setEmail('')
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-50 text-gray-800">
            <header className="bg-white border-b border-gray-200 shadow-md">
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    {/* Logo and Brand Name */}
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-4xl font-semibold text-[rgb(16,20,61)] hover:text-blue-800 transition-colors">Nirvana</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/" className="hover:text-blue-600 transition-colors text-lg">Home</Link>
                        <Link to="/about" className="hover:text-blue-600 transition-colors text-lg">About</Link>
                        {/* <Link to="/games" className="hover:text-blue-600 transition-colors text-lg">Games</Link> */}
                        {/* <Link to="/meditation" className="hover:text-blue-600 transition-colors text-lg">Meditation</Link> */}
                        <Link to="/chat" className="hover:text-blue-600 transition-colors text-lg">Community Chat</Link>
                    </nav>

                    {/* Sign In / Sign Up Buttons */}
                    <div className="hidden md:flex space-x-4">
                        <Link to="/user/authenticate" className="bg-[rgb(16,20,61)] hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Sign In
                        </Link>
                    </div>

                    {/* Mobile Navigation (Hamburger Menu) */}
                    <div className="md:hidden">
                        <button className="bg-transparent border border-gray-200 p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <div className="md:hidden bg-white shadow-md absolute top-0 right-0 w-full h-screen transform translate-x-full transition-transform duration-300 ease-in-out" id="mobile-menu">
                    <nav className="flex flex-col items-center space-y-6 mt-20">
                        <a href="/about" className="text-2xl text-gray-800 hover:text-blue-600">About</a>
                        <a href="/games" className="text-2xl text-gray-800 hover:text-blue-600">Games</a>
                        <a href="/meditation" className="text-2xl text-gray-800 hover:text-blue-600">Meditation</a>
                        <a href="/chat" className="text-2xl text-gray-800 hover:text-blue-600">Community Chat</a>
                        <div className="flex flex-col space-y-4 mt-8 mb-12">
                            <button className="bg-[rgb(16,20,61)] hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Sign In
                            </button>
                            <button className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 px-6 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-gray-400">
                                Sign Up
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative h-[80vh] flex items-center justify-center text-center text-white bg-gradient-to-r from-blue-300 via-teal-400 to-blue-600">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHUsh-icHtOAW60fGT9zqVbKDSias-2eORA&s"
                        alt="Serene nature scene"
                        className="absolute inset-0 object-cover w-full h-full opacity-40"
                    />
                    <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">
                            Your Path to Inner Peace
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                            Discover resources, games, and meditations to nurture your mental well-being
                        </p>
                        <button className="bg-[rgb(16,20,61)] hover:bg-blue-700 text-white py-3 px-10 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105">
                            Start Your Journey
                        </button>
                    </div>
                </section>

                <section className="py-16 lg:px-10 bg-gray-50">
                    <div className="container mx-auto px-10 shadow-lg py-6 rounded-2xl">
                        <h2 className="text-5xl font-bold text-center mb-12 text-[rgb(16,20,61)]">Understanding Mental Wellness</h2>
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                                    Mental wellness is a crucial aspect of overall health. It influences our thoughts, feelings, and actions. Prioritizing mental health can significantly improve your quality of life and resilience.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start text-gray-700 text-lg">
                                        <svg className="mr-3 h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7m8-4l-3 3m2-2l3 3m2-2l-3 3" />
                                        </svg>
                                        1 in 5 adults experience mental illness each year
                                    </li>
                                    <li className="flex items-start text-gray-700 text-lg">
                                        <svg className="mr-3 h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7m8-4l-3 3m2-2l3 3m2-2l-3 3" />
                                        </svg>
                                        50% of all lifetime mental illness begins by age 14
                                    </li>
                                    <li className="flex items-start text-gray-700 text-lg">
                                        <svg className="mr-3 h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7m8-4l-3 3m2-2l3 3m2-2l-3 3" />
                                        </svg>
                                        Suicide is the 2nd leading cause of death among people aged 10-34
                                    </li>
                                </ul>
                                <button className="mt-8 bg-[rgb(16,20,61)] hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                                    Discover More
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <Brain className="h-40 w-40 text-blue-700" />
                            </div>
                        </div>
                    </div>
                </section>

                <Joke />

            </main>
            <Footer/>
            
        </div>
    )
}