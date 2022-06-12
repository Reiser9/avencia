import React from 'react';

const Custody = () => {
    return(
        <section className='custody default__pad'>
            <img src='./assets/img/custody-img1.svg' alt='img' className='custody__img custody__img1 pen' />
            <img src='./assets/img/custody-img2.svg' alt='img' className='custody__img custody__img2 pen' />

            <div className='container'>
                <div className='custody__inner w100 df fdc aic pr'>
                    <h2 className='headline1 text__center'>
                        Avencia Custody
                    </h2>

                    <p className='headline6 custody__subtitle text__center'>
                        The security of our customers is a priority
                    </p>

                    <p className='custody__text text__center w100'>
                        More and more countries are creating regulations around crypto custody, and financial institutions are attempting to challenge cryptocurrency businesses. That&lsquo;s why we are continuously improving our products &amp; services to protect our customers
                    </p>

                    <div className='custody__content w100'>
                        <div className='custody__item card df fdc aic'>
                            <div className='custody__item--img--inner df aic jcc'>
                                <img src='./assets/img/custody1.svg' alt='img' className='img__auto' />
                            </div>

                            <p className='custody__item--title headline5 text__center'>
                                With our custodian service, you will be insured for up to 250 million USD and secured from:
                            </p>

                            <div className='custody__text--inner w100 df fdc aic'>
                                <p className='custody__item--text text__center'>
                                    Third-party hacks of the cold-storage environment
                                </p>

                                <p className='custody__item--text text__center'>
                                    Copying or theft of private keys
                                </p>

                                <p className='custody__item--text text__center'>
                                    Dishonest acts by employees
                                </p>

                                <p className='custody__item--text text__center'>
                                    Loss of keys due to natural disasters
                                </p>

                                <p className='custody__item--text text__center'>
                                    Cyberattacks and third-party hacks
                                </p>

                                <p className='custody__item--text text__center'>
                                    Software bugs
                                </p>

                                <p className='custody__item--text text__center'>
                                    Internal process errors
                                </p>

                                <p className='custody__item--text text__center'>
                                    Issues while digital assets are in transit
                                </p>
                            </div>
                        </div>

                        <div className='custody__item card df fdc aic'>
                            <div className='custody__item--img--inner df aic jcc'>
                                <img src='./assets/img/custody2.svg' alt='img' className='img__auto' />
                            </div>

                            <p className='custody__item--title headline5 text__center'>
                                Additionally, we will offer the following security measures:
                            </p>

                            <div className='custody__text--inner w100 df fdc aic'>
                                <p className='custody__item--text text__center'>
                                    2-Factor Authentication (2FA)
                                </p>

                                <p className='custody__item--text text__center'>
                                    Whitelisting of addresses
                                </p>

                                <p className='custody__item--text text__center'>
                                    Multisig wallet
                                </p>

                                <p className='custody__item--text text__center'>
                                    Geographical distribution
                                </p>

                                <p className='custody__item--text text__center'>
                                    Cold storage
                                </p>

                                <p className='custody__item--text text__center'>
                                    Crypto vault
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Custody;