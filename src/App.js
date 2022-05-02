import './App.css';
import NavBar from './components/navBar/NavBar';
import Saludo from './components/navBar/Saludo';
import Contador from './components/counter/Contador';
import ItemsDetailContainer from './components/items/ItemsDetailContainer';

function App() {

const valorInicial = 1 
let stock = 5


  return (
    <div className="App">
      <NavBar/>
      <Saludo name="shoesStore"/>
      <Contador valorInicial={valorInicial} stock={stock}/>
      <ItemsDetailContainer />
    </div>
  );
}

export default App;