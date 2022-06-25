import React from 'react';

const Features = () => {
    return(
        <section className='feature default__pad pr' id='features'>
            <img src='./assets/img/feature-bg.png' alt='img' className='feature__bg light pen' />
            <img src='./assets/img/feature-bg-dark.png' alt='img' className='feature__bg dark pen' />

            <div className='container'>
                <div className='feature__inner df aifs'>
                    <div className='feature__text--box w100 df fdc aifs fs'>
                        <h2 className='headline1'>
                            Avencia features
                        </h2>

                        <button className='button button__default feature__button'>
                            Connect wallet
                        </button>
                    </div>

                    <div className='feature__content w100'>
                        <div className='feature__item card df fdc aifs'>
                            <img src='./assets/img/feature1.png' alt='img' className='img light' />
                            <img src='./assets/img/feature1-dark.png' alt='img' className='img dark' />

                            <p className='feature__item--title headline3'>
                                Aggregation
                            </p>

                            <p className='feature__item--text'>
                                Full Aggregation for exchange, lending, staking
                            </p>
                        </div>

                        <div className='feature__item card df fdc aifs'>
                            <img src='./assets/img/feature2.png' alt='img' className='img light' />
                            <img src='./assets/img/feature2-dark.png' alt='img' className='img dark' />

                            <p className='feature__item--title headline3'>
                                Wallet
                            </p>

                            <p className='feature__item--text'>
                                One Banking account, one Crypto Wallet, one KYC. All of this in one Interface
                            </p>
                        </div>

                        <div className='feature__item card df fdc aifs'>
                            <img src='./assets/img/feature3.png' alt='img' className='img light' />
                            <img src='./assets/img/feature3-dark.png' alt='img' className='img dark' />

                            <p className='feature__item--title headline3'>
                                Worldwide ATMs
                            </p>

                            <p className='feature__item--text'>
                                Access to your balances via our Crypto ATM chain worldwide. Topping up or withdrawing funds has never been easier
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;