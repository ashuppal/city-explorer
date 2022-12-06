
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
        <Link to="/">Home</Link>
        </li>
        
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/search"> Search</Link>
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
