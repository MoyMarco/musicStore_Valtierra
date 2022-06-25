import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import NavBar from './componets/NavBar/NavBar'
import NotFound from './pages/NotFound';
import { CartProvider } from './contexts/CartContext';
import Cart from './componets/Cart';
import Footer from './componets/Footer';


function App() {
  return (
    <div className='App'>
      <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <br/><br/><br/><br/>
        <Routes>
          <Route path='/' element={<ItemListContainer title='Todos los Álbumes' />}/>
          <Route path='/category/:artist' element={<ItemListContainer title='Álbumes' />}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
