
export function Welcome() {

//border 2px solid black, black

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <h1>Oi Bryan!</h1>
      <button className="border-2 border-red-600 bg-red-600 hover:bg-red-400 bg-red-400 p-2" onClick={() => console.log("oi")}>aperte para falar Oi</button>
    </main>
  );
}

