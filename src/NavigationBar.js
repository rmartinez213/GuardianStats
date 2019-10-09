import React from 'react'
import SearchPlayer from './NewsAPI'

class NavigationBar extends React.Component{
    

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
                    <li><a href='#'>Home</a></li>
                    <li><a href='#' onClick={SearchPlayer}>News</a></li>
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

export default NavigationBar