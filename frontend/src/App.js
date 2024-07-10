import './App.css';
import './components/ResponsiveAppBar.js';
import ResponsiveAppBar from './components/ResponsiveAppBar.js';
import AboutUs from './pages/AboutUs.js';
import Home from './pages/Home.js';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Home/>
      <AboutUs/>
      
    </div>
  );
}

export default App;
