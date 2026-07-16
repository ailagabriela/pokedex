export function Pokemon() {
    const pokemons = [
        {
            id: 1,
            nome: "Pikachu",
            elemento: "Raio",
            desc: "Amarelo",
        },
        {
            id: 2,
            nome: "Metapod",
            elemento: "Inseto",
            desc: "Casulo",
        },
        {
            id: 3,
            nome: "Blastoise",
            elemento: "Water",
            desc: "Gordo",
        },
        {
            id: 4,
            nome: "NovoDois",
            elemento: "Lendario",
            desc: "Pantera cor de rosa",
        },
    ];

  return (
    <main className="min-h-screen flex flex-col bg-linear-to-br text-black from-fuchsia-300 via-red-100 to-blue-100">

        <h1>MINHA LISTA DE POKÉMONS</h1>
        {pokemons.map((pokemon) => (
            <div className="bg-violet-400">
                <h1 className="font-bold">{pokemon.nome}</h1>
                <h4 className=" text-white">Elemento: {pokemon.elemento}</h4>
                <h4 className="text-white">Descrição: {pokemon.desc}</h4>
            </div>
        ))}
    </main> 
  );
}