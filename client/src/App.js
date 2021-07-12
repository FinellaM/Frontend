import NavBar from './components/fgd-navbar';
import HomePage from './views/pages/home';
import Footer from './components/fgd-footer';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <HomePage />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default App;
