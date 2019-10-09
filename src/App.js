import React from 'react';
import './App.css';
import './style.css';
import Home from './HomeClass'
import News from './Components/News'
import NavigationBar from './NavigationBar'
import { connect } from 'react-redux';
import { isHome, isNews, isGuardian, isWiki} from './actions/actiontypesActions'

class App extends React.Component {


  constructor(props){
    super(props);
    
    this.handler = this.handler.bind(this);
    this.handler2 = this.handler2.bind(this);
  }

  handler(){
    this.props.isHome(false);
    this.props.isNews(true);
  }

  handler2(){
    this.props.isHome(true);
  }

  

  render(props){
    console.log(this.props.home)
    console.log(this.props.news)
    console.log(this.props.home)

    
    
  return (
      <div>
        <NavigationBar />

        {this.props.home ? <Home /> : null}
        {this.props.news ? <News /> : null}
        
        
        
      

      </div>
    );
  }
}

const mapStateToProps = state => ({
  pages: state.pages.pages,
  home: state.pages.home,
  news: state.pages.news,
  guardian: state.pages.guardian,
  wiki: state.pages.wiki
})



export default connect(mapStateToProps, {isHome, isNews, isGuardian, isWiki})(App);