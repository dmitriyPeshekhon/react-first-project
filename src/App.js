import logo from "./logo.svg";
import "./App.css";

export const App = () => {
  // Императивный, тут мы описываем как будет работать функция App
  return (
    <div className="App">
      <header className="App-header">
        {/* Императивный, тут мы описываем как будет выводиться лого */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h5>{new Date().getFullYear()}</h5>{" "}
        {/* Императивный, тут мы описываем как будет работать вывод текущего года */}
      </header>
    </div>
  );
};
