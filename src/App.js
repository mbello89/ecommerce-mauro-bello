import './App.css';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';


function App() {

  const tittle = 'Lista de Productos'
  const counter = "Item Counter"
  

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemList greeting="Bienvenido!" tittle={tittle} counter={counter}/>
      </header>
    </div>
  );
}

export default App;
