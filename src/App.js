import './App.css';
import NavBar from './components/home/NavBar';
import Saludo from './components/home/Saludo';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Saludo name="shoesStore"/>
    </div>
  );
}

export default App;