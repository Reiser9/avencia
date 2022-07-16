import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Header = () => {
    const [darkTheme, setDarkTheme] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);

    React.useEffect(() => {
        $(window).on("resize", function(){
            if($(window).width() > 981){
                setMenuOpen(false);
                $("body").removeClass("scroll");
            }
        });
    }, []);

    const goto = (point) => {
        let element = document.getElementById(point);
        element.scrollIntoView();
        if(menuOpen){
            setMenuOpen(false);
            $("body").removeClass("scroll");
        }
    }

    const changeTheme = () => {
        let body = document.body.classList;
        if(!body.contains("dark")){
            body.remove("light");
            body.add("dark");
            setDarkTheme(true);
        }
        else{
            body.remove("dark");
            body.add("light");
            setDarkTheme(false);
        }
    }

    const toggleMenu = () => {
        if(menuOpen){
            setMenuOpen(false);
            $("body").removeClass("scroll");
        }
        else{
            setMenuOpen(true);
            $("body").addClass("scroll");
        }
    }

    return(
        <>
            <header className={`header w100${menuOpen ? ' noshadow' : ''}`}>
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

                                <Link to='dashboard' className='header__nav--link'>
                                    Dashboard
                                </Link>
                            </nav>
                        </div>

                        <div className='header__wrapper df aic'>
                            <button className='header__theme--change button df aic jcc' onClick={changeTheme}>
                                <img src='./assets/img/moon.svg' alt='moon' className='img__auto' />
                            </button>

                            <button className='header__button button button__default'>
                                Connect wallet
                            </button>

                            <div className='header__menu df aic jcc' onClick={toggleMenu}>
                                {menuOpen ? <>
                                    <img src='./assets/img/close.svg' alt='menu' className='img__auto light' />
                                    <img src='./assets/img/close-dark.svg' alt='menu' className='img__auto dark' />
                                </> 
                                : <>
                                    <img src='./assets/img/menu.svg' alt='menu' className='img__auto light' />
                                    <img src='./assets/img/menu-dark.svg' alt='menu' className='img__auto dark' />
                                </>}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`mobile__menu${menuOpen ? ' active' : ''}`}>
                <div className='container'>
                    <div className='mobile__menu--inner'>
                        <div className='mobile__menu--nav df fdc aifs'>
                            <button className='button mobile__menu--link w100 df aic jcsb' onClick={() => goto('about')}>
                                <span className='df aic'>
                                    <img src='./assets/img/home.svg' alt='img' className='mobile__menu--icon light' />
                                    <img src='./assets/img/home-dark.svg' alt='img' className='mobile__menu--icon dark' />

                                    About
                                </span>

                                <img src='./assets/img/arrow-menu.svg' alt='img' className='mobile__menu--arrow light' />
                                <img src='./assets/img/arrow-menu-dark.svg' alt='img' className='mobile__menu--arrow dark' />
                            </button>

                            <button className='button mobile__menu--link w100 df aic jcsb' onClick={() => goto('features')}>
                                <span className='df aic'>
                                    <img src='./assets/img/moon2.svg' alt='img' className='mobile__menu--icon light' />
                                    <img src='./assets/img/moon2-dark.svg' alt='img' className='mobile__menu--icon dark' />

                                    Features
                                </span>

                                <img src='./assets/img/arrow-menu.svg' alt='img' className='mobile__menu--arrow light' />
                                <img src='./assets/img/arrow-menu-dark.svg' alt='img' className='mobile__menu--arrow dark' />
                            </button>

                            <button className='button mobile__menu--link w100 df aic jcsb' onClick={() => goto('why')}>
                                <span className='df aic'>
                                    <img src='./assets/img/heart.svg' alt='img' className='mobile__menu--icon light' />
                                    <img src='./assets/img/heart-dark.svg' alt='img' className='mobile__menu--icon dark' />

                                    Why Avencia
                                </span>

                                <img src='./assets/img/arrow-menu.svg' alt='img' className='mobile__menu--arrow light' />
                                <img src='./assets/img/arrow-menu-dark.svg' alt='img' className='mobile__menu--arrow dark' />
                            </button>

                            <button className='button mobile__menu--link w100 df aic jcsb' onClick={() => goto('tarifs')}>
                                <span className='df aic'>
                                    <img src='./assets/img/double.svg' alt='img' className='mobile__menu--icon light' />
                                    <img src='./assets/img/double-dark.svg' alt='img' className='mobile__menu--icon dark' />

                                    Tariffs
                                </span>

                                <img src='./assets/img/arrow-menu.svg' alt='img' className='mobile__menu--arrow light' />
                                <img src='./assets/img/arrow-menu-dark.svg' alt='img' className='mobile__menu--arrow dark' />
                            </button>

                            <button className='button mobile__menu--link w100 df aic jcsb' onClick={() => goto('reviews')}>
                                <span className='df aic'>
                                    <img src='./assets/img/layout.svg' alt='img' className='mobile__menu--icon light' />
                                    <img src='./assets/img/layout-dark.svg' alt='img' className='mobile__menu--icon dark' />

                                    Reviews
                                </span>

                                <img src='./assets/img/arrow-menu.svg' alt='img' className='mobile__menu--arrow light' />
                                <img src='./assets/img/arrow-menu-dark.svg' alt='img' className='mobile__menu--arrow dark' />
                            </button>
                        </div>

                        <div className='mobile__menu--social df fdc aifs'>
                            <a href='https://google.com' target='_blanc' className='mobile__menu--link w100 df aic jcsb'>
                                <span className='df aic'>
                                    <img src='./assets/img/instagram.svg' alt='img' className='mobile__menu--icon light' />
                                    <img src='./assets/img/instagram-dark.svg' alt='img' className='mobile__menu--icon dark' />

                                    Instagram
                                </span>

                                @avencia
                            </a>

                            <a href='https://google.com' target='_blanc' className='mobile__menu--link w100 df aic jcsb'>
                                <span className='df aic'>
                                    <img src='./assets/img/twitter.svg' alt='img' className='mobile__menu--icon light' />
                                    <img src='./assets/img/twitter-dark.svg' alt='img' className='mobile__menu--icon dark' />

                                    Twitter
                                </span>

                                @avencia_en
                            </a>

                            <a href='https://google.com' target='_blanc' className='mobile__menu--link w100 df aic jcsb'>
                                <span className='df aic'>
                                    <img src='./assets/img/telegram.svg' alt='img' className='mobile__menu--icon light' />
                                    <img src='./assets/img/telegram-dark.svg' alt='img' className='mobile__menu--icon dark' />

                                    Telegram
                                </span>

                                @avencia_bot
                            </a>

                            <a href='https://google.com' target='_blanc' className='mobile__menu--link w100 df aic jcsb'>
                                <span className='df aic'>
                                    <img src='./assets/img/tiktok.svg' alt='img' className='mobile__menu--icon light' />
                                    <img src='./assets/img/tiktok-dark.svg' alt='img' className='mobile__menu--icon dark' />

                                    TikTok
                                </span>

                                @avencia
                            </a>
                        </div>

                        <button className='button mobile__darkmode w100 df aic jcsb' onClick={changeTheme}>
                            <span className='df aic'>
                                <img src='./assets/img/moon.svg' alt='img' className='mobile__menu--icon' />

                                Dark mode
                            </span>

                            <div className={`darkmode__indicator${darkTheme ? ' darkmode' : ''}`}></div>
                        </button>

                        <button className='button button__default mobile__menu--button'>
                            Connect wallet
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;