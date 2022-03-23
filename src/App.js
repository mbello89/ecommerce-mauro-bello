import './App.css';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemList/>
      </header>
    </div>
  );
}

export default App;
