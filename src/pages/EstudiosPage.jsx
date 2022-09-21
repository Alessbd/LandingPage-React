import React from 'react'
import { MyCardStudy } from "../components/MyCardStudy";
import { estudios } from "../database/estudios";

export const EstudiosPage = () => {
  return (

  <>   
    <div className='w-full container mx-auto'>
      <div className='titulo-text-estudios  '>
        <h1 className='font-bold titulo-perfil text-white pb-3 text-center mx-auto underline decoration-[#F24452]'>Estudios</h1>
      </div>
      <div className=" px-1 items-center justify-between container flex flex-wrap  mx-auto">
      {estudios.map((estudios) => (
        <MyCardStudy
          key={estudios.id}
          fecha={estudios.fecha}
          descripcion={estudios.descripcion}
        />
        ))}
      </div>

    </div>

  </> 
  )
}
