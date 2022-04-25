import './App.css';
import NavBar from './components/navBar/NavBar';
import Saludo from './components/navBar/Saludo';
import Contador from './components/counter/Contador';

function App() {

const valorInicial = 1 
let stock = 5


  return (
    <div className="App">
      <NavBar/>
      <Saludo name="shoesStore"/>
      <Contador valorInicial={valorInicial} stock={stock}/>
    </div>
  );
}

export default App;