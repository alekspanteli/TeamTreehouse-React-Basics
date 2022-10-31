import reactLogo from "./assets/react.svg";

const Header = () => {
  return (
    <header className="px-7 py-8 bg-[#8063FA] rounded-t-md flex items-center border-solid border-b-1 border-[#D4CAFF] text-white gap-5">
      <h1 className="grow font-normal text-2xl text-right tracking-wider">
        Scoreboard
      </h1>
      <span className="text-sm">Players: 1</span>
    </header>
  );
};

function App() {
  return (
    <div className="container mx-auto">
      <Header />
    </div>
  );
}

export default App;
