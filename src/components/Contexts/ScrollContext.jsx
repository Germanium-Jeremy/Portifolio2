import { createContext, useEffect, useState } from "react"

export const ScrollContext = createContext(null)

export const ScrollProvider = ({ children }) => {
     const [scrolled, setScrolled] = useState(false)
     useEffect(() => {
          const handleScroll = () => {
               if(window.scrollY > 0) {
                    setScrolled(true)
               } else {
                    setScrolled(false)
               }
          }
          window.addEventListener('scroll', handleScroll)
     }, [])
     return (
          <ScrollContext.Provider value={{scrolled, setScrolled}}>
               {children}
          </ScrollContext.Provider>
     )
}