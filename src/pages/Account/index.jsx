import React from 'react';

import BalanceChart from '../../components/BalanceChart';
import TripleChart from '../../components/TripleChart';

const Account = () => {
    return(
        <div className='dashboard__padding swap w100 df fdc aifs'>
            <div className="wallets__title--inner w100 df aic jcsb">
                <h2 className="dashboard__title text__center">
                    My Account
                </h2>

                <div className="wallets__button--inner df aic">
                    <button className="button default__hover wallets__button headline8">
                        Send
                    </button>

                    <button className="button default__hover wallets__button df aic headline8">
                        <img src="/assets/img/arrow-up.svg" alt="icon" className="wallets__button--icon light" />
                        <img src="/assets/img/arrow-up-dark.svg" alt="icon" className="wallets__button--icon dark" />

                        Withdraw
                    </button>

                    <button className="button button__default wallets__button--last headline8">
                        <span className="df aic">
                            <img src="/assets/img/arrow-down.svg" alt="icon" className="wallets__button--icon" />

                            Deposit
                        </span>
                    </button>
                </div>
            </div>

            <div className="dashboard__item account__item w100 df fdc aifs">
                <div className="dashboard__overview--title--inner w100 df aic jcsb">
                    <div className="dashboard__main--tabs df aic">
                        <button className="button our__tab profila__tab active">
                            <span className='our__tab--text'>
                                This month
                            </span>
                        </button>

                        <button className="button our__tab profila__tab">
                            <span className='our__tab--text'>
                                Months
                            </span>
                        </button>

                        <button className="button our__tab profila__tab">
                            <span className='our__tab--text'>
                                Years
                            </span>
                        </button>
                    </div>
                </div>

                <div className="account__content w100 df aife">
                    <div className="account__text--inner big w100 fs df fdc aifs">
                        <div className="account__text--item w100 df fdc aifs">
                            <p className="account__text--profit plus">
                                +2,5%
                            </p>

                            <p className="account__text--title">
                                $156,153,892
                            </p>

                            <p className="account__text--text pr headline9">
                                Total Received
                            </p>
                        </div>

                        <div className="account__grid--text w100">
                            <div className="referal__text--item w100 df fdc aifs">
                                <p className="dashboard__overview--title referal__text--title">
                                    $762,954.63
                                </p>

                                <p className="dashboard__overview--title referal__text--text headline9">
                                    Send
                                </p>
                            </div>

                            <div className="referal__text--item w100 df fdc aifs">
                                <p className="dashboard__overview--title referal__text--title">
                                    $762,954.63
                                </p>

                                <p className="dashboard__overview--title referal__text--text headline9">
                                    Receive
                                </p>
                            </div>

                            <div className="referal__text--item w100 df fdc aifs">
                                <p className="dashboard__overview--title referal__text--title">
                                    $762,954.63
                                </p>

                                <p className="dashboard__overview--title referal__text--text headline9">
                                    Withdraw
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="account__chart triple w100">
                        <TripleChart />
                    </div>
                </div>
            </div>

            <div className="dashboard__item account__item w100 df fdc aifs">
                <div className="dashboard__overview--title--inner w100 df aic jcsb">
                    <p className="dashboard__overview--title">
                        Balance Summary
                    </p>

                    <div className="dashboard__main--tabs df aic">
                        <button className="button our__tab profila__tab active">
                            <span className='our__tab--text'>
                                This month
                            </span>
                        </button>

                        <button className="button our__tab profila__tab">
                            <span className='our__tab--text'>
                                Months
                            </span>
                        </button>

                        <button className="button our__tab profila__tab">
                            <span className='our__tab--text'>
                                Years
                            </span>
                        </button>
                    </div>
                </div>

                <div className="account__content w100 df aife">
                    <div className="account__text--inner fs w100">
                        <div className="account__text--item w100 df fdc aifs">
                            <p className="account__text--profit minus">
                                -0,5%
                            </p>

                            <p className="account__text--title">
                                $12,011.11
                            </p>

                            <p className="account__text--text pr headline9">
                                Total Send
                            </p>
                        </div>
                        
                        <div className="account__text--item w100 df fdc aifs">
                            <p className="account__text--profit plus">
                                +2,5%
                            </p>

                            <p className="account__text--title">
                                $156,153,892
                            </p>

                            <p className="account__text--text pr headline9">
                                Total Received
                            </p>
                        </div>

                        <div className="account__text--item w100 df fdc aifs">
                            <p className="account__text--profit plus">
                                +13,5%
                            </p>

                            <p className="account__text--title">
                                $12,011.11
                            </p>

                            <p className="account__text--text pr headline9">
                                Total Send
                            </p>
                        </div>
                    </div>

                    <div className="account__chart w100">
                        <BalanceChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;