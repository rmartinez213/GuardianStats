import React from 'react'
import SearchPlayer from './NewsAPI'
import { connect } from 'react-redux'
import { isHome, isNews, isGuardian, isWiki} from './actions/actiontypesActions'
import $ from 'jquery'; 
import { thisTypeAnnotation } from '@babel/types';
import logo from './images/ghost.png'

class NavigationBar extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            pageHeader: 'Home'
        }

        this.home = this.home.bind(this);
        this.news = this.news.bind(this);
        this.guardian = this.guardian.bind(this);
        this.wiki = this.wiki.bind(this);
    }

    home() {
        if ($(window).width() < 768){
            this.props.isHome(true);
            this.props.isNews(false);
            this.props.isGuardian(false);
            this.props.isWiki(false);
            this.setState({pageHeader: 'Home'})
        }
        else{
            setTimeout(() => {
                this.props.isHome(true);
                this.props.isNews(false);
                this.props.isGuardian(false);
                this.props.isWiki(false);
                this.setState({pageHeader: 'Home'})
            }, 1000)
        }
    }

    news() {
        if ($(window).width() < 768){
            this.props.isHome(false);
            this.props.isNews(true);
            this.props.isGuardian(false);
            this.props.isWiki(false);
            this.setState({pageHeader: 'News'})
        }
        else{
            setTimeout(() => {
                this.props.isHome(false);
                this.props.isNews(true);
                this.props.isGuardian(false);
                this.props.isWiki(false);
                this.setState({pageHeader: 'News'})
            }, 1000)
        }
    }

    guardian() {
        if ($(window).width() < 768){
            this.props.isHome(false);
            this.props.isNews(false);
            this.props.isGuardian(true);
            this.props.isWiki(false);
            this.setState({pageHeader: 'Stats'})
        }
        else{
            setTimeout(() => {
                this.props.isHome(false);
                this.props.isNews(false);
                this.props.isGuardian(true);
                this.props.isWiki(false);
                this.setState({pageHeader: 'Stats'})
            }, 1000)
        }
    }

    wiki() {
        if ($(window).width() < 768){
            this.props.isHome(false);
            this.props.isNews(false);
            this.props.isGuardian(false);
            this.props.isWiki(true);
            this.setState({pageHeader: 'Wiki'})
        }
        else{
            setTimeout(() => {
                this.props.isHome(false);
                this.props.isNews(false);
                this.props.isGuardian(false);
                this.props.isWiki(true);
                this.setState({pageHeader: 'Wiki'})
            }, 1000)
        }
    }

    navSlide() {
        if($(window).width() < 768){
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

        else{
            const nav = document.querySelector('.nav-click-lg');

            // Toggle active css class
            nav.classList.toggle('nav-click-active');

            // Timeout to untoggle the active css class
            setTimeout(() => {
                nav.classList.toggle('nav-click-active');
            }, 2500)
            
        }
    }

    render(props){
        return(
            <nav>
                <div className='logo'>
                    <span className='logo-image'><img src={logo} width={30} height={30}/></span><h4><span className='logo-text'>Guardian</span> <span className='logo-header'>{this.state.pageHeader}</span></h4>
                </div>

                <ul className='nav-links'>
                    <li><a href='#' onClick={ () => { this.navSlide(); this.home();} }>Home</a></li>
                    <li><a href='#' onClick={ () => { this.navSlide(); this.news();} } >News</a></li>
                    <li><a href='#' onClick={ () => { this.navSlide(); this.guardian();} }>Guardian</a></li>
                    <li><a href='#' onClick={ () => { this.navSlide(); this.wiki();} }>Wiki</a></li>
                </ul>

                <div className='burger' onClick={this.navSlide}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>

                <div className='nav-click-lg'></div>
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