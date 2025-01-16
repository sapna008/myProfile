import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-[1200px] mx-auto" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-gray-300">
              <h3 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6">
                About <span className="text-[#66ffcc]">Me</span>
              </h3>
              <p className="text-sm sm:text-base leading-6 sm:leading-7 text-justify sm:text-left">
                Dynamic full-stack web developer with a strong proficiency in the MERN stack 
                and expertise in designing scalable web applications. Exceptional problem-solving 
                skills and attention to detail, combined with the ability to leverage Generative 
                AI for innovative solutions. Rapid learner, adept at embracing new technologies quickly.
              </p>
            </div>

            <div className="flex items-center gap-4 sm:gap-7">
              <motion.div 
                className="bg-gray-800/40 p-4 sm:p-6 rounded-lg hover:bg-gray-800/60 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                  11<span className="text-[#66ffcc]">+</span>
                </h3>
                <p className="text-xs sm:text-sm md:text-base">
                  <span className="text-[#66ffcc]/40">Projects</span>
                </p>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://getform.io/f/placeYourEndpointHere"
            method="POST"
            className="w-full max-w-md mx-auto space-y-4"
            id="form"
          >
            <div className="space-y-2">
              <p className="text-gray-100 font-bold text-xl sm:text-2xl">
                Let's connect!
              </p>
              <motion.input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                className="w-full rounded-lg border border-[#12fdae]/50 bg-gray-900/50 py-2 px-4 text-gray-200 
                         placeholder-gray-400 focus:border-[#12fdae] focus:outline-none focus:ring-1 
                         focus:ring-[#12fdae] transition-colors duration-300"
                whileFocus={{ scale: 1.01 }}
              />
              <motion.input
                type="email"
                id="email"
                placeholder="Your Email ..."
                name="email"
                className="w-full rounded-lg border border-[#66ffcc]/50 bg-gray-900/50 py-2 px-4 text-gray-200 
                         placeholder-gray-400 focus:border-[#66ffcc] focus:outline-none focus:ring-1 
                         focus:ring-[#12fdae] transition-colors duration-300"
                whileFocus={{ scale: 1.01 }}
              />
              <motion.textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="4"
                placeholder="Your Message ..."
                className="w-full rounded-lg border border-[#12fdae]/50 bg-gray-900/50 py-2 px-4 text-gray-200 
                         placeholder-gray-400 focus:border-[#12fdae] focus:outline-none focus:ring-1 
                         focus:ring-[#12fdae] transition-colors duration-300 resize-none"
                whileFocus={{ scale: 1.01 }}
              />
            </div>
            
            <motion.button
              type="submit"
              className="w-full py-3 rounded-lg text-gray-900 font-semibold text-lg sm:text-xl 
                       bg-[#66ffcc] hover:bg-[#66ffcc] transition-all duration-300 shadow-lg 
                       hover:shadow-[#66ffcc]/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </Reveal>
    </div>
  )
}

export default Contact
