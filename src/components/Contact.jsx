import React, { useEffect, useState } from 'react'

const serviceIdUrl = import.meta.env.VITE_APP_SERVICE_ID
const templateIdUrl = import.meta.env.VITE_APP_TEMPLATE_ID

const Contact = () => {
     const [fullName, setFullName] = useState('')
     const [address, setAddress] = useState('')
     const [subject, SetSubject] = useState('')
     const [message, setMessage] = useState('')
     const [loading, setLoading] = useState(false)
     const [responseR, setResponseR] = useState('')
     const [seeingR, setSeeingR] = useState(false)

     // const checkEmail = async(email) => {
     //      const response = await fetch(`https://api.email-checker.net/validator?email=${encodeURIComponent(email)}`)
     //      return await response.json()
     // }

     const handleSubmit = (e) => {
          e.preventDefault()
          setLoading(true)
          const serviceID = serviceIdUrl
          const templateID = templateIdUrl
          var params = {
               name: fullName,
               email: address,
               subject: subject,
               message: message
          }

          // checkEmail(address).then(resp => {
          //      console.log(resp)
          // }).catch(error => {
          //      console.log(error)
          // })

          emailjs.send(serviceID, templateID, params).then(res => {
               setFullName('')
               setAddress('')
               SetSubject('')
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
          }, 3000);
     }, [responseR])

     return (
          <>
          {seeingR && (
               <div className={`fixed top-[4rem] right-0 px-[2rem] py-[.7rem] bg-[#ccfc] text-gray-950 rounded-lg shadow shadow-gray-900`}>
                    <p className={`wierd-font-2 text-white`}>{responseR}</p>
               </div>
          )}
          <div className={`py-[7rem] px-[5rem] flex gap-[3rem] items-center justify-evenly`}>
               <div className={`text-white w-full pl-[5rem] wierd-font-2`}>
                    <p className={`text-4xl mt-5`}>Let's chat.</p>
                    <p className={`text-4xl mt-5`}>Tell me about your project.</p>
                    <p className={`text-3xl mt-5`}>Leave a comment or message.</p>
                    <p className={`text-md mt-5`}>Contact me by sending a message.</p>
                    <p className={`text-md mt-10`}>
                         <span className={`text-3xl pl-[3rem]`}>📧</span> <span className={`text-lg`}>Mail me at <br/></span>
                         <strong className={`pl-[6rem]`}>nkundabagenzijeremy@gmail.com</strong>
                    </p>
               </div>
               <form className={`flex flex-col px-[5rem] gap-2 w-full text-white wierd-font-2`} onSubmit={handleSubmit}>
                    <h3 className={`text-xl mb-[2rem]`}>Send me a message.</h3>
                    <div className={`flex flex-col relative`}>
                         <input type="text" required className={`border rounded-lg bg-transparent outline-none py-2 indent-5 text-white font-light`} placeholder='Full name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className={`flex flex-col relative my-[.7rem]`}>
                         <input type="email" required className={`border rounded-lg bg-transparent outline-none py-2 indent-5 text-white font-light`} placeholder='Email Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className={`flex flex-col relative`}>
                         <input type="text" required className={`border rounded-lg bg-transparent outline-none py-2 indent-5 text-white font-light`} placeholder='Subject' value={subject} onChange={(e) => SetSubject(e.target.value)} />
                    </div>
                    <div className={`flex flex-col relative mt-[.5rem]`}>
                         <label htmlFor="message">Say more about your message.</label>
                         <textarea value={message} required className={`border rounded-lg bg-transparent outline-none py-2 px-[1rem] text-white font-light my-[.7rem] min-h-[7rem]`} placeholder='Message' onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <div>
                         {loading ? 
                         <button className={`px-[2rem] py-[.7rem] bg-gray-700 rounded-lg flex gap-[1rem] items-center`} disabled>Sending <p className={`rounded-full w-[1rem] h-[1rem] border-t-2 border-b-2 animate-spin`}></p> </button> : 
                         <button className={`px-[2rem] py-[.7rem] bg-[#ccfc] rounded-lg`} type='submit'>Send Message</button>
                         }
                    </div>
               </form>
          </div>
          </>
     )
}

export default Contact
