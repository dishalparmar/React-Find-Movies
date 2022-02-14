import React, { useState } from 'react';
import './Header.css';
import logo from './logo-mmt.png';
import SearchIcon from '@mui/icons-material/Search';

function Header() {

  const [search, setSearch] = useState('');

  const handleSearch = () => {                            // In real life app, this string would be sent to an api and fetch that particular item
    if (search !='') {
      console.log(search);
    }
  }

  return (
    <div className='header'>
      <div className='header-logo'>
        <a href='/' title='Home'><img src={logo} alt='mmt logo'/></a>
      </div>
      <div className='header-search'>
        <input type='text' placeholder='Search here...' onChange={e => setSearch(e.target.value)}/>
        <button onClick={handleSearch}><SearchIcon /></button>
      </div>
    </div>
  )
}

export default Header