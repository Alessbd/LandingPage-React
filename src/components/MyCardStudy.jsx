export const MyCardStudy = ({ fecha, descripcion}) => {
    return (
      <div className="m-6 bg-white px-10 py-3 rounded-2xl shadow-2xl flex items-center w-full sm:w-1/3 md:w-1/3 justify-center">
        <h1 className="font-extrabold text-2xl mb-4 justify-center fecha-estudios-color">{fecha}</h1>
        <h1 className="mb-6 ml-4 mt-4 font-bold">{descripcion}</h1>
      </div>
    );
  };