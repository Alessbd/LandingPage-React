import React from 'react'
import { Link } from 'react-scroll';
import { FaGithub } from "react-icons/fa"


export const InicioPage = () => {
  return (
    <div className=" px-12 items-center justify-between pt-12 mt-12 container grid md:grid-flow-col mx-auto">
      <div className='text-white text-left w-full  xs:w-2/2 ' >
        <h1 className='font-bold texto-saludo-inicio'>Hola 👋 soy Alessandro </h1>
        <h5 className=' texto-saludo2-inicio pb-6'>Me encantaria trabajar contigo, por ello quiero que conozcas más de mi</h5>
          <Link smooth spy to="perfil">
            <button href="#perfil" target="_blank" className=" btn-perfil-inicio text-white m-2 px-6 py-1  rounded-full mr-4 ">
              Perfil
            </button>
          </Link>
            <button className=" btn-github-inicio text-white m-2 px-4 py-1 rounded-full ml-2 ">
            <a href="https://github.com/Alessbd" className='grid grid-flow-col ml-2' target="_blank"><FaGithub className='github-icon'/>GitHub</a>
            </button>
      </div>
      <div className='flex md:justify-center mr-12 w-full  '>
        <img src="/src/assets/aless-foto.png" alt="" className='w-5/12 md:w-9/12 mt-5' />
      </div>
    </div>
  );
};

export default InicioPage;
