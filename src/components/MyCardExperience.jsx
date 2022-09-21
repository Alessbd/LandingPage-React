export const MyCardExperience = ({ url, titulo, descripcion}) => {
    return (
      <div className="m-6 bg-white px-10 py-10 rounded-2xl shadow-2xl flex-wrap mx-auto ">
        <img src={url} className="rounded-2xl mx-auto mb-4 shadow-2xl" />
        <h1 className="font-bold text-2xl mb-4">{titulo}</h1>
        <h1 className="mb-6">{descripcion}</h1>
      </div>
    );
  };