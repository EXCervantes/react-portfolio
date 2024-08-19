import './App.css'
import Navbar from './components/Navigation';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div>
    <nav>
      <Navbar/>
    </nav>
      <div className="portfolio-page">
        <Portfolio/>
    </div>
    </div>
  );
}

export default App
