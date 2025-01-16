import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Sapna Sarkar</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a 
                    href="https://github.com/sapna008" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaGithubSquare className='hover:text-[#12fdae]' />
                </a>
                <a 
                    href="https://www.instagram.com/sapnasarkar55/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaInstagram className='hover:text-[#12fdae]'/>
                </a>
            </div>
        </div>

        <p className='text-gray-400'>@2024 Sapna Sarkar</p>
        
    </div>
  )
}

export default Footer