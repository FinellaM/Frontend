import './App.css';
import NavBar from './components/fgd-navbar';
import HomePage from './views/pages/home';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <HomePage />
        <br />
      </div>
    </div>
  );
}

export default App;
