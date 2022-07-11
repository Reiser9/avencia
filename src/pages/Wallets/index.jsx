import React from 'react';

import MoreIcon from '../../assets/icons/MoreIcon';

const Wallets = () => {
    return(
        <div className='dashboard__padding wallets w100 df fdc aifs'>
            <div className="wallets__title--inner w100 df aic jcsb">
                <h2 className="dashboard__title text__center">
                    Wallets
                </h2>

                <div className="wallets__button--inner df aic">
                    <button className="button default__hover wallets__button headline8">
                        Send
                    </button>

                    <button className="button default__hover wallets__button df aic headline8">
                        <img src="/assets/img/arrow-up.svg" alt="icon" className="wallets__button--icon" />

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

            <div className="wallets__content w100 df fdc aifs">
                <p className="wallets__content--title headline9">
                    Crypto Accounts
                </p>

                <div className="wallets__box w100">
                    <div className="wallets__item df fdc aifs">
                        <div className="wallets__item--wrapper w100 df aifs jcsb">
                            <div className="wallets__item--currency df aic">
                                <div className="wallets__item--currency--img--inner df pr favorite">
                                    <div className="wallets__item--favorite aic jcc">
                                        <img src="/assets/img/star-fill-white.svg" alt="star" className="wallets__item--favorite--icon" />
                                    </div>

                                    <img src="/assets/img/ethereum.svg" alt="etherium" className="img" />
                                </div>

                                <div className="wallets__item--currency--info">
                                    <p className="wallets__item--currency--name headline8">
                                        Etherium
                                    </p>

                                    <p className="wallets__item--currency--text headline9">
                                        Wallet
                                    </p>
                                </div>
                            </div>

                            <button className="button wallets__item--other--icon">
                                <MoreIcon />
                            </button>
                        </div>

                        <div className="wallets__item--data w100">
                            <div className="wallets__item--data--inner df fdc aifs">
                                <p className="wallets__item--data--current">
                                    0.452058 ETH
                                </p>

                                <p className="wallets__item--data--usd headline9">
                                    1,583.25 USD
                                </p>
                            </div>

                            <button className="button wallets__item--button default__hover df jcc headline8">
                                Send
                            </button>

                            <button className="button wallets__item--button default__hover df aic jcc headline8">
                                <img src="/assets/img/arrow-up-op.svg" alt="icon" className="wallets__item--icon" />

                                Withdraw
                            </button>

                            <button className="button wallets__item--button default__hover df aic jcc headline8">
                                <img src="/assets/img/arrow-up-op.svg" alt="icon" className="wallets__item--icon" />

                                Deposit
                            </button>
                        </div>
                    </div>

                    <div className="wallets__item df fdc aifs">
                        <div className="wallets__item--wrapper w100 df aifs jcsb">
                            <div className="wallets__item--currency df aic">
                                <div className="wallets__item--currency--img--inner df pr">
                                    <div className="wallets__item--favorite aic jcc">
                                        <img src="/assets/img/star-fill-white.svg" alt="star" className="wallets__item--favorite--icon" />
                                    </div>

                                    <img src="/assets/img/ethereum.svg" alt="etherium" className="img" />
                                </div>

                                <div className="wallets__item--currency--info">
                                    <p className="wallets__item--currency--name headline8">
                                        Etherium
                                    </p>

                                    <p className="wallets__item--currency--text headline9">
                                        Wallet
                                    </p>
                                </div>
                            </div>

                            <button className="button wallets__item--other--icon">
                                <MoreIcon />
                            </button>
                        </div>

                        <div className="wallets__item--data w100">
                            <div className="wallets__item--data--inner df fdc aifs">
                                <p className="wallets__item--data--current">
                                    0.452058 ETH
                                </p>

                                <p className="wallets__item--data--usd headline9">
                                    1,583.25 USD
                                </p>
                            </div>

                            <button className="button wallets__item--button default__hover df jcc headline8">
                                Send
                            </button>

                            <button className="button wallets__item--button default__hover df aic jcc headline8">
                                <img src="/assets/img/arrow-up-op.svg" alt="icon" className="wallets__item--icon" />

                                Withdraw
                            </button>

                            <button className="button wallets__item--button default__hover df aic jcc headline8">
                                <img src="/assets/img/arrow-up-op.svg" alt="icon" className="wallets__item--icon" />

                                Deposit
                            </button>
                        </div>
                    </div>

                    <div className="wallets__item df fdc aifs">
                        <div className="wallets__item--wrapper w100 df aifs jcsb">
                            <div className="wallets__item--currency df aic">
                                <div className="wallets__item--currency--img--inner df pr">
                                    <div className="wallets__item--favorite aic jcc">
                                        <img src="/assets/img/star-fill-white.svg" alt="star" className="wallets__item--favorite--icon" />
                                    </div>

                                    <img src="/assets/img/bitcoin.svg" alt="etherium" className="img" />
                                </div>

                                <div className="wallets__item--currency--info">
                                    <p className="wallets__item--currency--name headline8">
                                        Bitcoin
                                    </p>

                                    <p className="wallets__item--currency--text headline9">
                                        Wallet
                                    </p>
                                </div>
                            </div>

                            <button className="button wallets__item--other--icon">
                                <MoreIcon />
                            </button>
                        </div>

                        <div className="wallets__item--data w100">
                            <div className="wallets__item--data--inner df fdc aifs">
                                <p className="wallets__item--data--current">
                                    4.434953 BTC
                                </p>

                                <p className="wallets__item--data--usd headline9">
                                    28,247.63 USD
                                </p>
                            </div>

                            <button className="button wallets__item--button default__hover df jcc headline8">
                                Send
                            </button>

                            <button className="button wallets__item--button default__hover df aic jcc headline8">
                                <img src="/assets/img/arrow-up-op.svg" alt="icon" className="wallets__item--icon" />

                                Withdraw
                            </button>

                            <button className="button wallets__item--button default__hover df aic jcc headline8">
                                <img src="/assets/img/arrow-up-op.svg" alt="icon" className="wallets__item--icon" />

                                Deposit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wallets__content w100 df fdc aifs">
                <p className="wallets__content--title headline9">
                    Fiat Accounts
                </p>

                <div className="wallets__box w100">
                    <div className="wallets__item df fdc aifs">
                        <div className="wallets__item--wrapper w100 df aifs jcsb">
                            <div className="wallets__item--currency df aic">
                                <div className="wallets__item--currency--img--inner df pr favorite">
                                    <div className="wallets__item--favorite aic jcc">
                                        <img src="/assets/img/star-fill-white.svg" alt="star" className="wallets__item--favorite--icon" />
                                    </div>

                                    <img src="/assets/img/dollar.svg" alt="etherium" className="img" />
                                </div>

                                <div className="wallets__item--currency--info">
                                    <p className="wallets__item--currency--name headline8">
                                        USD
                                    </p>

                                    <p className="wallets__item--currency--text headline9">
                                        Account
                                    </p>
                                </div>
                            </div>

                            <button className="button wallets__item--other--icon">
                                <MoreIcon />
                            </button>
                        </div>

                        <div className="wallets__item--data w100">
                            <div className="wallets__item--data--inner df fdc aifs">
                                <p className="wallets__item--data--current">
                                    $18,340.20
                                </p>

                                <p className="wallets__item--data--usd headline9">
                                    12,495.90USD
                                </p>
                            </div>

                            <button className="button wallets__item--button default__hover df jcc headline8">
                                Send
                            </button>

                            <button className="button wallets__item--button default__hover df aic jcc headline8">
                                <img src="/assets/img/arrow-up-op.svg" alt="icon" className="wallets__item--icon" />

                                Withdraw
                            </button>

                            <button className="button wallets__item--button default__hover df aic jcc headline8">
                                <img src="/assets/img/arrow-up-op.svg" alt="icon" className="wallets__item--icon" />

                                Deposit
                            </button>
                        </div>
                    </div>

                    <div className="wallets__item df fdc aifs">
                        <div className="wallets__item--wrapper w100 df aifs jcsb">
                            <div className="wallets__item--currency df aic">
                                <div className="wallets__item--currency--img--inner df pr">
                                    <div className="wallets__item--favorite aic jcc">
                                        <img src="/assets/img/star-fill-white.svg" alt="star" className="wallets__item--favorite--icon" />
                                    </div>

                                    <img src="/assets/img/euro.svg" alt="etherium" className="img" />
                                </div>

                                <div className="wallets__item--currency--info">
                                    <p className="wallets__item--currency--name headline8">
                                        EUR
                                    </p>

                                    <p className="wallets__item--currency--text headline9">
                                        Account
                                    </p>
                                </div>
                            </div>

                            <button className="button wallets__item--other--icon">
                                <MoreIcon />
                            </button>
                        </div>

                        <div className="wallets__item--data w100">
                            <div className="wallets__item--data--inner df fdc aifs">
                                <p className="wallets__item--data--current">
                                    €12,495.90
                                </p>

                                <p className="wallets__item--data--usd headline9">
                                    12,495.90 USD
                                </p>
                            </div>

                            <button className="button wallets__item--button default__hover df jcc headline8">
                                Send
                            </button>

                            <button className="button wallets__item--button default__hover df aic jcc headline8">
                                <img src="/assets/img/arrow-up-op.svg" alt="icon" className="wallets__item--icon" />

                                Withdraw
                            </button>

                            <button className="button wallets__item--button default__hover df aic jcc headline8">
                                <img src="/assets/img/arrow-up-op.svg" alt="icon" className="wallets__item--icon" />

                                Deposit
                            </button>
                        </div>
                    </div>

                    <button className="button default__hover wallets__item--add df fdc aic jcc">
                        <div className="wallets__item--add--icon--inner df aic jcc">
                            <img src="/assets/img/plus.svg" alt="plus" className="wallets__item--add--icon" />
                        </div>

                        <p className="wallets__item--add--title text__center">
                            Add New Wallet
                        </p>

                        <p className="wallets__item--add--text text__center headline9">
                            You can add your more wallet in your account to manage separetly
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Wallets;