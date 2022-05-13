import './App.css';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import NavBar from './componets/NavBar/NavBar'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <br/><br/><br/><br/>
      <ItemListContainer title='Titulo para el contenedor' />
    </div>
  );
}

export default App;
