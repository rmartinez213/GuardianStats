import React from 'react';
import './App.css';
import './style.css';
import Home from './Components/Home'
import News from './Components/News'
import Guardian from './Components/Guardian'
import Wiki from  './Components/Wiki'
import NavigationBar from './NavigationBar'
import { connect } from 'react-redux';
import { isHome, isNews, isGuardian, isWiki} from './actions/actiontypesActions'


class App extends React.Component {


  constructor(props){
    super(props);

  }
  

  render(props){
      
    return (
      <div>
        <NavigationBar />

        {this.props.home ? <Home /> : null}
        {this.props.news ? <News /> : null}
        {this.props.guardian ? <Guardian /> : null}
        {this.props.wiki ? <Wiki /> : null}
        
          
        

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