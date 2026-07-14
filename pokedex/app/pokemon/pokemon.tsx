export function Pokemon() {
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

     <div className="w-full flex justify-center mt-6 px-6">
        
     </div>

     <div className="h-34 m-10 bg-pink-200 flex flex-col items-center justify-center rounded-md shadow-md">
        <span className="text-3xl font-bold tracking-wider text-black">Alguns Modelos de Pokémons</span>
        <span className="text-center">Conheça alguns tipos e as suas características.</span>
     </div>

        <div className="flex flex-1 flex-row flex-wrap gap-4 p-6 justify-center">

            <div className="h-48 w-72 bg-yellow-300 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
                <span className="text-3xl font-bold tracking-wider text-black">Elétrico</span>
                <span className="text-center">Pokémons rápidos que usam ataques de eletricidade.</span>
                <button className="text-white rounded-3x2 bg-amber-500 px-4 py-1 rounded-md text-xs font-bold uppercase">
                    Ex: Pikachu
                </button>
            </div>


           <div className="h-48 w-72 bg-green-500 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
                <span className="text-3xl font-bold tracking-wider text-black">Planta</span>
                <span className="text-center">Usam energia da natureza, folhas, vinhas e sementes.</span>
                <button className="text-white bg-green-700 px-4 py-1 rounded-md text-xs font-bold uppercase">
                 Ex: Bulbasaur
                </button>
            </div>

            <div className="h-48 w-72 bg-red-300 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
                <span className="text-3xl font-bold tracking-wider text-black">Fogo</span>
                <span className="text-center">Possuem ataques quentes, intensos e explosivos.</span>
                <button className="text-white bg-red-600 px-4 py-1 rounded-md text-xs font-bold uppercase">
                 ex: Charmander
                </button>
            </div>

            <div className="h-48 w-72 bg-blue-400 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
                <span className="text-3xl font-bold tracking-wider text-black">Água</span>
                <span className="text-center">São versáteis e usam jatos de água em batalha.</span>
                <button className="text-white bg-blue-500 px-4 py-1 rounded-md text-xs font-bold uppercase">
                    Ex: Squirtle
                </button>
            </div>

            <div className="h-48 w-72 bg-blue-300 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
                <span className="text-3xl font-bold tracking-wider text-black">Gelo</span>
                <span className="text-center">Usam frio, neve e congelamento contra seus oponentes</span>
                <button className="text-white bg-blue-400 px-4 py-1 rounded-md text-xs font-bold uppercase">
                    Ex: Lapras
                </button>
            </div>

             <div className="h-48 w-72 bg-stone-400 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
                <span className="text-3xl font-bold tracking-wider text-black">Pedra</span>
                <span className="text-center">São resistentes e possuem grande força defensiva</span>
                <button className="text-white bg-amber-900 px-4 py-1 rounded-md text-xs font-bold uppercase">
                    Ex: Onix
                </button>
            </div>

             <div className="h-48 w-72 bg-pink-200 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
                <span className="text-3xl font-bold tracking-wider text-black">Psíquico</span>
                <span className="text-center">Usam poderes mentais, telecinese e energia psíquica</span>
                <button className="text-white bg-pink-400 px-4 py-1 rounded-md text-xs font-bold uppercase">
                    Ex: Mewtwo
                </button>
            </div>

             <div className="h-48 w-72 bg-violet-300 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
                <span className="text-3xl font-bold tracking-wider text-black">Fantasma</span>
                <span className="text-center">Misterioso, assustador e difícies de atingir</span>
                <button className="text-white bg-violet-600 px-4 py-1 rounded-md text-xs font-bold uppercase">
                    Ex: Gengar
                </button>
            </div>

             <div className="h-48 w-72 bg-orange-200 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
                <span className="text-3xl font-bold tracking-wider text-black">Normal</span>
                <span className="text-center">Famoso por sua genética instável, permitindo que ele evolua para 8 formas diferentes.</span>
                <button className="text-white bg-yellow-800 px-4 py-1 rounded-md text-xs font-bold uppercase">
                    Ex: Eevee
                </button>
            </div>

            <div className="h-48 w-72 bg-green-200 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
                <span className="text-3xl font-bold tracking-wider text-black">Fada</span>
                <span className="text-center">Tem a capacidade de prever o futuro e protege seu treinador com a própria vida.</span>
                <button className="text-white bg-emerald-300 px-4 py-1 rounded-md text-xs font-bold uppercase">
                    Ex: Gardevoir
                </button>
            </div>

            <div className="h-48 w-72 bg-gray-300 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
                <span className="text-3xl font-bold tracking-wider text-black">Aço</span>
                <span className="text-center">Possuem a maior defesa física do jogo, sendo resistentes a quase todos os outros tipos de ataque</span>
                <button className="text-white bg-gray-600 px-4 py-1 rounded-md text-xs font-bold uppercase">
                    Ex: Steelix 
                </button>
            </div>

             <div className="h-48 w-72 bg-blue-300 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
                <span className="text-3xl font-bold tracking-wider text-black">Inseto</span>
                <span className="text-center">Evoluem rápido no início e são ótimos para causar condições como sono ou veneno.</span>
                <button className="text-white bg-violet-400 px-4 py-1 rounded-md text-xs font-bold uppercase">
                    Ex: Butterfree 
                </button>
            </div>

        </div>

        <footer className="bg-blue-950 p-4">
        <p className="text-white text-center font-bold">Pokédex, React + Tailwind</p>
      </footer>

    </main> 
  );
}