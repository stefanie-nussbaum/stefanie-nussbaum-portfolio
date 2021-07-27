import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Route>
        <Navbar />
      </Route>
      <Route>
        <Main />
      </Route>
      <Route>
        <Footer />
      </Route>
    </div>
  );
}

export default App;
