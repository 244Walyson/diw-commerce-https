import {Link} from 'react-router-dom'
import "./Navbar.css"
import 'boxicons'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [pesquisa , setPesquisa] = useState()


  console.log(pesquisa)
  const handleSubmit = (e) =>{
    e.preventDefault()

    navigate("/search?query=" + pesquisa)
  }


  return (
    <div className='header-fix'>
    <div className='header'>
        <div className="logo"><p>W</p></div>
    <label>
    <form onSubmit={handleSubmit} className="search-bar" value="serach" >
      <input type='text' placeholder='search. . .' onChange={(e)=>setPesquisa(e.target.value)}/>
      <button type='submit'><box-icon name="search"></box-icon></button>
    </form>
    </label>
    <nav className="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Produtos</Link>
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