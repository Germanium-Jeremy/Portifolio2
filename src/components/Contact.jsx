import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const serviceIdUrl = import.meta.env.VITE_APP_SERVICE_ID
const templateIdUrl = import.meta.env.VITE_APP_TEMPLATE_ID

const Contact = () => {
     const [fullName, setFullName] = useState('')
     const [address, setAddress] = useState('')
     const [subject, setSubject] = useState('')
     const [message, setMessage] = useState('')
     const [loading, setLoading] = useState(false)
     const [responseR, setResponseR] = useState('')
     const [seeingR, setSeeingR] = useState(false)
     const [errors, setErrors] = useState({})

     // const checkEmail = async(email) => {
     //      const response = await fetch(`https://api.email-checker.net/validator?email=${encodeURIComponent(email)}`)
     //      return await response.json()
     // }

     const validateForm = () => {
          const newErrors = {}
          const nameRegex = /^[a-zA-Z\s]+$/
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
          if (!fullName || !nameRegex.test(fullName)) {
              newErrors.fullName = 'Full name is required and should contain only letters.'
          }
          if (!address || !emailRegex.test(address)) {
              newErrors.address = 'A valid email address is required.'
          }
          if (!subject || subject.length < 3) {
              newErrors.subject = 'Subject must be at least 3 characters long.'
          }
          if (message.length < 10 || message.length > 300) {
              newErrors.message = 'Message must be between 10 and 300 characters long.'
          }
  
          setErrors(newErrors)
          return Object.keys(newErrors).length === 0
     }

     const handleSubmit = (e) => {
          e.preventDefault()
          if (!validateForm()) return
          setLoading(true)
          const serviceID = serviceIdUrl
          const templateID = templateIdUrl
          var params = { name: fullName, email: address, subject: subject, message: message }

          // checkEmail(address).then(resp => {
          //      console.log(resp)
          // }).catch(error => {
          //      console.log(error)
          // })

          emailjs.send(serviceID, templateID, params).then(res => {
               setFullName('')
               setAddress('')
               setSubject('')
               setMessage('')
               console.log(res)
               setResponseR("Message Sent Successfully")
               setLoading(false)
          }).catch(error => {
               setLoading(false)
               setResponseR(error.text)
               console.error(error.text)
          })
     }

     useEffect(() => {
          setSeeingR(true)
          setTimeout(() => {
               setSeeingR(false)
          }, 3000)
     }, [responseR])

     return (
          <>
          {seeingR && (
               <div className={`fixed top-[4rem] right-0 px-[2rem] py-[.7rem] bg-[#ccfc] text-gray-950 rounded-lg shadow shadow-gray-900`}>
                    <p className={`wierd-font-2 text-white`}>{responseR}</p>
               </div>
          )}
          <motion.div className={`py-[7rem] px-[5rem] flex gap-[3rem] items-center justify-evenly`} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
               <motion.div className={`text-white w-full pl-[5rem] wierd-font-2`} initial={{filter: "blur(120px)"}} animate={{filter: "blur(0px)"}} exit={{width: 0, height: 0}}>
                    <p className={`text-4xl mt-5`}>Let's chat.</p>
                    <p className={`text-4xl mt-5`}>Tell me about your project.</p>
                    <p className={`text-3xl mt-5`}>Leave a comment or message.</p>
                    <p className={`text-md mt-5`}>Contact me by sending a message.</p>
                    <p className={`text-md mt-10`}>
                         <span className={`text-3xl pl-[3rem]`}>📧</span> <span className={`text-lg`}>Mail me at <br/></span>
                         <strong className={`pl-[6rem]`}>nkundabagenzijeremy@gmail.com</strong>
                    </p>
               </motion.div>
               <motion.form className={`flex flex-col px-[5rem] gap-2 w-full text-white wierd-font-2`} onSubmit={handleSubmit} initial={{filter: "blur(120px)"}} animate={{filter: "blur(0px)"}} exit={{filter: "blur(120px)"}}>
                    <h3 className={`text-xl mb-[2rem]`}>Send me a message.</h3>
                    <div className={`flex flex-col relative`}>
                         <input type="text" className={`border rounded-lg bg-transparent outline-none py-2 indent-5 text-white font-light`} onChange={(e) => {
                              setFullName(e.target.value)
                              validateForm()
                         }} placeholder='Full name' value={fullName} required />
                         {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                    </div>
                    <div className={`flex flex-col relative my-[.7rem]`}>
                         <input type="email" className={`border rounded-lg bg-transparent outline-none py-2 indent-5 text-white font-light`} onChange={(e) => {
                              setAddress(e.target.value)
                              validateForm()
                         }} placeholder='Email Address' value={address} required />
                         {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                    </div>
                    <div className={`flex flex-col relative`}>
                         <input type="text" className={`border rounded-lg bg-transparent outline-none py-2 indent-5 text-white font-light`} onChange={(e) => {
                              setSubject(e.target.value)
                              validateForm();
                         }} placeholder='Subject' value={subject} required />
                         {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                    </div>
                    <div className={`flex flex-col relative mt-[.5rem]`}>
                         <label htmlFor="message">Say more about your message.</label>
                         <textarea className={`border rounded-lg bg-transparent outline-none py-2 px-[1rem] text-white font-light my-[.7rem] min-h-[7rem]`} onChange={(e) => {
                              setMessage(e.target.value)
                              validateForm()
                         }} placeholder='Message' value={message} required />
                         {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <div>
                         {loading ? 
                         <button className={`px-[2rem] py-[.7rem] bg-gray-700 rounded-lg flex gap-[1rem] items-center`} disabled>Sending <p className={`rounded-full w-[1rem] h-[1rem] border-t-2 border-b-2 animate-spin`}></p> </button> : 
                         <button className={`px-[2rem] py-[.7rem] bg-[#ccfc] rounded-lg hover:bg-[#cefe]`} type='submit'>Send Message</button>
                         }
                    </div>
               </motion.form>
          </motion.div>
          </>
     )
}

export default Contact
