import './App.css';
import NavBar from './components/navBar/NavBar';
import Saludo from './components/navBar/Saludo';
import Contador from './components/counter/Contador';
import ItemsListContainer from './components/items/ItemsListContainer';

function App() {

const valorInicial = 1 
let stock = 5


  return (
    <div className="App">
      <NavBar/>
      <Saludo name="shoesStore"/>
      <Contador valorInicial={valorInicial} stock={stock}/>
      <ItemsListContainer/>
    </div>
  );
}

export default App;