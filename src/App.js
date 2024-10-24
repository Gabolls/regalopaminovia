//import logo from './logo.svg';
import './App.css';
//import { Componente1 } from './components/Componente1';
//import { Componente2 } from './components/Componente2';
import { Componenteheader } from './components/Componenteheader';
import Compinicio from './components/Compinicio';
import Compfotos from './components/Compfotos';
import Compfondo from './components/Compfondo';
import Compmomentos from './components/Compmomentos';
import Sidebar from './components/Sidebar';





function App() {
  return (
    <div className="App">
      <Compfondo/>
       <Componenteheader />
       <Sidebar/>
      <header className="App-header">

       <Compinicio />

        <Compmomentos/>

       <Compfotos />
     
      </header>
      
    </div>
  );
}

export default App;
