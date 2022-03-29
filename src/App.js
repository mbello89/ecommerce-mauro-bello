import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ItemCategories from './components/ItemCategories';
import Contacto from './components/Contacto/Contacto'
import Nosotras from './components/Nosotras/Nosotras'
import Navbar from './components/Navbar/Navbar';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">

      <BrowserRouter>

          <Navbar/>

          <Routes>
            <Route path='/' element={ <ItemCategories/> }/>
            <Route path='/Contacto' element={ <Contacto/> }/>
            <Route path='/Nosotras' element={ <Nosotras/> }/>

            <Route path='*' element={ <Navigate to='/'/> }/>
          </Routes>

      </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
