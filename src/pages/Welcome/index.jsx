import React from 'react';

const Welcome = () => {
    return(
        <div className='dashboard__padding verification w100 df fdc aifs'>
            <h2 className="dashboard__title">
                Complete Your Profile
            </h2>

            <div className="welcome__inner w100">
                <div className="welcome__register w100 df fdc aifs">
                    <p className="dash__title">
                        Let&lsquo;s Finish Registration
                    </p>

                    <p className="dash__text welcome__register--text">
                        Only few minutes required to complete your registration and set up your account
                    </p>

                    <div className="welcome__register--steps w100 df fdc aifs">
                        <div className="welcome__register--step success df aifs pr">
                            <div className="welcome__register--circle df aic jcc">
                                <img src="/assets/img/check-white-dark.svg" alt="check" className="welcome__register--check pen" />
                            </div>

                            Verify email address
                        </div>

                        <div className="welcome__register--step inprogress df aifs pr">
                            <div className="welcome__register--circle df aic jcc">
                                <img src="/assets/img/check-white-dark.svg" alt="check" className="welcome__register--check pen" />
                            </div>

                            Verify your identity (KYC)
                        </div>

                        <div className="welcome__register--step notready df aifs pr">
                            <div className="welcome__register--circle df aic jcc">
                                <img src="/assets/img/check-white-dark.svg" alt="check" className="welcome__register--check pen" />
                            </div>

                            Secure your account
                        </div>

                        <div className="welcome__register--step notready df aifs pr">
                            <div className="welcome__register--circle df aic jcc">
                                <img src="/assets/img/check-white-dark.svg" alt="check" className="welcome__register--check pen" />
                            </div>

                            Set up payment method
                        </div>
                    </div>

                    <div className="welcome__register--complete w100 df fdc aifs">
                        <p className="welcome__resiter--complete--text">
                            Complete <span className="darkness">1/4</span>
                        </p>

                        <div className="welcome__register--progress--bar w100 pr">
                            <div className="welcome__register--progress" style={{width: '25%'}}></div>
                        </div>
                    </div>
                </div>

                <div className="welcome__kys w100 df fdc aifs pr">
                    <img src="/assets/img/welcome-block-bg.png" alt="img" className="welcome__kys--bg pen" />
                    <img src="/assets/img/welcome-img.svg" alt="img" className="welcome__kys--img pen" />

                    <div className="welcome__kys--inner pr w100 df fdc aifs">
                        <p className="dash__title">
                            Complete Your KYC
                        </p>

                        <p className="dash__text welcome__text">
                            Looks like your have not verified your indentity yet. Please verify yourself to get full access to digital wallet
                        </p>

                        <div className="welcome__kys--points w100">
                            <div className="welcome__kys--point df aic">
                                <div className="welcome__kys--point--icon df">
                                    <img src="/assets/img/check-white.svg" alt="icon" className="img light" />
                                    <img src="/assets/img/check-white-dark.svg" alt="icon" className="img dark" />
                                </div>

                                Fiat Currency Wallet (USD, EUR, GBP)
                            </div>

                            <div className="welcome__kys--point df aic">
                                <div className="welcome__kys--point--icon df">
                                    <img src="/assets/img/check-white.svg" alt="icon" className="img light" />
                                    <img src="/assets/img/check-white-dark.svg" alt="icon" className="img dark" />
                                </div>

                                10+ Digital Crypto Wallet (ETH, BTC, LTC etc)
                            </div>

                            <div className="welcome__kys--point df aic">
                                <div className="welcome__kys--point--icon df">
                                    <img src="/assets/img/check-white.svg" alt="icon" className="img light" />
                                    <img src="/assets/img/check-white-dark.svg" alt="icon" className="img dark" />
                                </div>

                                Receive and send payment with NioWallet
                            </div>

                            <button className="button button__default welcome__kys--points--button w100 jcc">
                                <span>
                                    Get Started
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="welcome__content w100 df fdc aic pr">
                <img src="/assets/img/welcome-bg.png" alt="bg" className="verification__bg pen" />

                <div className="verification__text--inner w100 df fdc aic">
                    <p className="dash__title text__center">
                        We&lsquo;re here to help you!
                    </p>

                    <p className="dash__text welcome__text text__center">
                        Ask a question or file a support ticket, manage request, report an issues. Our team support team will get back to you by email
                    </p>

                    <button className="button button__default verification__text--button">
                        <span>
                            Get Support Now
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Welcome;