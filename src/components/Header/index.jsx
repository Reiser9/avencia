import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const goto = (point) => {
        let element = document.getElementById(point);
        element.scrollIntoView();
    }

    const changeTheme = () => {
        let body = document.body.classList;
        if(!body.contains("dark")){
            body.remove("light");
            body.add("dark");
        }
        else{
            body.remove("dark");
            body.add("light");
        }
    }

    return(
        <header className='header w100'>
            <div className='container'>
                <div className='header__inner w100 df aic jcsb'>
                    <div className='header__wrapper df aic'>
                        <Link to='/' className='header__logo light df'>
                            <img src='./assets/img/logo.svg' alt='logo' className='img' />
                        </Link>

                        <Link to='/' className='header__logo dark df'>
                            <img src='./assets/img/logo-dark.svg' alt='logo' className='img' />
                        </Link>

                        <nav className='header__nav df aic'>
                            <button className='header__nav--link button' onClick={() => goto('about')}>
                                About
                            </button>

                            <button className='header__nav--link button' onClick={() => goto('features')}>
                                Features
                            </button>

                            <button className='header__nav--link button' onClick={() => goto('why')}>
                                Why Avencia
                            </button>

                            <button className='header__nav--link button' onClick={() => goto('tarifs')}>
                                Tariffs
                            </button>

                            <button className='header__nav--link button' onClick={() => goto('reviews')}>
                                Reviews
                            </button>
                        </nav>
                    </div>

                    <div className='header__wrapper df aic'>
                        <button className='header__theme--change button df aic jcc' onClick={changeTheme}>
                            <img src='./assets/img/moon.svg' alt='moon' className='img__auto' />
                        </button>

                        <button className='header__button button button__default'>
                            Connect wallet
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;