import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './routes/HomePage';

function App() {
  return (
    <div className="App">
     <HomePage />
    </div>
  );
}

export default App;
