import React from 'react';

import MoreIcon from '../../assets/icons/MoreIcon';

const MainDashboard = () => {
    return(
        <div className='dashboard__padding dashboard w100 df fdc aifs'>
            <h2 className="dashboard__title text__center">
                Dashboard
            </h2>

            <div className="dashboard__content w100">
                <div className="dashboard__item df fdc aifs">
                    <div className="dashboard__overview--title--inner w100 df aic jcsb">
                        <p className="dashboard__overview--title">
                            Overview
                        </p>

                        <button className="button wallets__item--other--icon">
                            <MoreIcon />
                        </button>
                    </div>

                    <div className="dashboard__overview--content w100">
                        <div className="dashboard__overview--balance df aic">

                        </div>

                        <div className="dashboard__overview--item">

                        </div>

                        <div className="dashboard__overview--item">
                            
                        </div>

                        <div className="dashboard__overview--item">
                            
                        </div>
                    </div>
                </div>

                <div className="dashboard__item df fdc aifs">
                    <div className="dashboard__wallets--item w100 df fdc aifs">
                        <div className="dashboard__wallets--item--title--inner w100 df aic jcsb">
                            <p className="dashboard__wallets--item--title">
                                Digital Wallets
                            </p>

                            <button className="button dashboard__wallet--view">
                                View All
                            </button>
                        </div>

                        <div className="dashboard__wallets--items w100">
                            <div className="dashboard__wallets--item--item df aic">
                                <img src="/assets/img/bitcoin.svg" alt="icon" className="dashboard__wallets--icon" />

                                <div className="dashboard__wallets--info df fdc aifs">
                                    <p className="dashboard__wallets--info--name headline9">
                                        Bitcoin
                                    </p>

                                    <p className="dashboard__wallets--info--value headline8">
                                        0.83675275 BTC
                                    </p>
                                </div>
                            </div>

                            <div className="dashboard__wallets--item--item df aic">
                                <img src="/assets/img/ethereum.svg" alt="icon" className="dashboard__wallets--icon" />

                                <div className="dashboard__wallets--info df fdc aifs">
                                    <p className="dashboard__wallets--info--name headline9">
                                        Etherium
                                    </p>

                                    <p className="dashboard__wallets--info--value headline8">
                                        0.83675275 ETH
                                    </p>
                                </div>
                            </div>

                            <div className="dashboard__wallets--item--item df aic">
                                <img src="/assets/img/bitcoin.svg" alt="icon" className="dashboard__wallets--icon" />

                                <div className="dashboard__wallets--info df fdc aifs">
                                    <p className="dashboard__wallets--info--name headline9">
                                        Bitcoin
                                    </p>

                                    <p className="dashboard__wallets--info--value headline8">
                                        0.83675275 BTC
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard__wallets--item w100 df fdc aifs">
                        <div className="dashboard__wallets--item--title--inner w100 df aic jcsb">
                            <p className="dashboard__wallets--item--title">
                                Fiat Accounts
                            </p>

                            <button className="button dashboard__wallet--view">
                                View All
                            </button>
                        </div>

                        <div className="dashboard__wallets--items w100">
                            <div className="dashboard__wallets--item--item df aic">
                                <img src="/assets/img/bitcoin.svg" alt="icon" className="dashboard__wallets--icon" />

                                <div className="dashboard__wallets--info df fdc aifs">
                                    <p className="dashboard__wallets--info--name headline9">
                                        Bitcoin
                                    </p>

                                    <p className="dashboard__wallets--info--value headline8">
                                        0.83675275 BTC
                                    </p>
                                </div>
                            </div>

                            <div className="dashboard__wallets--item--item df aic">
                                <img src="/assets/img/ethereum.svg" alt="icon" className="dashboard__wallets--icon" />

                                <div className="dashboard__wallets--info df fdc aifs">
                                    <p className="dashboard__wallets--info--name headline9">
                                        Etherium
                                    </p>

                                    <p className="dashboard__wallets--info--value headline8">
                                        0.83675275 ETH
                                    </p>
                                </div>
                            </div>

                            <div className="dashboard__wallets--item--item df aic">
                                <img src="/assets/img/bitcoin.svg" alt="icon" className="dashboard__wallets--icon" />

                                <div className="dashboard__wallets--info df fdc aifs">
                                    <p className="dashboard__wallets--info--name headline9">
                                        Bitcoin
                                    </p>

                                    <p className="dashboard__wallets--info--value headline8">
                                        0.83675275 BTC
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard__item df fdc aifs">
                    <div className="dashboard__overview--title--inner w100 df aic jcsb">
                        <p className="dashboard__overview--title">
                            Recent Activities
                        </p>

                        <button className="button wallets__item--other--icon">
                            <MoreIcon />
                        </button>
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

export default MainDashboard;