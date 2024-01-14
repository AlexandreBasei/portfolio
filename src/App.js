import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Name from './Name';
import './css/App.css';
import Topfood from './Topfood';
import Game from './Game';

function App() {
  return (
    <div className="App">
    <Name />
    <Topfood />
    <Game />
    <Footer />
    </div>
  );
}

export default App;
