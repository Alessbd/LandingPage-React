import React from 'react'
import { FaWhatsapp, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa"

export const ContactoPage = () => {
  return (
    <>   
    <div className='w-full container mx-auto mb-4'>
      <div className='titulo-text-estudios  '>
        <h1 className='font-bold titulo-perfil text-white pb-3 text-center mx-auto underline decoration-[#F24452]'>Contacto</h1>
      </div>
      <div className=" px-1 items-center justify-center container flex flex-wrap  mx-auto">
        <button className=" text-white m-3 px-6 py-2 rounded-full btn-github-inicio">
          <a href="https://github.com/Alessbd" className='grid grid-flow-col ml-2' target="_blank"><FaGithub className='github-icon'/>GitHub</a>
        </button>
        <button className=" text-white m-3 px-6 py-2 rounded-full btn-facebook">
          <a href="https://www.facebook.com/alessandro.b.datica" className='grid grid-flow-col ml-2' target="_blank"><FaFacebook className='github-icon'/>Facebook</a>
        </button>
        <button className=" text-white m-3  px-6 py-2 rounded-full btn-instagram">
          <a href="https://www.instagram.com/alessandro_bonive/" className='grid grid-flow-col ml-2' target="_blank"><FaInstagram className='github-icon'/>Instagram</a>
        </button>
        <button className=" text-white m-3 px-6 py-2 rounded-full btn-whatsapp">
          <a href="https://wa.me/5804247242198?text=Hola Alessandro" className='grid grid-flow-col ml-2' target="_blank"><FaWhatsapp className='github-icon'/>Whatsapp</a>
        </button>
      </div>

    </div>

  </> 
  )
}
