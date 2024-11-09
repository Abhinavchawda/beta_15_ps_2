import {Link, useNavigate} from "react-router-dom"
import { Brain} from "lucide-react"
import Games from './Games'
import Joke from './Joke'
import { Button } from "flowbite-react"

export default function LandingPage() {
    const navigate = useNavigate()
    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-50 text-gray-800">
                {/* Hero Section */}
                <section className="relative h-[80vh] flex items-center justify-center text-center text-white bg-gradient-to-r from-blue-300 via-teal-400 to-blue-600">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHUsh-icHtOAW60fGT9zqVbKDSias-2eORA&s"
                        alt="Serene nature scene"
                        className="absolute inset-0 object-cover w-full h-full opacity-40"
                    />
                    <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">
                            Your Path to Inner Peace
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                            Discover resources, games, and meditations to nurture your mental well-being
                        </p>
                        <Button to="/user/authenticate" className="mt-8 bg-[rgb(16,20,61)] hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300" onClick={()=>{
                            navigate("user/authenticate")
                        }}>
                            Start Your Journey
                        </Button>
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
                                <Button to="/user/authenticate" className="mt-8 bg-[rgb(16,20,61)] hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300" onClick={()=>{
                                    navigate("user/authenticate")
                                }}>
                                    Discover More
                                </Button>
                            </div>
                            <div className="flex justify-center">
                                <Brain className="h-40 w-40 text-blue-700" />
                            </div>
                        </div>
                    </div>
                </section>
                <Joke />
                <Games/>
        </main>
    )
}