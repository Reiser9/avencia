import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='container'>
                <div className='footer__inner w100 df jcsb'>
                    <div className='footer__wrapper w100 df fdc aifs'>
                        <Link to='/' className='footer__logo light df'>
                            <img src='./assets/img/logo.svg' alt='logo' className='img' />
                        </Link>

                        <Link to='/' className='footer__logo dark df'>
                            <img src='./assets/img/logo-dark.svg' alt='logo' className='img' />
                        </Link>

                        <div className='footer__box w100 df fdc aifs'>
                            <p className='footer__text headline8 df aic'>
                                <img src='./assets/img/location.svg' alt='icon' className='img__auto footer__text--icon light' />
                                <img src='./assets/img/location-dark.svg' alt='icon' className='img__auto footer__text--icon dark' />

                                United States
                            </p>

                            <p className='footer__text headline8 df aic'>
                                <img src='./assets/img/message.svg' alt='icon' className='img__auto footer__text--icon light' />
                                <img src='./assets/img/message-dark.svg' alt='icon' className='img__auto footer__text--icon dark' />

                                English (United States)
                            </p>

                            <div className='footer__text headline8'>
                                made by <a href="https://roobinium.io" target="_Blanc">roobinium.io</a>
                            </div>

                            <p className='footer__text headline8'>
                                &copy; 2022 Avencia
                            </p>
                        </div>
                    </div>

                    <div className='footer__content df fdc aifs'>
                        <p className='footer__content--title headline9'>
                            Documents
                        </p>

                        <div className='footer__content--box df fdc aifs'>
                            <a href="https://google.com" className='footer__content--link headline8'>
                                Cookies settings
                            </a>

                            <a href="https://google.com" className='footer__content--link headline8'>
                                Privacy policy
                            </a>

                            <a href="https://google.com" className='footer__content--link headline8'>
                                Token purchase
                            </a>

                            <a href="https://google.com" className='footer__content--link headline8'>
                                Terms of use
                            </a>
                        </div>
                    </div>

                    <div className='footer__content df fdc aifs'>
                        <p className='footer__content--title headline9'>
                            Resources
                        </p>

                        <div className='footer__content--box df fdc aifs'>
                            <a href="https://google.com" className='footer__content--link headline8'>
                                Whitepaper
                            </a>

                            <a href="https://google.com" className='footer__content--link headline8'>
                                Yellowpaper
                            </a>

                            <a href="https://google.com" className='footer__content--link headline8'>
                                Investor&rsquo;s desk
                            </a>

                            <a href="https://google.com" className='footer__content--link headline8'>
                                Support
                            </a>

                            <a href="https://google.com" className='footer__content--link headline8'>
                                Privacy &amp; terms
                            </a>

                            <a href="https://google.com" className='footer__content--link headline8'>
                                API
                            </a>
                        </div>
                    </div>

                    <div className='footer__content df fdc aifs'>
                        <p className='footer__content--title headline9'>
                            Follow
                        </p>

                        <div className='footer__content--box df fdc aifs'>
                            <a href="https://google.com" className='footer__content--link headline8'>
                                Telegram
                            </a>

                            <a href="https://google.com" className='footer__content--link headline8'>
                                YouTube
                            </a>

                            <a href="https://google.com" className='footer__content--link headline8'>
                                GitHub
                            </a>

                            <a href="https://google.com" className='footer__content--link headline8'>
                                Twitter
                            </a>

                            <a href="https://google.com" className='footer__content--link headline8'>
                                Facebook
                            </a>

                            <a href="https://google.com" className='footer__content--link headline8'>
                                VK
                            </a>
                        </div>
                    </div>

                    <div className='footer__join--inner w100 df fdc aifs'>
                        <p className='footer__content--title headline9'>
                            Stay in touch
                        </p>

                        <div className='footer__content--box df fdc aifs'>
                            <p className='footer__content--text headline8'>
                                Join our mailing list to get the latest information about FansVerse
                            </p>

                            <div className='footer__input--inner'>
                                <input className='input footer__input' placeholder='Enter email' />

                                <button className='button button__default footer__signin'>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;