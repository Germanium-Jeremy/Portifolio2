import React from 'react'
import Me from '../assets/me.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Web from '../assets/web.png'
import Game from '../assets/game.png'
import Embedded from '../assets/embed.png'

const Landing = () => {
     const [text] = useTypewriter({
          words: ['Always learning', 'Always growing', 'Embracing challenges', 'Crafting code with passion', 'Building solutions that matter', 'Transforming ideas into digital realities'],
          loop: {},
          typeSpeed: 200,
          deleteSpeed: 100,
     })

     const mainCategs = [
          { text: "Web Dev", content: "Creating seamless, user-friendly interfaces that enhance online experiences.", icon: Web },
          { text: "Game Dev", content: "Designing immersive worlds and engaging gameplay that captivate players.", icon: Game },
          { text: "Embedded System", content: "Developing efficient, reliable solutions that integrate hardware and software for real-world applications.", icon: Embedded }
     ]
     return (
          <>
          <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} exit={{ x: window.innerWidth }} className={`flex gap-5`}>
               <motion.div initial={{height: 0}} animate={{height: '100%'}} exit={{y: window.innerHeight}} className={`w-full pt-[10rem] px-[7rem]`}>
                    <p className={`text-[#ccff] text-lg uppercase wierd-font-3`}>My name is NKUNDABAGENZI Jeremy</p>
                    <p className={`text-white text-4xl font-semibold mt-[3rem] wierd-font-2`}>
                         I'm <span className={`text-nowrap text-2xl font-bold`}>{text}</span>.
                         <span className={`text-[#ccfc]`}>&nbsp;&nbsp;<Cursor cursorStyle='J' /></span>
                    </p>
                    <p className={`text-md my-[2rem] text-white wierd-font-2`}>
                         As a passionate lifelong learner, I am dedicated to exploring new ideas and expanding my knowledge across various fields.
                         My curiosity drives me to embrace challenges and seek out opportunities for growth, allowing me to adapt and innovate in an ever-changing world.
                    </p>
                    <Link to={`/contact`} className={`px-[2rem] py-[.6rem] bg-[#ccfc] rounded-lg wierd-font-2 hover:bg-[#cefe]`}>Contact Me</Link>
               </motion.div>
               <motion.div initial={{width: 0}} animate={{width: '100%', transition: { duration: 0.2 }}} exit={{x: window.innerWidth}} className={`w-full pl-[2rem] pt-[5rem] bg-gray-900`}>
                    <motion.div initial={{width: 0}} animate={{width: '100%', transition: { duration: 0.4 }}} exit={{x: window.innerWidth}} className={`bg-gray-800 w-full h-full pt-[2rem] pl-[2rem]`}>
                         <motion.div initial={{width: 0}} animate={{width: '100%', transition: { duration: 0.6 }}} exit={{x: window.innerWidth}} className={`bg-gray-700 w-full h-full rounded-lg overflow-hidden flex`}>
                              <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: { duration: 0.8 }}} exit={{x: window.innerWidth}} className={`h-full w-[1rem] bg-gray-600 rounded-lg`}></motion.div>
                              <img src={Me} alt="Jeremy" className={`w-[full] h-[full]`} />
                         </motion.div>
                    </motion.div>
               </motion.div>
          </motion.div>
          <motion.div initial={{height: 0}} animate={{height: "100%"}} exit={{y: window.innerHeight}} className={`px-[10rem] py-[5rem] flex items-center justify-center gap-[5rem]`}>
               {mainCategs.map((categ, index) => {
                    return (
                         <div className={`px-[2rem] py-[1rem] rounded-lg shadow shadow-gray-400 flex flex-col gap-2 items-center justify-center max-w-[30rem] float`} key={index}>
                              <img src={categ.icon} alt={categ.text} className={`w-[5rem] h-[5rem]`} />
                              <h3 className={`text-lg text-white font-semibold wierd-font-3`}>{categ.text}</h3>
                              <p className={`text-white text-sm text-center wierd-font-2`}>{categ.content}</p>
                         </div>
                    )
               })}
          </motion.div>
          </>
     )
}

export default Landing
