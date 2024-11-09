import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button } from "flowbite-react"


// const Navbar = () => {
//     // State to manage mobile menu visibility
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     // Toggle mobile menu
//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

// return (
//         <header className="bg-white border-b border-gray-200 shadow-md">
//             <div className="container mx-auto px-4 py-6 flex justify-between items-center">
//                 {/* Logo and Brand Name */}
//                 <Link to="/" className="flex items-center space-x-2">
//                     <span className="text-4xl font-semibold text-[rgb(16,20,61)] hover:text-blue-800 transition-colors">Nirvana</span>
//                 </Link>

//                 {/* Desktop Navigation */}
//                 <nav className="hidden md:flex space-x-8">
//                     <Link to="/" className="hover:text-blue-600 transition-colors text-lg">Home</Link>
//                     <Link to="/about" className="hover:text-blue-600 transition-colors text-lg">About</Link>
//                     <a href="/chat" className="hover:text-blue-600 transition-colors text-lg">Community Chat</a>
//                     <Link to="/journal" className="hover:text-blue-600 transition-colors text-lg">Journal Entry</Link>
//                     <Link to="/meditate" className="hover:text-blue-600 transition-colors text-lg">Meditation</Link>
//                 </nav>

//                 {/* Sign In / Sign Up Buttons */}
//                 <div className="hidden md:flex space-x-4">
//                     <Link to="/user/authenticate" className="bg-[rgb(16,20,61)] hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
//                         Sign In
//                     </Link>
//                 </div>

//                 {/* Mobile Navigation (Hamburger Menu) */}
//                 <div className="md:hidden">
//                     <Button className="bg-transparent border border-gray-200 p-2 rounded-md" onClick={toggleMenu}>
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     </Button>
//                 </div>
//             </div>

//             {/* Mobile Dropdown Menu */}
//             <div
//                 className={`md:hidden bg-white shadow-md absolute top-0 right-0 w-full h-screen transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
//                 id="mobile-menu"
//             >
//                 <nav className="flex flex-col items-center space-y-6 mt-20">
//                     <Link to="/about" className="text-2xl text-gray-800 hover:text-blue-600" onClick={toggleMenu}>About</Link>
//                     <Link to="/meditation" className="text-2xl text-gray-800 hover:text-blue-600" onClick={toggleMenu}>Meditation</Link>
//                     <a href="/chat" className="text-2xl text-gray-800 hover:text-blue-600" onClick={toggleMenu}>Community Chat</a>
//                     <div className="flex flex-col space-y-4 mt-8 mb-12">
//                         <Button>
//                             <Link to="/user/authenticate" className="bg-[rgb(16,20,61)] hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
//                                 Sign In
//                             </Link>
//                         </Button>
//                     </div>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Navbar

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    Transition,
} from '@headlessui/react'
import { MenuIcon, UserIcon, XIcon } from 'lucide-react/dist/cjs/lucide-react';

const navigation = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Community Chat', link: '/chat' },
    { name: 'Journal Entry', link: '/journal' },
    { name: 'Meditation', link: '/meditate' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    return (
        <div className="min-h-full">
            <Disclosure as="nav" className="bg-gray-900 backdrop-blur-lg mx-auto">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 md:px-4 lg:px-8">
                            <div className="flex h-20 items-center justify-between">
                                <div className='text-4xl text-white mx-4'>Nirvana</div>
                                <div className="flex items-center">
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-baseline space-x-4">
                                            {navigation.map((item) =>
                                            (<Link
                                                key={item.name}
                                                to={item.link}
                                                className={"text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg p-2 text-sm font-medium flex items-center"}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                            )
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center cursor-pointer">
                                        {/* Profile dropdown */}
                                        <UserIcon className="text-white rounded-full border border-white h-8 w-8" />
                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    {/* Mobile menu button */}
                                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </DisclosureButton>
                                </div>
                            </div>
                        </div>

                        <DisclosurePanel className="md:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                {navigation.map((item) =>
                                (<Link key={item.name}
                                    to={item.link}
                                >
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                </Link>
                                )
                                )}
                            </div>
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
        </div>
    );
}
export default Navbar;