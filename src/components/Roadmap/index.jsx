import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';

const options = {
    margin: 24,
    responsiveClass: true,
    items: 3,
    dots: false,
    nav: true,
    stagePadding: 12,
    navText: ["<div class='road__arrow road__arrow--inner df aic jcc'><img src='./assets/img/arrow-left.svg' alt='arrow' class='img__auto light' /><img src='./assets/img/arrow-left-dark.svg' alt='arrow' class='img__auto dark' /></div>", "<div class='road__arrow road__arrow--inner df aic jcc'><img src='./assets/img/arrow-right.svg' alt='arrow' class='img__auto light' /><img src='./assets/img/arrow-right-dark.svg' alt='arrow' class='img__auto dark' /></div>"],
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2,
        },
        998: {
            items: 3,
        }
    },
};

const Roadmap = () => {
    return(
        <section className='road default__pad pr'>
            <img src='./assets/img/roadmap-img.svg' alt='img' className='road__img light pen' />
            <img src='./assets/img/roadmap-bg.png' alt='img' className='road__bg light pen' />

            <img src='./assets/img/roadmap-img-dark.svg' alt='img' className='road__img dark pen' />
            <img src='./assets/img/roadmap-bg-dark.png' alt='img' className='road__bg dark pen' />

            <div className='container'>
                <div className='road__inner w100 df aifs jcsb'>
                    <h2 className='road__title headline1 w100 fs pr'>
                        Avencia Roadmap
                    </h2>

                    <OwlCarousel className='road__content w100 df pr' {...options}>
                        <div className='road__item df fdc aifs pr'>
                            <div className='road__item--img--inner df aic jcc'>
                                <img src='./assets/img/check-white.svg' alt='img' className='img__auto' />
                            </div>

                            <p className='road__item--year headline2'>
                                2019
                            </p>

                            <div className='road__item--points w100 df fdc aifs'>
                                <div className='road__item--point df fdc aifs'>
                                    <p className='road__item--title headline4'>
                                        Q2
                                    </p>

                                    <p className='road__item--text headline9'>
                                        Avencia Digital Incorporate
                                    </p>
                                </div>

                                <div className='road__item--point df fdc aifs'>
                                    <p className='road__item--title headline4'>
                                        Q3
                                    </p>

                                    <p className='road__item--text headline9'>
                                        Marketing &amp; website Launch
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='road__item df fdc aifs pr'>
                            <div className='road__item--img--inner df aic jcc'>
                                <img src='./assets/img/check-white.svg' alt='img' className='img__auto' />
                            </div>

                            <p className='road__item--year headline2'>
                                2020
                            </p>

                            <div className='road__item--points w100 df fdc aifs'>
                                <div className='road__item--point df fdc aifs'>
                                    <p className='road__item--title headline4'>
                                        Q1
                                    </p>

                                    <p className='road__item--text headline9'>
                                        UK crypto license application FCA
                                    </p>
                                </div>

                                <div className='road__item--point df fdc aifs'>
                                    <p className='road__item--title headline4'>
                                        Q1
                                    </p>

                                    <p className='road__item--text headline9'>
                                        Started crypto Aggregator Development
                                    </p>
                                </div>
                                
                                <div className='road__item--point df fdc aifs'>
                                    <p className='road__item--title headline4'>
                                        Q2
                                    </p>

                                    <p className='road__item--text headline9'>
                                        Start OTC trading
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='road__item df fdc aifs pr'>
                            <div className='road__item--img--inner pending df aic jcc'>
                                <img src='./assets/img/pending.svg' alt='img' className='img__auto' />
                            </div>

                            <p className='road__item--year headline2'>
                                2022
                            </p>

                            <div className='road__item--points w100 df fdc aifs'>
                                <div className='road__item--point df fdc aifs'>
                                    <p className='road__item--title headline4'>
                                        Q1
                                    </p>

                                    <p className='road__item--text headline9'>
                                        Started software/hardware Development for crypto ATM&lsquo;s
                                    </p>
                                </div>

                                <div className='road__item--point df fdc aifs'>
                                    <p className='road__item--title headline4'>
                                        Q1
                                    </p>

                                    <p className='road__item--text headline9'>
                                        Integrated Chainanalysis API to our platform
                                    </p>
                                </div>
                                
                                <div className='road__item--point df fdc aifs'>
                                    <p className='road__item--title headline4'>
                                        Q2
                                    </p>

                                    <p className='road__item--text headline9'>
                                        Integrated Complyadvantage to our Banking Platform
                                    </p>
                                </div>

                                <div className='road__item--point df fdc aifs'>
                                    <p className='road__item--title headline4'>
                                        Q2
                                    </p>

                                    <p className='road__item--text headline9'>
                                        Integrated FireBlocks custodian wallet
                                    </p>
                                </div>

                                <div className='road__item--point df fdc aifs'>
                                    <p className='road__item--title headline4'>
                                        Q3
                                    </p>

                                    <p className='road__item--text headline9'>
                                        Became member CRYPTO UK
                                    </p>
                                </div>

                                <div className='road__item--point df fdc aifs'>
                                    <p className='road__item--title headline4'>
                                        Q3
                                    </p>

                                    <p className='road__item--text headline9'>
                                        Trader up to 1 Billion in Fiat
                                    </p>
                                </div>

                                <div className='road__item--point df fdc aifs'>
                                    <p className='road__item--title headline4'>
                                        Q4
                                    </p>

                                    <p className='road__item--text headline9'>
                                        New Proof of concept
                                    </p>
                                </div>

                                <div className='road__item--point df fdc aifs'>
                                    <p className='road__item--title headline4'>
                                        Q4
                                    </p>

                                    <p className='road__item--text headline9'>
                                        Development of ICO
                                    </p>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default Roadmap;