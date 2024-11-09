import { Link } from 'react-router-dom'
import { Button } from "flowbite-react"

const Navbar = () => {
    return (
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
                    <a href="/chat" className="hover:text-blue-600 transition-colors text-lg">Community Chat</a>
                    <Link to="/journal" className="hover:text-blue-600 transition-colors text-lg">Journal Entry</Link>
                    <Link to="/meditate" className="hover:text-blue-600 transition-colors text-lg">Meditation</Link>
                </nav>

                {/* Sign In / Sign Up Buttons */}
                <div className="hidden md:flex space-x-4">
                    <Link to="/user/authenticate" className="bg-[rgb(16,20,61)] hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Sign In
                    </Link>
                </div>

                {/* Mobile Navigation (Hamburger Menu) */}
                <div className="md:hidden">
                    <Button className="bg-transparent border border-gray-200 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </Button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className="md:hidden bg-white shadow-md absolute top-0 right-0 w-full h-screen transform translate-x-full transition-transform duration-300 ease-in-out" id="mobile-menu">
                <nav className="flex flex-col items-center space-y-6 mt-20">
                    <Link to="/about" className="text-2xl text-gray-800 hover:text-blue-600">About</Link>
                    <Link to="/meditation" className="text-2xl text-gray-800 hover:text-blue-600">Meditation</Link>
                    <a href="/chat" className="text-2xl text-gray-800 hover:text-blue-600">Community Chat</a>
                    <div className="flex flex-col space-y-4 mt-8 mb-12">
                        <Button>
                            <Link to="/user/authenticate" className="bg-[rgb(16,20,61)] hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Sign In
                            </Link>
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
