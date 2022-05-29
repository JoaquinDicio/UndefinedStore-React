import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <>
    <NavBar pages={['Inicio','Sobre nosotros','Productos']}/>
    <ItemListContainer greetings={'Bienvenido a UndefinedStore'}subtitle={'Compra todo lo que necesitas, en un solo lugar'}/>
    </>
  );
}

export default App;
