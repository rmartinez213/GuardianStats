import React from 'react';
import './App.css';
import './style.css';
import Home from './HomeClass'
import NavigationBar from './NavigationBar'

class App extends React.Component{
 
render(){
  return (
      <div>
        <NavigationBar />

        <Home />

      </div>
    );
  }
}

export default App;
