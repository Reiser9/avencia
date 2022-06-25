import React from 'react';

const Tokeninfo = () => {
    return(
        <section className='tokeninfo default__pad pr'>
            <img src='./assets/img/tokeninfo-bg1.svg' alt='img' className='tokeninfo__bg tokeninfo__bg1 light pen' />
            <img src='./assets/img/tokeninfo-bg2.svg' alt='img' className='tokeninfo__bg tokeninfo__bg2 light pen' />

            <img src='./assets/img/tokeninfo-bg1-dark.svg' alt='img' className='tokeninfo__bg tokeninfo__bg1 dark pen' />
            <img src='./assets/img/tokeninfo-bg2-dark.svg' alt='img' className='tokeninfo__bg tokeninfo__bg2 dark pen' />

            <div className='container'>
                <div className='tokeninfo__inner w100 df aifs jcsb'>
                    <div className='tokeninfo__content card w100'>
                        <div className='tokeninfo__item w100'>
                            <p className='tokeninfo__item--title headline8'>
                                Tokens
                            </p>

                            <p className='tokeninfo__item--title text__end headline8'>
                                Fee discount
                            </p>

                            <p className='tokeninfo__item--title text__end headline8'>
                                Cryptoback
                            </p>
                        </div>

                        <div className='tokeninfo__item--wrapper w100 df fdc aifs'>
                            <div className='tokeninfo__item w100'>
                                <div className='tokeninfo__item--title headline8 df aic'>
                                    <div className='tokeninfo__item--img--inner df aic jcc pink'>
                                        <img src='./assets/img/n-white.svg' alt='n' className='img__auto' />
                                    </div>

                                    50,000 Avencia Tokens
                                </div>

                                <p className='tokeninfo__item--title gray text__end headline8'>
                                    15%
                                </p>

                                <p className='tokeninfo__item--title gray text__end headline8'>
                                    1.00%
                                </p>
                            </div>

                            <div className='tokeninfo__item w100'>
                                <div className='tokeninfo__item--title headline8 df aic'>
                                    <div className='tokeninfo__item--img--inner df aic jcc purple'>
                                        <img src='./assets/img/n-white.svg' alt='n' className='img__auto' />
                                    </div>

                                    25,000 Avencia Tokens
                                </div>

                                <p className='tokeninfo__item--title gray text__end headline8'>
                                    10%
                                </p>

                                <p className='tokeninfo__item--title gray text__end headline8'>
                                    0.75%
                                </p>
                            </div>

                            <div className='tokeninfo__item w100'>
                                <div className='tokeninfo__item--title headline8 df aic'>
                                    <div className='tokeninfo__item--img--inner df aic jcc blue'>
                                        <img src='./assets/img/n-white.svg' alt='n' className='img__auto' />
                                    </div>

                                    10,000 Avencia Tokens
                                </div>

                                <p className='tokeninfo__item--title gray text__end headline8'>
                                    5%
                                </p>

                                <p className='tokeninfo__item--title gray text__end headline8'>
                                    0.50%
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='block__text--inner w100 df fdc aifs'>
                        <h2 className='headline1'>
                            Avencia Token
                        </h2>

                        <p className='block__text--text'>
                            The Avencia Token is a utility token based on the EVM compatible blockchains. We will deploy Tokens on a few different chains for its expansive scope of Defi functionalities
                        </p>

                        <button className='button button__default block__text--button'>
                            Connect wallet
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tokeninfo;