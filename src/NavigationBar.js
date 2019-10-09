import React from 'react'
import SearchPlayer from './NewsAPI'
import { connect } from 'react-redux'

import { isHome, isNews, isGuardian, isWiki} from './actions/actiontypesActions'

class NavigationBar extends React.Component{
    
    constructor(props){
        super(props)

        this.home = this.home.bind(this);
        this.news = this.news.bind(this);
    }

    home() {
        this.props.isHome(true);
        this.props.isNews(false);
        this.props.isGuardian(false);
        this.props.isWiki(false);
    }

    news() {
        this.props.isHome(false);
        this.props.isNews(true);
        this.props.isGuardian(false);
        this.props.isWiki(false);

        // this.navSlide();
    }

    navSlide() {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li')

        //Toggle Nav    
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link,index) => {
            if(link.style.animation)
                link.style.animation = '';
            else
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
        })

        //Burger Animation
        burger.classList.toggle('toggle');
    }

    render(){
        return(
            <nav>
                <div className='logo'>
                    <h4>Guardian Home</h4>
                </div>

                <ul className='nav-links'>
                    <li><a href='#' onClick={this.home}>Home</a></li>
                    <li><a href='#' onClick={this.news}>News</a></li>
                    <li><a href='#'>Guardian</a></li>
                    <li><a href='#'>Wiki</a></li>
                </ul>

                <div className='burger' onClick={this.navSlide}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    pages: state.pages.pages,
    home: state.pages.home,
    news: state.pages.news,
    guardian: state.pages.guardian,
    wiki: state.pages.wiki
});

export default connect (mapStateToProps , {isHome, isNews, isGuardian, isWiki})(NavigationBar)