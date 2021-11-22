import logo from './logo.svg';
import './App.css';
import Modal from "./components/Modal";

function App() {

    const handleClick = () => {
        const modal = new window.bootstrap.Modal(document.getElementById('loading'));

        modal.show();

        setTimeout(() => {
            modal.hide();
        }, 10000);
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <button className='btn btn-success' onClick={handleClick}>Show Modal</button>
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
      <Modal/>
    </div>
  );
}

export default App;
