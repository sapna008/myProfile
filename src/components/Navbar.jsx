import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            if (offset > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const menuVariants = {
        open: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20
            }
        },
        closed: {
            x: '-100%',
            opacity: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20
            }
        }
    }

    const navItems = [
        { title: 'About', to: 'skills' },
        { title: 'Projects', to: 'portfolio' },
        { title: 'Contact', to: 'contact' }
    ]

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
            <div className='max-w-[1300px] mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-12 h-20'>
                <a 
                    href="#" 
                    className='text-gray-200 text-xl sm:text-2xl font-semibold hover:text-[#12fdae] transition-colors duration-300'
                >
                    Sapna Sarkar
                </a>

                {/* Desktop Menu */}
                <ul className='hidden md:flex items-center gap-6 lg:gap-12'>
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <Link 
                                to={item.to} 
                                smooth={true} 
                                offset={50} 
                                duration={500}
                                className='text-gray-200 hover:text-[#12fdae] transition-colors duration-300 text-lg'
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleNav} 
                    className='md:hidden z-50 text-gray-200 hover:text-[#12fdae] transition-colors duration-300'
                    aria-label="Toggle menu"
                >
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </button>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={nav ? 'open' : 'closed'}
                    variants={menuVariants}
                    className='fixed left-0 top-0 w-full h-screen bg-gray-900 z-40 md:hidden'
                >
                    <ul className='flex flex-col items-center justify-center h-full gap-8'>
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <Link 
                                    to={item.to} 
                                    onClick={closeNav} 
                                    smooth={true} 
                                    offset={50} 
                                    duration={500}
                                    className='text-gray-200 text-2xl sm:text-3xl font-semibold hover:text-[#12fdae] transition-colors duration-300'
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar