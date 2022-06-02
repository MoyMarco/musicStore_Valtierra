import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import NavBar from './componets/NavBar/NavBar'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <br/><br/><br/><br/>
        <Routes>
          <Route path='/' element={<ItemListContainer title='Todos los Álbumes' />}/>
          <Route path='/category/:artist' element={<ItemListContainer title='Álbumes' />}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
