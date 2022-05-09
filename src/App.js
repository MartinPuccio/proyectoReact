import ItemListContainer from './components/items/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import Title from './components/navBar/Title';
import ItemsDetailContainer from './components/items/ItemsDetailContainer';
import {BrowserRouter , Routes, Route} from "react-router-dom"


function App() {

  return (
      <BrowserRouter>
        <NavBar/>
         <Routes>
          <Route path='/title' element={<Title name="clothingStore"/>}/>
          <Route path='/productos' element={<ItemListContainer/>} />
          <Route path='/productos/:itemId' element={<ItemsDetailContainer/>}/>
        </Routes> 
      </BrowserRouter>
  );
}

export default App;