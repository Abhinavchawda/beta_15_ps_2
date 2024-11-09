import { useState } from 'react'
import { Brain, Gamepad2 } from "lucide-react"

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
                    <a href="/" className="flex items-center space-x-2">
                        <span className="text-4xl font-semibold text-[rgb(16,20,61)] hover:text-blue-800 transition-colors">Nirvana</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="/" className="hover:text-blue-600 transition-colors text-lg">Home</a>
                        <a href="/about" className="hover:text-blue-600 transition-colors text-lg">About</a>
                        <a href="/games" className="hover:text-blue-600 transition-colors text-lg">Games</a>
                        <a href="/meditation" className="hover:text-blue-600 transition-colors text-lg">Meditation</a>
                        <a href="/chat" className="hover:text-blue-600 transition-colors text-lg">Community Chat</a>
                    </nav>

                    {/* Sign In / Sign Up Buttons */}
                    <div className="hidden md:flex space-x-4">
                        <button className="bg-[rgb(16,20,61)] hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Sign In
                        </button>
                        <button className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 px-6 py-2 rounded-xl font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400">
                            Sign Up
                        </button>
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

            </main>

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


            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick as</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Resources</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
                            <form onSubmit={handleSubmit} className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                                />
                                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                        <p>&copy; {new Date().getFullYear()} Nirvana. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}