import React from 'react'

export const PerfilPage = () => {
  return (
    <div className='px-12 items-center justify-between container grid md:grid-flow-col mx-auto'>
      <div className='perfil-text '>
        <h1 className='font-bold titulo-perfil text-white pb-3'>Desarrollador FrontEnd con React JS </h1>
        <h5 className=' descripcion-perfil pb-6 text-white text-justify'>Disfruto de poner a prueba mis habilidades y 
        conocimientos con la creación de aplicaciones y páginas web. Siempre dispuesto a mejorar 
        cada día para dar lo mejor de mí. Disfruto de poner a prueba mis habilidades y conocimientos 
        con la creación de aplicaciones y páginas web. Siempre dispuesto a mejorar cada día para 
        dar lo mejor de mi.</h5>
      </div>
      <div className=" flex md:grid-flow-col mr-8 justify-center">
        <img src="/src/assets/1.svg" alt="Js" className=' xl:w-10/12' />
        <img src="/src/assets/2.svg" alt="Html" className='xl:w-10/12 mb-16 pb-16'/>
        <img src="/src/assets/3.svg" alt="Css" className=' xl:w-10/12'/>
      </div>

    </div>
  )
}
