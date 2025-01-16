import React from 'react';
import project1 from "../assets/project1.jpeg"
import project2 from "../assets/project2.jpeg"
import project4 from "../assets/project3.jpeg"
import project5 from "../assets/project-4.png"
import project6 from "../assets/project-5.jpeg"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
  {
    img: project1,
    title: "Image Compiler",
    description: "It converts handwritten code into text, then compiles automatically, and shows the output.",
    links: {
      site: "https://fascinating-macaron-e02d98.netlify.app/",
      github: "github.com/sapna008/Image_to_text_ReactProject",
    },
  },
  {
    img: project2,
    title: "Ecommercial Watch Website",
    description: "The Casio Clone App is a fully dynamic web application inspired by the official Casio website.",
    links: {
      site: "https://casioclone.netlify.app/",
      github: "github.com/sapna008/EcoFutures_010 ",
    },
  },
  {
    img: project4,
    title: "Test-Your-Knowledge App",
    description: "A React-based quiz app that allows users to test their knowledge across different subjects.",
    links: {
      site: "https://jocular-frangipane-a12382.netlify.app/",
      github: "github.com/sapna008/Test-Your-Knowledge",
    },
  },
  {
    img: project5,
    title: "Object Image Detection",
    description: "Using Streamlit Python Framework and Library TensorFlow to train and deploy Image Recognition Model",
    links: {
      site: "#",
      github: "github.com/sapna008/TECHPLACEMENT",
    },
  },
  {
    img: project6,
    title: "Myntra Clone App",
    description: "The Myntra Clone App is a web application inspired by the popular online fashion retailer, Myntra. It aims to provide a user-friendly interface, extensive product listings, and a responsive design",
    links: {
      site: "https://myntra-team-project.vercel.app/",
      github: "https://github.com/Ershivnandan/Metaverse-Mavens_021",
    },
  },
]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
            <div className='w-full md:w-1/2 p-4'>
              <img
                src={project.img}
                alt={project.title}
                className='w-full h-full object-cover rounded-lg shadow-lg border-2 border-[#12fdae]/40'
              />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex space-x-4'>
                <a href={project.links.site} target='blank'
                  className='px-4 py-2 bg-[#66ffcc] text-[#000] rounded-lg hover:bg-[#cdfeee]
                                        transition duration-300'>
                  View Site
                </a>
                <a href={project.links.github}
                  className='px-4 py-2 bg-[#66ffcc] text-[#000] rounded-lg hover:bg-[#cdfeee]
                                        transition duration-300'>
                  <AiOutlineGithub />
                </a>

              </div>

            </div>

          </div>
        </Reveal>
      ))}

    </div>
  )
}

export default Portfolio