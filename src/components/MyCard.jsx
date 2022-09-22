import { FaGithub } from "react-icons/fa"

export const MyCard = ({ url, titulo, descripcion, url_preview, url_github }) => {
  return (
    <div className="m-6 bg-white px-10 py-10 rounded-2xl shadow-2xl w-full sm:w-1/3 md:w-1/3 ">
      <img src={url} className="rounded-2xl mx-auto mb-4 shadow-2xl " />
      <h1 className="font-bold text-2xl mb-4">{titulo}</h1>
      <h1 className="mb-6">{descripcion}</h1>
      <button target="_blank" className=" m-2 text-white px-6 py-2 rounded-full btn-perfil-inicio" >
        <a href={url_preview} className='grid grid-flow-col ml-2' target="_blank">Vista Previa</a>
      </button>
      <button target="_blank" className=" text-white m-2 px-6 py-2 rounded-full btn-github-inicio">
        <a href={url_github} className='grid grid-flow-col ml-2' target="_blank"><FaGithub className='github-icon'/>GitHub</a>
      </button>
    </div>
  );
};
