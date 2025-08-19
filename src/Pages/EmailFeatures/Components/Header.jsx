import { useState } from 'react';
import logo from '../../../assets/logo.png';
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const userAvatar = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

    // A reusable component for nav links to avoid repetition
    const NavLink = ({ href, children, isActive = false }) => (
        <a
            href={href}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${isActive
                    ? 'bg-[#1E293B] border border-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
            aria-current={isActive ? 'page' : undefined}
        >
            {children}
        </a>
    );

    // A reusable component for mobile nav links
    const MobileNavLink = ({ href, children, isActive = false }) => (
        <a
            href={href}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive
                    ? 'bg-[#1E293B] text-white'
                    : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
            aria-current={isActive ? 'page' : undefined}
        >
            {children}
        </a>
    );

    return (
        <header className="bg-[#0F0E1A] shadow-md rounded-2xl">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Desktop and Mobile Header */}
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        {/* Your logo image here */}
                        <img className="h-8 w-auto" src={logo} alt="SSM Logo" />
                    </div>

                    {/* Desktop Navigation Links (hidden on mobile) */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <NavLink href="#">Dashboard</NavLink>
                        <NavLink href="#" isActive={true}>Verify Email</NavLink>
                        <NavLink href="#">Create Email</NavLink>
                        <NavLink href="#">History</NavLink>
                    </div>

                    {/* Profile Avatar (hidden on mobile) */}
                    <div className="hidden md:block">
                        <img className="h-10 w-10 rounded-full" src={userAvatar} alt="User profile" />
                    </div>

                    {/* Mobile Menu Button (visible on mobile) */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                // Close Icon
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger Icon
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden pb-4" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <MobileNavLink href="#">Dashboard</MobileNavLink>
                            <MobileNavLink href="#" isActive={true}>Verify Email</MobileNavLink>
                            <MobileNavLink href="#">Create Email</MobileNavLink>
                            <MobileNavLink href="#">History</MobileNavLink>
                        </div>
                        {/* User Profile Section in Mobile Menu */}
                        <div className="border-t border-gray-700 pt-4 mt-4">
                            <div className="flex items-center px-5">
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={userAvatar} alt="" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium leading-none text-white">Your Name</div>
                                    <div className="text-sm font-medium leading-none text-gray-400">your.email@example.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;