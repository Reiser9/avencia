import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';

const options = {
    margin: 24,
    responsiveClass: true,
    loop: true,
    items: 6,
    dots: false,
    nav: true,
    stagePadding: 12,
    navText: ["<div class='review__arrow review__arrow--inner df aic jcc'><img src='./assets/img/arrow-left.svg' alt='arrow' class='img__auto light' /><img src='./assets/img/arrow-left-dark.svg' alt='arrow' class='img__auto dark' /></div>", "<div class='review__arrow review__arrow--next df aic'>Next<img src='./assets/img/arrow-right.svg' alt='arrow' class='arrow__next img__auto light' /><img src='./assets/img/arrow-right-dark.svg' alt='arrow' class='arrow__next img__auto dark' /></div>"],
    responsive: {
        0: {
            items: 1,
        },
        480: {
            items: 2,
        },
        768: {
            items: 3,
        },
        998: {
            items: 4,
        },
        1200: {
            items: 5,
        },
        1340: {
            items: 6,
        }
    },
};

const Talk = () => {
    return(
        <section className='talk default__pad'>
            <img src='./assets/img/talk-img1.svg' alt='img' className='talk__img talk__img1 light pen' />
            <img src='./assets/img/talk-img2.svg' alt='img' className='talk__img talk__img2 light pen' />

            <img src='./assets/img/talk-img1-dark.svg' alt='img' className='talk__img talk__img1 dark pen' />
            <img src='./assets/img/talk-img2-dark.svg' alt='img' className='talk__img talk__img2 dark pen' />

            <div className='container'>
                <div className='talk__inner w100 df fdc aifs'>
                    <div className='w100 df aic jcsb'>
                        <h2 className='headline1 pr'>
                            Talk About Us
                        </h2>
                    </div>

                    <OwlCarousel className='review__content talk__content w100' {...options}>
                        <div className='talk__item--wrapper df fdc aifs w100'>
                            <div className='talk__item card df fdc aic w100'>
                                <div className='talk__item--img--inner df'>
                                    <img src='./assets/img/talk1.svg' alt='img' className='img' />
                                </div>

                                <p className='talk__item--name headline5 text__center'>
                                    CEX
                                </p>
                            </div>

                            <div className='talk__item card df fdc aic w100'>
                                <div className='talk__item--img--inner df'>
                                    <img src='./assets/img/talk2.svg' alt='img' className='img' />
                                </div>

                                <p className='talk__item--name headline5 text__center'>
                                    Galaxy Digital
                                </p>
                            </div>
                        </div>

                        <div className='talk__item--wrapper df fdc aifs w100'>
                            <div className='talk__item card df fdc aic w100'>
                                <div className='talk__item--img--inner df'>
                                    <img src='./assets/img/talk3.svg' alt='img' className='img' />
                                </div>

                                <p className='talk__item--name headline5 text__center'>
                                    Scrypt
                                </p>
                            </div>

                            <div className='talk__item card df fdc aic w100'>
                                <div className='talk__item--img--inner df'>
                                    <img src='./assets/img/talk4.svg' alt='img' className='img' />
                                </div>

                                <p className='talk__item--name headline5 text__center'>
                                    Kraken
                                </p>
                            </div>
                        </div>

                        <div className='talk__item--wrapper df fdc aifs w100'>
                            <div className='talk__item card df fdc aic w100'>
                                <div className='talk__item--img--inner df'>
                                    <img src='./assets/img/talk5.svg' alt='img' className='img' />
                                </div>

                                <p className='talk__item--name headline5 text__center'>
                                    Woorton
                                </p>
                            </div>

                            <div className='talk__item card df fdc aic w100'>
                                <div className='talk__item--img--inner df'>
                                    <img src='./assets/img/talk6.svg' alt='img' className='img' />
                                </div>

                                <p className='talk__item--name headline5 text__center'>
                                    Binance
                                </p>
                            </div>
                        </div>

                        <div className='talk__item--wrapper df fdc aifs w100'>
                            <div className='talk__item card df fdc aic w100'>
                                <div className='talk__item--img--inner df'>
                                    <img src='./assets/img/talk7.svg' alt='img' className='img' />
                                </div>

                                <p className='talk__item--name headline5 text__center'>
                                    DDEX
                                </p>
                            </div>

                            <div className='talk__item card df fdc aic w100'>
                                <div className='talk__item--img--inner df'>
                                    <img src='./assets/img/talk8.svg' alt='img' className='img' />
                                </div>

                                <p className='talk__item--name headline5 text__center'>
                                    Ellipsis
                                </p>
                            </div>
                        </div>

                        <div className='talk__item--wrapper df fdc aifs w100'>
                            <div className='talk__item card df fdc aic w100'>
                                <div className='talk__item--img--inner df'>
                                    <img src='./assets/img/talk9.svg' alt='img' className='img' />
                                </div>

                                <p className='talk__item--name headline5 text__center'>
                                    DeversiFI
                                </p>
                            </div>

                            <div className='talk__item card df fdc aic w100'>
                                <div className='talk__item--img--inner df'>
                                    <img src='./assets/img/talk10.svg' alt='img' className='img' />
                                </div>

                                <p className='talk__item--name headline5 text__center'>
                                    JellySwap
                                </p>
                            </div>
                        </div>

                        <div className='talk__item--wrapper df fdc aifs w100'>
                            <div className='talk__item card df fdc aic w100'>
                                <div className='talk__item--img--inner df'>
                                    <img src='./assets/img/talk11.svg' alt='img' className='img' />
                                </div>

                                <p className='talk__item--name headline5 text__center'>
                                    DODO
                                </p>
                            </div>

                            <div className='talk__item card df fdc aic w100'>
                                <div className='talk__item--img--inner df'>
                                    <img src='./assets/img/talk12.svg' alt='img' className='img' />
                                </div>

                                <p className='talk__item--name headline5 text__center'>
                                    KyberSwap
                                </p>
                            </div>
                        </div>

                        <div className='talk__item--wrapper df fdc aifs w100'>
                            <div className='talk__item card df fdc aic w100'>
                                <div className='talk__item--img--inner df'>
                                    <img src='./assets/img/talk1.svg' alt='img' className='img' />
                                </div>

                                <p className='talk__item--name headline5 text__center'>
                                    CEX
                                </p>
                            </div>

                            <div className='talk__item card df fdc aic w100'>
                                <div className='talk__item--img--inner df'>
                                    <img src='./assets/img/talk2.svg' alt='img' className='img' />
                                </div>

                                <p className='talk__item--name headline5 text__center'>
                                    Galaxy Digital
                                </p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default Talk;