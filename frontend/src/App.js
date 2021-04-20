import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Logo from './components/template/Logo';
import Nav from './components/template/Nav';
import Footer from './components/template/Footer';
import Routes from './routes';

const App = () => (
  <Router>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </Router>
)

export default App;