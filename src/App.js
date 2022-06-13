import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from './components/ItemDetail/ItemDetail';
function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
