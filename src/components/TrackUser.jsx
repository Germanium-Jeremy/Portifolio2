import React, { useEffect, useRef, useState } from 'react'

const TrackUser = () => {
     const [rotation, setRotation] = useState({ x: 0, y: 0 })
     const [isSquished, setIsSquished] = useState(false)
     const [position, setPosition] = useState({ x: 0, y: 0 })
     const [isClicked, setIsClicked] = useState(false)
     const [isVisible, setIsVisible] = useState(true)
     const faceRef = useRef(null)

     useEffect(() => {
          const handleMouseMovement = (event) => {
               const face = faceRef.current
               const faceRect = face.getBoundingClientRect()

               const faceCenterX = faceRect.left + faceRect.width / 2
               const faceCenterY = faceRect.top + faceRect.height / 2

               const rotateX = (event.clientY - faceCenterY) / 30
               const rotateY = (faceCenterX - event.clientX) / 30

               setRotation({ x: rotateX, y: rotateY })
          }

          window.addEventListener('mousemove', handleMouseMovement)
          return () => {
               window.removeEventListener('mousemove', handleMouseMovement)
          }
     }, [])

     useEffect(() => {
          const moveCursor = (event) => {
               setPosition({ x: event.clientX - 7, y: event.clientY - 7 })
          }
      
          const handleMouseDown = () => {
               setIsClicked(true)
          }
      
          const handleMouseUp = () => {
               setIsClicked(false)
          }
      
          const handleMouseEnter = () => {
               setIsVisible(true)
          }
      
          const handleMouseLeave = () => {
               setIsVisible(false)
          }
      
          window.addEventListener('mousemove', moveCursor)
          window.addEventListener('mousedown', handleMouseDown)
          window.addEventListener('mouseup', handleMouseUp)
          window.addEventListener('mouseenter', handleMouseEnter)
          window.addEventListener('mouseleave', handleMouseLeave)
      
          return () => {
               window.removeEventListener('mousemove', moveCursor)
               window.removeEventListener('mousedown', handleMouseDown)
               window.removeEventListener('mouseup', handleMouseUp)
               window.removeEventListener('mouseenter', handleMouseEnter)
               window.removeEventListener('mouseleave', handleMouseLeave)
          }
        }, [])

     const constrainMovement = (value, limit) => {
          if (value > limit) return limit
          if (value < -limit) return -limit
          return value
     }

     const handleSquish = () => {
          setIsSquished(true)
          setTimeout(() => {
            setIsSquished(false)
          }, 100)
     }

  return (
     <>
     <section className={`face-container w-[8rem] h-[8rem] fixed top-0 left-0 z-[1] transition ${isSquished && 'transform scale-110'}`} onClick={handleSquish}>
          <div className={`face bg-[#ccfc] w-full h-full relative`} ref={faceRef} style={{ transform: `rotateX(${-rotation.x}deg) rotateY(${-rotation.y}deg)` }}>
               <div className={`eye absolute top-[2.5rem] left-[1.5rem] w-[2rem] h-[2rem] bg-white rounded-full flex items-center justify-center`}>
                    <div className="eyeball bg-black w-[0.75rem] h-[0.75rem] rounded-full" style={{
                    transform: `translate(${constrainMovement(-rotation.y * 2, 8)}px, ${constrainMovement(rotation.x * 2, 8)}px)`,
                    transition: 'transform 0.1s ease-out' }}></div>
               </div>
               <div className={`eye absolute top-[2.5rem] right-[1.5rem] w-[2rem] h-[2rem] bg-white rounded-full flex items-center justify-center`}>
                    <div className="eyeball bg-black w-[0.75rem] h-[0.75rem] rounded-full" style={{
                    transform: `translate(${constrainMovement(-rotation.y * 2, 8)}px, ${constrainMovement(rotation.x * 2, 8)}px)`,
                    transition: 'transform 0.1s ease-out' }}></div>
               </div>
               <div className={`mouth w-[3rem] h-[.5rem] bg-black rounded-xl absolute bottom-[1.5rem] left-1/2 transform -translate-x-1/2`}></div>
          </div>
     </section>
     <div className={`custom-cursor ${isClicked ? 'custom-cursor--clicked' : ''} ${isVisible ? '' : 'custom-cursor--hidden'}`} style={{ left: `${position.x - 2}px`, top: `${position.y - 2}px` }}></div>
     </>
  )
}

export default TrackUser
