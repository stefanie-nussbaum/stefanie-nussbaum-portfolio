// import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
