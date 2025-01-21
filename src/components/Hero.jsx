import React from "react";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
} from "react-icons/ai";
import {
    DiCss3,
    DiHtml5,
    DiJavascript1,
    DiNodejsSmall,
    DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="mt-16 sm:mt-20 md:mt-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-2 place-items-center gap-8 lg:gap-12">
                {/* Left Content Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center md:text-left"
                >
                    <TypeAnimation
                        sequence={[
                            "Frontend Dev",
                            1000,
                            "Webdesigner",
                            1000,
                            "Artist",
                            1000
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-400 text-lg sm:text-xl md:text-3xl lg:text-5xl italic mb-4"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4"
                    >
                        HEY, I AM <br />
                        <span className="text-[#66ffcc]">Sapna Sarkar</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 mx-auto md:mx-0 max-w-[300px] md:max-w-[500px]"
                    >
                        I am a passionate fullstack developer.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex flex-col sm:flex-row items-center gap-6 my-4 md:mb-0"
                    >
                        <motion.a
                            href="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=67877864f7b3074e912ad0cc"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                            className="z-10 cursor-pointer font-bold text-[#66ffcc] px-6 py-3 border rounded-xl text-center w-full sm:w-auto"
                        >
                            Preview CV
                        </motion.a>
                        <div className="flex gap-4 sm:gap-6 flex-row text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#66ffcc] z-20">
                            {[
                                { icon: <AiOutlineGithub />, link: "https://github.com/sapna008" },
                                { icon: <AiOutlineLinkedin />, link: "https://www.linkedin.com/in/sapna-sarkar-b53625222/" },
                                { icon: <AiOutlineInstagram />, link: "https://www.instagram.com/sapnasarkar55/" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    whileHover={{ scale: 1.2 }}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#4dffcc] transition-colors duration-300"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Profile Image Section with Rotating Border */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
                        {/* Rotating border */}
                        <div className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite] bg-gradient-to-r from-[#66ffcc] via-[#0ba8a8] via-red-500 via-[#6600ff] via-yellow-500 via-[#00ffff] to-purple-500 bg-[length:400%_100%]" />
                        
                        {/* Static white padding */}
                        <div className="absolute inset-[3px] rounded-full bg-white" />
                        
                        {/* Main image - fixed, not rotating */}
                        <div className="absolute inset-[4px] rounded-full overflow-hidden">
                            <img
                                src="https://sapnasarkarprofile.netlify.app/"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Tech Stack Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 py-12 md:py-24"
            >
                <p className="text-gray-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-0 sm:mr-6">
                    My Tech Stack
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    <DiHtml5 className="text-orange-600" />
                    <DiCss3 className="text-blue-600" />
                    <DiJavascript1 className="text-yellow-500" />
                    <DiReact className="text-blue-500" />
                    <DiNodejsSmall className="text-green-500" />
                </div>
            </motion.div>

            <div className="absolute inset-0 hidden md:block">
                <ShinyEffect left={0} top={0} size={1400} />
            </div>
        </div>
    );
};

export default Hero;
