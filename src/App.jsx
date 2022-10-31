import reactLogo from "./assets/react.svg";

function Header() {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span>Players</span>
    </header>
  );
}

function App() {
  return (
    <div className="container mx-auto">
      <Header />
    </div>
  );
}

export default App;
