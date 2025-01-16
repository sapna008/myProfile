import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'Masai School',
        period: 'July 2024 - Present',
        description: 'Full-Stack Development Training',
    },
    {
        company: 'TECHPLEMENT Software Company',
        period: 'May 2024 - June 2024',
        description: 'Python Developer Internship.',
    },
    {
        company: 'AWS Academy',
        period: 'July 2022 - August 2022',
        description: 'AWS Cloud Foundations',
    },
    {
        company: 'Shivalik College of Engineering',
        period: 'September 2021 - October 2021',
        description: 'Complete Angular industrial training.',
    },
]

const Experience = () => {
    return (
        <div className='p-8 max-w-[600px] mx-auto'>
            <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>WORK & POSITION OF RESPONSIBILITY</h1>
            <motion.div
                className='space-y-8 flex flex-col items-center'
                initial="hidden"
                animate="visible"
            >
                {experiences.map((experience, index) => (
                    <Reveal key={index}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1 }}
                            className='w-[500px] min-h-[180px] border border-[#12fdae] p-6 rounded-lg shadow-md
                                     hover:shadow-xl transition-shadow duration-300 bg-[#12fdae]/10'
                        >
                            <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                            <p className='text-gray-300'>{experience.period}</p>
                            <p className='text-gray-400 mt-4'>{experience.description}</p>
                        </motion.div>
                    </Reveal>
                ))}
            </motion.div>
        </div>
    )
}

export default Experience