import ItemListContainer from './components/items/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import Title from './components/navBar/Title';
//import Contador from './components/counter/Contador';
import ItemsDetailContainer from './components/items/ItemsDetailContainer';
import {BrowserRouter , Routes, Route} from "react-router-dom"

function App() {

const valorInicial = 1 
let stock = 5


  return (
      <BrowserRouter>
        <NavBar/>
         <Routes>
          <Route path='/title' element={<Title name="clothingStore"/>}/>
          <Route path='/productos' element={<ItemListContainer/>} />
          <Route path='/productos/:itemId' element={<ItemsDetailContainer/>}/>
        </Routes>
        
        {/* <Contador valorInicial={valorInicial} stock={stock}/> */}
      
      </BrowserRouter>
  );
}

export default App;