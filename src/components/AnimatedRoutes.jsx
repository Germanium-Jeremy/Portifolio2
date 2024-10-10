import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './Landing'
import Skills from './Skills'
import Contact from './Contact'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
     const location = useLocation()
     return (
          <AnimatePresence>
               <Routes location={location} key={location.pathname}>
                    <Route path='/' element={ <Landing /> } />
                    <Route path='/skills' element={ <Skills /> } />
                    <Route path='/contact' element={ <Contact /> } />
               </Routes>
          </AnimatePresence>
     )
}

export default AnimatedRoutes
