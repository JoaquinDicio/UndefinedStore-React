import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <>
    <NavBar pages={['Inicio','Sobre nosotros','Productos']}/>
    <ItemListContainer/>
    <ItemDetailContainer itemID={"2"}/>
    </>
  );
}

export default App;
