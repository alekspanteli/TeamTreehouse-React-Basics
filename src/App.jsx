import reactLogo from "./assets/react.svg";

const players = [
  {
    name: "Guil",
    score: 50,
  },
  {
    name: "Treasure",
    score: 85,
  },
  {
    name: "Ashley",
    score: 95,
  },
  {
    name: "James",
    score: 80,
  },
];

const Header = (prosp) => {
  return (
    <header className="px-7 py-8 bg-[#8063FA] rounded-t-md flex items-center border-solid border-b-1 border-[#D4CAFF] text-white gap-5">
      <h1 className="grow font-normal text-2xl text-right tracking-wider">
        {prosp.title}
      </h1>
      <span className="text-sm font-semibold">
        Players: {prosp.totalPlayers}
      </span>
    </header>
  );
};

const Player = (props) => {
  return (
    <div>
      {props.initialPlayers.map((player) => (
        <div className="flex justify-between items-center bg-white">
          <span className="text-2xl font-bold pl-7">{player.name}</span>
          <Counter score={player.score} />
        </div>
      ))}
    </div>
  );
};

function handleClick(message) {
  alert(message);
}

const Button = (props) => {
  return (
    <button
      onClick={() => handleClick(props.message)}
      className="text-slate-900 text-3xl p-5 bg-zinc-300 hover:bg-slate-300"
    >
      {props.symbol}
    </button>
  );
};

const Counter = (props) => {
  return (
    <div className="flex gap-3 items-center">
      <Button symbol="-" message="Minus!!!" />
      <span className="font-bold text-xl">{props.score}</span>
      <Button symbol="+" message="Plus!!!" />
    </div>
  );
};

function App() {
  return (
    <div className="container mx-auto rounded-b-md border-solid border-b-4 border-[#D4CAFF]">
      <Header title="scoreboard" totalPlayers={2} />
      <main className="divide-y divide-slate-200">
        <Player initialPlayers={players} />
      </main>
    </div>
  );
}

export default App;
