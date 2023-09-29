import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import MainRoute from './component/MainRoute';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
     <Navbar />
     <MainRoute />

    </div>
  );
}

export default App;
