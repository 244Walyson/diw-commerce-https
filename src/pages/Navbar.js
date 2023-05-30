import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [pesquisa, setPesquisa] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/search?query=' + pesquisa);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`header-fix ${isMenuOpen ? 'open' : ''}`}>
      <div className="header">
        <div className="logomenu">
        <div className="logo">
          <p>W</p>
        </div>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        </div>
        <label>
          <form onSubmit={handleSubmit} className="search-bar" value="serach">
            <input
              type="text"
              placeholder="search..."
              onChange={(e) => setPesquisa(e.target.value)}
            />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </label>
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <div className="navbar-items">
            <Link to={'/'}>Home</Link>
            <Link to={'/products'}>Produtos</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/help'}>Help</Link>
          </div>
        </nav>
        <div className="login-nav">
          <Link className="login">Sign in</Link>
          <Link className="login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
