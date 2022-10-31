import reactLogo from "./assets/react.svg";

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
      <div className="flex justify-between items-center bg-white">
        <span className="text-2xl font-bold pl-7">{props.name}</span>
        <Counter {...props} />
      </div>
    </div>
  );
};

const Button = (props) => {
  return (
    <button className="text-slate-900 text-3xl p-5 bg-zinc-300 hover:bg-slate-300">
      {props.symbol}
    </button>
  );
};

const Counter = (props) => {
  return (
    <div className="flex gap-3 items-center">
      <Button symbol="-" />
      <span className="font-bold text-xl">{props.score}</span>
      <Button symbol="+" />
    </div>
  );
};

function App() {
  return (
    <div className="container mx-auto rounded-b-md border-solid border-b-4 border-[#D4CAFF]">
      <Header title="scoreboard" totalPlayers={2} />
      <main className="divide-y divide-slate-200">
        <Player name="Alex" score={40} />
        <Player name="Alex" score={40} />
        <Player name="Alex" score={40} />
      </main>
    </div>
  );
}

export default App;
