import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Rodape from './pages/Rodape';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Help from './pages/Help';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/produtos" element={<Products/>} />
        <Route path='*' element={<NotFound/>}/>
        <Route path='/help' element={<Help/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Rodape/>
      </BrowserRouter>
    </div>
  );
}

export default App;
