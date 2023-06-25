import logo from './logo.svg';
import './App.css';


const App = () => {
  const name = "Meysam";
  const isNameShowing = true;
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {isNameShowing ? name : 'JANA'}!</p><p>Welcome to the React.
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        {isNameShowing ? (
          <>test</>
        ) : (
          <>
          <h1>Name doesn't showing</h1>
          <h2>Good Luck</h2>
          </>
        )}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
