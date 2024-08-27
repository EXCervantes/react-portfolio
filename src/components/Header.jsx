import { useState } from "react";
import { NavLinks } from "../components/Navigation";
import {FaTimes, FaBars} from 'react-icons/fa';


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href)
        if(targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
        }
        setIsMobileMenuOpen(false);
    }
    return (
        <div>
            {/* Reactive menu for different screens */}
            <nav className="fixed left-0 right-0 top-4 z-50">
            {/* Menu For Desktop Displays */}
            <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg dark:bg-black/20 bg-white/15 py-3 backdrop-blur-lg lg:flex">
                <div className="flex justify-between gap-6">
                    <div>
                        <ul className="flex items-center gap-6">
                            {NavLinks.map((tab, index) => (
                                <li key={index}>
                                    <a className="text-2xl font-medium hover:opacity-80 drop-shadow-lg text-black  dark:text-slate-100 dark:drop-shadow-glow dark:hover:text-yellow-200"
                                    href={tab.href}
                                    onClick={(e) => handleLinkClick(e, tab.href)}>
                                        {tab.label}
                                        </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Menu for mobile displays */}
            <div className="rounded-lg backdrop-blur-md lg:hidden">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <button className="focus:outline-none lg:hidden"
                        onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (
                                <FaTimes className="m-2 h-6 w-5" />
                            ) : (
                               <FaBars className="m-2 h-6 w-5" />
                            )}
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop:blur-md">
                        {NavLinks.map((tab, index) => (
                            <li key={index}>
                                <a className="block w-full text-xl font-semibold" href={tab.href}
                                onClick={(e) => handleLinkClick(e, tab.href)}>
                                    {tab.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            </nav>
        </div>
    )
}

export default Header;