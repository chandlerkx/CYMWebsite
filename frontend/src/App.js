import logo from './logo.svg';
import './App.css';
import './components/ResponsiveAppBar.js';
import ResponsiveAppBar from './components/ResponsiveAppBar.js';
import Home from './pages/Home.js';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Home/>
      
    </div>
  );
}

export default App;
