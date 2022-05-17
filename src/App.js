import ItemListContainer from './components/items/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import ItemsDetailContainer from './components/items/ItemsDetailContainer';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import CartContextProvider from './components/context/CartContext';
import AppContextProvider from './components/context/AppContext';
import Cart from './components/Cart/Cart';
import HeroImg from './components/navBar/HeroImg';

function App() {

  return (
  <AppContextProvider>   
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
         <Routes>
          <Route path='/' element={<HeroImg/>}/>
          <Route path='/productos' element={<ItemListContainer/>} />
          <Route path='/productos/:itemId' element={<ItemsDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes> 
      </BrowserRouter>
    </CartContextProvider>
  </AppContextProvider> 
  );
}

export default App;