import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;

new Promise((result, reject) => {
  setTimeout(() => result('done'));
})
.finally(() => console.log('final'))
.then(result => console.log(result + 1))
.then(result => console.log(result + 2))
.catch(error => console.log(error));