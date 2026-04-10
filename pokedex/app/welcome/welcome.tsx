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
      
      <div className="text-white bg-yellow-300">
        Pikachu
      </div>

      <div className="text-white bg-green-500">
          Bulbasaur
      </div>

      <div className="text-white bg-red-400">
        Charmander
      </div>

      <div className="text-white bg-blue-300">
        Squirtle
      </div>

      <div className="flex-grow">

      </div>

      <footer className="bg-blue-950 p-4">
        <p className="text-white text-center font-bold">Pokédex, React + Tailwind</p>
      </footer>
    </main>
  );
}
