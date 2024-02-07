import React from 'react'
import App from "../../assets/app.png"
function ContactPage() {
  return (
    <div className='w-full h-auto flex flex-col md:max-auto'>
      <div  className='Container bg-black font-serif '>
        <h1 className='text-white ml-9 text-4xl mt-5'>Contact US!</h1>
        
        <img src={App} className=''></img>
      </div>
    </div>
  )
}

export default ContactPage