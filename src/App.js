import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Rodape from './pages/Rodape';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Help from './pages/Help';
import About from './pages/About';
import SearchPage from './pages/SearchPage';
import SearchByCategory from './pages/SearchByCategory';
import ProductsByCategory from './pages/ProductsByCategory';
import EspecificacaoProduto from './pages/EspecificacaoProduto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path='*' element={<NotFound/>}/>
        <Route path='/help' element={<Help/>} />
        <Route path='/about' element={<About/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/products/category/:category" element={<SearchByCategory />} />
        <Route path='' element={<ProductsByCategory/>}/>
        <Route path='/products/:id' element={<EspecificacaoProduto/>}/>
      </Routes>
      <Rodape/>
      </BrowserRouter>
    </div>
  );
}

export default App;
