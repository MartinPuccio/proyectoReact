import ItemListContainer from './components/items/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import Title from './components/navBar/Title';
import ItemsDetailContainer from './components/items/ItemsDetailContainer';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import CartContextProvider from './components/context/CartContext';
import AppContextProvider from './components/context/AppContext';


function App() {

  return (
  <AppContextProvider>   
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
         <Routes>
          <Route path='/title' element={<Title name="clothingStore"/>}/>
          <Route path='/productos' element={<ItemListContainer/>} />
          <Route path='/productos/:itemId' element={<ItemsDetailContainer/>}/>
        </Routes> 
      </BrowserRouter>
    </CartContextProvider>
  </AppContextProvider> 
  );
}

export default App;