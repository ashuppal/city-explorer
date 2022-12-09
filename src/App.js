
import React from 'react';
import Main from './component/Main';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import About from './component/About';
import Search from './component/Search';
import './style.css'


function App() {
  return (

    <BrowserRouter>
    <div className="App">
    <header>
      <h1>Welcome to city explorer</h1>
      <nav>
        <ul>
        <li>
        <Link to="/" style={{color:'white',fontSize: '40px'}}>Home 
        </Link>
        </li>
        
          <li>
            <Link to="/about" style={{color:'white', fontSize: '40px'}}>About</Link>
          </li>
          <li>
            <Link to="/search" style={{color:'white', fontSize: '40px'}}> Search</Link>
          </li>
        </ul>
      </nav>
    </header>
      <Routes>
        <Route index element ={<Main />} />
        <Route path="about" element = {<About />} />
        <Route path="search" element = {<Search />} />
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
