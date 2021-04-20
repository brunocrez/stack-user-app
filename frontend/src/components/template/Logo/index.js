import './styles.css';

import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.png';

const Logo = () => (
  <aside className="logo">
    <Link to="/">
      <img src={logo} alt="Logo" />
    </Link>
  </aside>
);

export default Logo;