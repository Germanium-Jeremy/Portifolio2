import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import ReactImg from '../assets/react.png'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Js from '../assets/js.png'
import Py from '../assets/py.png'
import Php from '../assets/php.png'
import Java from '../assets/java.png'
import C from '../assets/C.png'
import Cpp from '../assets/Cpp.png'
import Cs from '../assets/Cs.png'
import Tail from '../assets/tail.png'
import Ts from '../assets/ts.png'
import Lr from '../assets/lr.png'
import Vue from '../assets/vue.png'

const Skills = () => {
     const skills = [
          { text: "React", icon: ReactImg,
               content: `Proficient in building dynamic user interfaces using React, I leverage components and hooks for efficient state 
               management. My understanding of JSX allows me to create reusable UI elements. I utilize React Router for seamless navigation 
               and context API for global state management. I also implement performance optimization techniques to enhance application speed. 
               My experience with testing libraries ensures robust, maintainable code.`
          },
          { text: "HTML", icon: Html, content: `I excel in crafting semantic, accessible HTML structures that enhance SEO 
               and user experience. My knowledge of HTML5 allows me to utilize modern features such as audio, video, and 
               canvas elements. I ensure cross-browser compatibility and responsiveness in all my projects. I prioritize clean, 
               organized markup for easy maintenance. My attention to detail guarantees a solid foundation for any web application.`
          },
          { text: "CSS", icon: Css, content: `Skilled in CSS, I create visually appealing layouts and responsive designs that adapt to 
               various devices. I utilize Flexbox and Grid for efficient layout management. My expertise in preprocessors like SASS enhances my 
               ability to write modular, maintainable styles. I also implement animations and transitions to improve user engagement. My 
               knowledge of Tailwind CSS allows for rapid, utility-first styling.`
          },
          { text: "JS", icon: Js, content: `With a strong foundation in JavaScript, I develop interactive web applications by 
               manipulating the DOM and handling events. My proficiency in ES6+ features enables me to write clean, efficient code. 
               I implement asynchronous programming using Promises and async/await for smooth user experiences. I also leverage 
               frameworks like Vue and React to build scalable applications. My understanding of testing frameworks ensures high-quality, bug-free code.` 
          },
          { text: "PY", icon: Py, content: `As a Python developer, I excel in writing clean, efficient code for various applications, 
               from web development to data analysis. My experience with frameworks like Django and Flask allows me to build robust 
               web applications. I am skilled in using libraries such as Pandas and NumPy for data manipulation and analysis. My knowledge 
               of RESTful APIs enables seamless integration with front-end technologies. I prioritize best practices in coding and documentation for maintainability.` 
          },
          { text: "PHP", icon: Php, content: `I have a strong command of PHP for server-side development, creating dynamic 
               web applications and APIs. My experience with Laravel allows me to build elegant, scalable applications 
               with clean architecture. I utilize PDO for secure database interactions and implement MVC design patterns for 
               organized code. I am proficient in integrating third-party services and libraries for enhanced functionality. 
               My focus on security best practices ensures robust applications.` 
          },
          { text: "JAVA", icon: Java, content: `With expertise in Java, I develop cross-platform applications using object-oriented 
               programming principles. My understanding of frameworks like Spring enables me to build scalable, enterprise-level 
               applications. I am skilled in using Java for backend development, ensuring efficient data handling and processing. 
               I prioritize clean, maintainable code through proper documentation and design patterns. My experience with JavaFX
                allows me to create engaging desktop applications.` 
          },
          { text: "C", icon: C, content: `I possess a strong foundation in C programming, focusing on system-level 
               programming and performance optimization. My knowledge of pointers and memory management enables 
               me to write efficient code. I am skilled in developing algorithms and data structures, ensuring 
               optimal performance. My experience with embedded systems allows me to apply C in real-time applications. 
               I prioritize code clarity and maintainability in all my projects.` 
          },
          { text: "C++", icon: Cpp, content: `As a C++ developer, I leverage object-oriented programming concepts to 
               create efficient, scalable applications. My expertise in the Standard Template Library (STL) enhances 
               my ability to implement complex data structures and algorithms. I focus on performance optimization through
                effective memory management. My experience with game development frameworks allows me to create engaging interactive 
                experiences. I ensure code quality through rigorous testing and documentation.` 
          },
          { text: "C#", icon: Cs, content: `I specialize in C# for developing Windows applications and games using 
               Unity. My understanding of the .NET framework enables me to build robust, scalable applications. I 
               leverage object-oriented principles to create maintainable code and design patterns. My experience 
               with ASP.NET allows me to develop dynamic web applications and APIs. I prioritize best practices in 
               coding and project management for successful outcomes.`
          },
          { text: "TW", icon: Tail, content: `I excel in using Tailwind CSS for rapid, utility-first styling, 
               enabling me to create responsive designs efficiently. My understanding of the framework allows 
               for consistent and maintainable styles across projects. I leverage Tailwind's customization options 
               to align designs with brand identity. My focus on mobile-first design ensures optimal user experiences. 
               I integrate Tailwind seamlessly with frameworks like React and Vue for cohesive development.` 
          },
          { text: "TS", icon: Ts, content: `Proficient in TypeScript, I enhance JavaScript applications 
               with strong typing and interfaces for improved code quality. My skills in TypeScript allow 
               me to catch errors early in the development process, leading to more robust applications. 
               I leverage TypeScript with frameworks like React and Angular for better maintainability. My 
               understanding of generics and advanced types enables me to write flexible, reusable code. 
               I prioritize clean architecture and documentation for seamless collaboration.` 
          },
          { text: "LARAVEL", icon: Lr, content: `I specialize in Laravel for building elegant, scalable
               web applications with an emphasis on clean code and best practices. My knowledge of 
               Eloquent ORM allows for efficient database interactions and migrations. I implement 
               RESTful APIs and authentication systems for secure applications. My experience with Blade 
               templating enhances my ability to create dynamic, user-friendly interfaces. I prioritize 
               testing and documentation to ensure maintainability and reliability.` 
               },
          { text: "VUE", icon: Vue, content: `As a Vue developer, I create interactive user interfaces 
               with a focus on performance and reactivity. My expertise in Vue Router and Vuex enables me 
               to manage application state and routing effectively. I leverage Vue's component-based 
               architecture for modular development. My understanding of Single File Components (SFC) allows for 
               organized and maintainable code. I prioritize user experience through responsive design and efficient data handling.
`         },
     ]
     return (
          <>
          <motion.div className={`pt-[5rem] px-[5rem]`} initial={{opacity: 0.5}} animate={{opacity: 1}} exit={{opacity: 0}}>
               <h2 className={`text-white text-2xl font-bold text-center wierd-font-3`}>Great AT</h2>
               <div className={`grid xl:grid-cols-3 gap-[3rem] relative items-center justify-center my-[4rem]`}>
                    {skills.map((skill, index) => {
                         const [isFlipped, setIsFlipped] = useState(false)
                         return (
                              <ReactCardFlip key={index} isFlipped={isFlipped} flipDirection='Oblique'>
                                   <motion.article className={`bg-gray-950 text-white px-[2rem] py-[2rem] rounded-lg flex flex-col gap-3 items-center justify-center shadow shadow-gray-800`}
                                        initial={{filter: 'blur(120px)'}} animate={{filter: 'blur(0px)', transition: { duration: 1 }}} exit={{width: 0, height: 0}}>
                                        <img src={skill.icon} alt={skill.text} className={`w-[8rem] h-[7rem]`} />
                                        <h4 className={`font-bold text-lg wierd-font-2`}>{skill.text}</h4>
                                        <button className={`rounded-lg px-[2rem] py-[.7rem] bg-[#ccfc] wierd-font-2 hover:bg-[#cefe]`} onClick={() => setIsFlipped(true)}>Read More</button>
                                   </motion.article>
                                   <article className={`bg-gray-900 text-white px-[1.5rem] py-[1rem] rounded-lg shadow shadow-gray-800 min-h-[10rem] flex justify-center items-center`} onClick={() => setIsFlipped(false)}>
                                        <p className={`w-full h-full cursor-pointer`}>{skill.content}</p>
                                   </article>
                              </ReactCardFlip>
                         )
                    })}
               </div>
          </motion.div>
          <motion.div className={`bg-gray-950 py-[2rem] px-[5rem] flex flex-col items-center justify-center`} initial={{height: 0}} animate={{height: '100%'}} exit={{y: window.innerHeight}}>
               <h2 className={`text-white capitalize text-2xl font-bold wierd-font-3`}>let me get you a beautiful website.</h2>
               <Link to={'/contact'} className={`px-[2rem] py-[.7rem] bg-[#ccfc] hover:bg-[#cefe] rounded-lg mt-[2rem] text-white wierd-font-2`}>Contact Me</Link>
          </motion.div>
          </>
     )
}

export default Skills
