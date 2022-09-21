import React from 'react'
import { MyCardExperience } from "../components/MyCardExperience";
import { experiencia } from "../database/experiencia";

export const ExperienciaPage = () => {
  return (
    <>   
    <div className='w-full mx-auto'>
      <div className='titulo-text-estudios  '>
        <h1 className='font-bold titulo-perfil text-white pb-3 text-center mx-auto underline decoration-[#F24452]'>Experiencia</h1>
      </div>
      <div className=" px-12 items-center justify-between container flex flex-wrap mx-auto">
      {experiencia.map((experiencia) => (
        <MyCardExperience
          key={experiencia.id}
          url={experiencia.url}
          titulo={experiencia.titulo}
          descripcion={experiencia.descripcion}
        />
        ))}
      </div>

    </div>

  </> 
  )
}
