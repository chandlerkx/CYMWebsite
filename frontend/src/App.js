import './App.css';
import './components/ResponsiveAppBar.js';
import ResponsiveAppBar from './components/ResponsiveAppBar.js';
import AboutUs from './pages/AboutUs.js';
import Home from './pages/Home.js';
import About from './pages/AboutUs.js';
import Events from './pages/Events.js';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="events">
        <Events />
      </div>

      <Footer />
    </div>
  );
}

export default App;
