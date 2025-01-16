import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLink,
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
        <div className="mt-24 max-w-[1200px] mx-auto relative">
            <div className="grid md:grid-cols-2 place-items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
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
                        className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                    >
                        HEY, I AM <br />
                        <span className="text-[#66ffcc]">Sapna Sarkar</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                    >
                        I am a passionate fullstack developer.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex flex-row items-center gap-6 my-4 md:mb-0"
                    >
                        <motion.a
                            href="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=67877864f7b3074e912ad0cc"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                            className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                   text-[#66ffcc] rounded-xl text-center"
                        >
                            Preview CV
                        </motion.a>
                        <div className="flex gap-6 flex-row text-4xl md:text-6xl text-[#66ffcc] z-20">
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://github.com/sapna008"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineGithub />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://www.linkedin.com/in/sapna-sarkar-b53625222/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineLinkedin />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://www.instagram.com/sapnasarkar55/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineInstagram />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
                
                <motion.div
                    className="relative inline-block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    {/* Rainbow rotating border container */}
                    <div className="absolute inset-0 rounded-full p-1.5 bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-[spin_4s_linear_infinite_reverse] bg-[length:400%_100%]">
                        {/* Image container */}
                        <div className="rounded-full overflow-hidden bg-white">
                            <motion.img
                                src="https://i.ibb.co/YtjYhC4/IMG-20250115-WA0030.jpg"
                                alt="Profile"
                                className="w-[300px] md:w-[450px] h-[300px] md:h-[450px] object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </div>

                    {/* Main image */}
                    <div className="relative rounded-full overflow-hidden">
                        <motion.img
                            src="https://i.ibb.co/YtjYhC4/IMG-20250115-WA0030.jpg"
                            alt="Profile"
                            className="w-[300px] md:w-[450px] h-[300px] md:h-[450px] object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
                className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
            >
                <p className="text-gray-200 mr-6">My Tech Stack</p>
                <DiHtml5 className="text-orange-600 mx-2" />
                <DiCss3 className="text-blue-600 mx-2" />
                <DiJavascript1 className="text-yellow-500 mx-2" />
                <DiReact className="text-blue-500 mx-2" />

                <DiNodejsSmall className="text-green-500 mx-2" />


            </motion.div>

            <div className="absolute inset-0 hidden md:block">
                <ShinyEffect left={0} top={0} size={1400} />
            </div>

        </div>
    )
}

export default Hero