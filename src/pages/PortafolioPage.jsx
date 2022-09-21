import React from 'react'
import { MyCard } from "../components/MyCard";
import { proyectos } from "../database/proyectos";

export const PortafolioPage = () => {
  return (
    
  <>

    <div className='w-full container mx-auto '>
      <div className='titulo-text-estudios '>
        <h1 className='font-bold titulo-perfil text-white pb-3 text-center mx-auto underline decoration-[#F24452]'>Portafolio</h1>
      </div>
      <div className=" px-1 justify-between container flex flex-wrap  mx-auto">
        {proyectos.map((proyecto) => (
          <MyCard
            key={proyecto.id}
            url={proyecto.url}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            url_preview={proyecto.url_preview}
            url_github={proyecto.url_github}
          />
        ))}
      </div> 
    </div>  
  </>
  )
}
