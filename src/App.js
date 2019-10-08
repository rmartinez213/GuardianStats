import React from 'react';
import './App.css';
import './style.css';
import NavSlide from './script'
import SearchPlayer from './NewsAPI'

function App() {

 

  return (
    <div>
      <nav>
        <div className='logo'>
          <h4>Guardian Home</h4>
        </div>

        <ul className='nav-links'>
          <li><a href='#'>Home</a></li>
          <li><a href='#' onClick={SearchPlayer}>News</a></li>
          <li><a href='#'>Guardian</a></li>
          <li><a href='#'>Wiki</a></li>
        </ul>

        <div className='burger' onClick={NavSlide}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      </nav>


    </div>
  );
}

export default App;
