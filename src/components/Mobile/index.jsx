import React from 'react';

const Mobile = () => {
    return(
        <section className='mobile pr'>
            <div className='container'>
                <div className='mobile__inner card w100 pr'>
                    <img src='./assets/img/mobile-bg.svg' alt='img' className='mobile__bg light pen' />
                    <img src='./assets/img/mobile-img.png' alt='img' className='mobile__img light pen' />

                    <img src='./assets/img/mobile-bg-dark.svg' alt='img' className='mobile__bg dark pen' />
                    <img src='./assets/img/mobile-img-dark.png' alt='img' className='mobile__img dark pen' />

                    <div className='mobile__text--inner pr w100 df fdc aifs'>
                        <h2 className='headline1'>
                            Avencia Mobile Application
                        </h2>

                        <p className='mobile__text--text'>
                            Download mobile application and use all the opportunities of this platform on you mobile platform
                        </p>

                        <div className='mobile__text--links df aic'>
                            <a href="https://google.com" className='mobile__text--link df'>
                                <img src='./assets/img/app_store.svg' alt='app store' className='img light' />
                                <img src='./assets/img/app_store-dark.svg' alt='app store' className='img dark' />
                            </a>

                            <a href="https://google.com" className='mobile__text--link df'>
                                <img src='./assets/img/google_play.svg' alt='google play' className='img light' />
                                <img src='./assets/img/google_play-dark.svg' alt='google play' className='img dark' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mobile;