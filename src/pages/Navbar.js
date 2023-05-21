import {Link} from 'react-router-dom'
import "./Navbar.css"
import 'boxicons'

const Navbar = () => {
  return (
    <div className='header-fix'>
    <div className='header'>
        <div className="logo"><p>W</p></div>
        <form className="search-bar">
      <input type='text' values="search"/>
      <button><box-icon name="search"/></button>
    </form>
    <nav className="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/produtos"}>Produtos</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/help"}>Help</Link>
    </nav>
    <div className="login-nav">
    <Link className='login'>Sign in</Link>
        <Link className='login'>log in</Link>
    </div>
    </div>
    
    </div>
  )
}

export default Navbar