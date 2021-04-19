import './styles.css';

import logo from '../../../assets/images/logo.png';

const Logo = () => (
  <aside className="logo">
    <a href="/">
      <img src={logo} alt="Logo" />
    </a>
  </aside>
);

export default Logo;