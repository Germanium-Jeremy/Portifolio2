import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ScrollContext } from './Contexts/ScrollContext'

const headerLinks = [
     { id: 1, text: "HOME", link: "/" },
     // { id: 2, text: "ABOUT", link: "/about" },
     { id: 3, text: "SKILLS", link: "/skills" },
     // { id: 4, text: "PROJECTS", link: "/projects" },
     { id: 5, text: "CONTACT", link: "/contact" },
]

const Header = () => {
     const { scrolled } = useContext(ScrollContext)
     return (
          <header className={`flex justify-evenly py-3 px-5 fixed top-0 left-0 right-0 z-[1] ${!scrolled ? "bg-transparent" : "grad-back"}`}>
               <div className={`text-3xl font-bold grad-title text-transparent wierd-font-3 px-[1rem]`}>
                    jeremy
               </div>
               <div className="flex gap-5 items-center justify-center wierd-font-2">
                    {headerLinks.map((link) => {
                         return (
                              <Link to={link.link} className={`text-sm text-white font-normal capitalize`} key={link.id}>{link.text}</Link>
                         )
                    })}
               </div>
          </header>
     )
}

export default Header
