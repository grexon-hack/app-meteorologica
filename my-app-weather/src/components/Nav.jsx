import React from 'react';
import logo from './image/pngwing.com.png'
import SearchBar from './SearchBar.jsx';
import {Link} from 'react-router-dom';
import './Nav.css';
import Footer from './footer/Footer';


function Nav({onSearch}) {
  return (
    <div className='navbar'>
      <Footer />
      <Link to='/app-meteorologica/'>
        <div className='logotipo'>
          <img src={logo} alt="logo weather" width={100}/>
          <h3 className='linked'>Aplicacion del Clima</h3>
        </div>
      </Link>
      <div className='aboutLink'>
        <SearchBar onSearch={onSearch}/>
        <Link to='/app-meteorologica/about'>
            <h4 style={{color:'black'}}>Sobre mi</h4>
        </Link>
      </div>
    </div>

  );
};

export default Nav;
