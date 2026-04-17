export function Welcome() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-pink-100 ">
      
      <nav className="bg-red-600 p-7 flex items-center justify-between shadow-md">
        <h1 className="text-white text-2xl font-bold">
          Pokédex
        </h1>

        <div className="flex gap-4">
          <button className="text-white hover:underline">Home</button>
          <button className="text-white hover:underline">Pokémons</button>
          <button className="text-white hover:underline">Tipos</button>
        </div>

      </nav>

      <div className="flex justify-center p-10">
          <div className="w-full relative">
            <input 
              placeholder="Buscar Pokémon..." 
              className="w-full p-4 px-6  outline-none rounded-md shadow-sm"/>
          </div>
          <button className="text-white bg-red-500 px-6 py-4 rounded-md">
            Buscar
          </button>
        </div>

      <div className="flex gap-5 p-2 justify-center">

      <div className="h-45 w-70 aspect-square bg-yellow-300 text-black text-xs flex items-center justify-center rounded-md">
       <span className="text-2xl font-bold tracking-wider"> Pikachu </span>
       <button className="text-white bg-amber-500 rounded-md">
        Elétrico
       </button>
    </div>

    <div className="h-45 w-70 aspect-square bg-green-500 text-black text-xs flex items-center justify-center rounded-md">
        <span className="text-2xl font-bold tracking-wider"> Bulbasaur </span>
        <button className="text-white bg-green-700 rounded-md">
        Planta
       </button>
    </div>

    <div className="h-45 w-70 aspect-square bg-red-400 text-black text-xs flex items-center justify-center rounded-md">
        <span className="text-2xl font-bold tracking-wider"> Charmander </span>
        <button className="text-white bg-red-600 rounded-md">
        Fogo
       </button>
    </div>

    <div className="h-45 w-70 aspect-square bg-blue-300 text-black text-xs flex items-center justify-center rounded-md">
      <span className="text-2xl font-bold tracking-wider"> Squirtle </span>
    </div>
      </div>
      

      <div className="grow">

      </div>

      <footer className="bg-blue-950 p-4">
        <p className="text-white text-center font-bold">Pokédex, React + Tailwind</p>
      </footer>
    </main>
  );
}
