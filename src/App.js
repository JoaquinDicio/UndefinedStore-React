import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <NavBar pages={['Inicio','Sobre nosotros','Productos']}/>
    <ItemListContainer/>
    </>
  );
}

export default App;
