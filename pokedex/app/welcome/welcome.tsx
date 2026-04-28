export function Welcome() {
  return (
    <main className="min-h-screen flex flex-col bg-pink-100">
      
      <nav className="bg-red-600 p-7 flex items-center justify-between shadow-md">
        <h1 className="text-white text-2xl font-bold">Pokédex</h1>
        <div className="flex gap-4">
          <button className="text-white hover:underline">Home</button>
          <button className="text-white hover:underline">Pokémons</button>
          <button className="text-white hover:underline">Tipos</button>
        </div>
      </nav>

      <div className="flex justify-center p-10 gap-2">
        <div className="w-full max-w-2xl relative">
          <input 
            type="text"
            placeholder="Buscar Pokémon..." 
            className="w-full p-4 px-6 outline-none rounded-md shadow-sm"
          />
        </div>
        <button className="text-white bg-red-500 px-6 py-4 rounded-md font-bold hover:bg-red-600 transition-colors">
          Buscar
        </button>
      </div>

      <div className="flex gap-5 p-4 justify-center flex-wrap">
        
        <div className="h-48 w-72 bg-yellow-300 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <span className="text-3xl font-bold tracking-wider text-black">Pikachu</span>
          <button className="text-white rounded-3x2 bg-amber-500 px-4 py-1 rounded-md text-xs font-bold uppercase">
            Elétrico
          </button>
        </div>

        <div className="h-48 w-72 bg-green-500 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <span className="text-3xl font-bold tracking-wider text-black">Bulbasaur</span>
          <button className="text-white bg-green-700 px-4 py-1 rounded-md text-xs font-bold uppercase">
            Planta
          </button>
        </div>

        <div className="h-48 w-72 bg-red-400 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <span className="text-3xl font-bold tracking-wider text-black">Charmander</span>
          <button className="text-white bg-red-600 px-4 py-1 rounded-md text-xs font-bold uppercase">
            Fogo
          </button>
        </div>

        <div className="h-48 w-72 bg-blue-300 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <span className="text-3xl font-bold tracking-wider text-black">Squirtle</span>
          <button className="text-white bg-blue-500 px-4 py-1 rounded-md text-xs font-bold uppercase">
            Água
          </button>
        </div>

      </div>

      <div className="grow"></div>

      <footer className="bg-blue-950 p-4">
        <p className="text-white text-center font-bold">Pokédex, React + Tailwind</p>
      </footer>
    </main> 
  );
}