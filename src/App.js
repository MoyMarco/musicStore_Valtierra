import './App.css';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import NavBar from './componets/NavBar/NavBar'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <br/><br/><br/><br/>
      {/* <ItemListContainer title='Álbumes' /> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
