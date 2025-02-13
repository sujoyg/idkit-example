import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div
          id="idkit-container"
          style={{
            width: "300px",
            height: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #000",
            fontSize: "12px",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        ></div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
