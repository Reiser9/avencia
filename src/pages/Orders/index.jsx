import React from 'react';

const Orders = () => {
    return(
        <div className='dashboard__padding orders w100 df fdc aifs'>
            <div className="wallets__title--inner w100 df aic jcsb">
                <h2 className="dashboard__title text__center">
                    Orders
                </h2>

                <div className="wallets__button--inner df aic">
                    <button className="button default__hover wallets__button df aic headline8">
                        <img src="/assets/img/download.svg" alt="icon" className="wallets__button--icon light" />
                        <img src="/assets/img/download-dark.svg" alt="icon" className="wallets__button--icon dark" />

                        Get Statement
                    </button>

                    <button className="button button__default wallets__button--last headline8">
                        <span className="df aic">
                            Buy Coin
                        </span>
                    </button>
                </div>
            </div>

            <div className="profile__tabs w100 df aic">
                <button className="button our__tab profila__tab active">
                    <span className='our__tab--text'>
                        History
                    </span>
                </button>

                <button className="button our__tab profila__tab">
                    <span className='our__tab--text'>
                        Sells
                    </span>
                </button>

                <button className="button our__tab profila__tab">
                    <span className='our__tab--text'>
                        Scheduled
                    </span>
                </button>

                <div className="swap__search--inner pr w100">
                    <input type="text" className="default__input swap__search--input" placeholder='Search' />

                    <img src="/assets/img/search.svg" alt="search icon" className="swap__search--icon pen" />
                </div>
            </div>

            <div className="orders__content w100 df fdc aifs">
                <p className="exchange__content--title">
                    All orders
                </p>

                <div className="order__box w100 df fdc aifs">
                    <p className="order__box--title headline9">
                        Today
                    </p>

                    <div className="order__box--items w100 df fdc aifs">
                        <div className="order__box--item w100 df aic">
                            <div className="order__box--item--event df aic headline8">
                                <img src="/assets/img/bitcoin.svg" alt="icon" className="exchange__item--exchange--icon" />

                                Buy Bitcoin
                            </div>

                            <div className="order__box--item--time headline8">
                                26m ago
                            </div>

                            <div className="order__box--item--usd headline8">
                                3,980.93 USD
                            </div>

                            <p className="order__box--item--current w100 headline8">
                                0.5384 BTC
                            </p>
                        </div>

                        <div className="order__box--item w100 df aic">
                            <div className="order__box--item--event df aic headline8">
                                <img src="/assets/img/ethereum.svg" alt="icon" className="exchange__item--exchange--icon" />

                                Withdraw
                            </div>

                            <div className="order__box--item--time headline8">
                                26m ago
                            </div>

                            <div className="order__box--item--usd headline8">
                                3,980.93 USD
                            </div>

                            <p className="order__box--item--current w100 headline8">
                                0.5384 BTC
                            </p>
                        </div>

                        <div className="order__box--item w100 df aic">
                            <div className="order__box--item--event df aic headline8">
                                <img src="/assets/img/bitcoin.svg" alt="icon" className="exchange__item--exchange--icon" />

                                Buy Bitcoin
                            </div>

                            <div className="order__box--item--time headline8">
                                26m ago
                            </div>

                            <div className="order__box--item--usd headline8">
                                3,980.93 USD
                            </div>

                            <p className="order__box--item--current w100 headline8">
                                0.5384 BTC
                            </p>
                        </div>

                        <div className="order__box--item w100 df aic">
                            <div className="order__box--item--event df aic headline8">
                                <img src="/assets/img/ethereum.svg" alt="icon" className="exchange__item--exchange--icon" />

                                Withdraw
                            </div>

                            <div className="order__box--item--time headline8">
                                26m ago
                            </div>

                            <div className="order__box--item--usd headline8">
                                3,980.93 USD
                            </div>

                            <p className="order__box--item--current w100 headline8">
                                0.5384 BTC
                            </p>
                        </div>
                    </div>
                </div>

                <div className="order__box w100 df fdc aifs">
                    <p className="order__box--title headline9">
                        Yestrday
                    </p>

                    <div className="order__box--items w100 df fdc aifs">
                        <div className="order__box--item w100 df aic">
                            <div className="order__box--item--event df aic headline8">
                                <img src="/assets/img/bitcoin.svg" alt="icon" className="exchange__item--exchange--icon" />

                                Buy Bitcoin
                            </div>

                            <div className="order__box--item--time headline8">
                                26m ago
                            </div>

                            <div className="order__box--item--usd headline8">
                                3,980.93 USD
                            </div>

                            <p className="order__box--item--current w100 headline8">
                                0.5384 BTC
                            </p>
                        </div>

                        <div className="order__box--item w100 df aic">
                            <div className="order__box--item--event df aic headline8">
                                <img src="/assets/img/ethereum.svg" alt="icon" className="exchange__item--exchange--icon" />

                                Withdraw
                            </div>

                            <div className="order__box--item--time headline8">
                                26m ago
                            </div>

                            <div className="order__box--item--usd headline8">
                                3,980.93 USD
                            </div>

                            <p className="order__box--item--current w100 headline8">
                                0.5384 BTC
                            </p>
                        </div>

                        <div className="order__box--item w100 df aic">
                            <div className="order__box--item--event df aic headline8">
                                <img src="/assets/img/bitcoin.svg" alt="icon" className="exchange__item--exchange--icon" />

                                Buy Bitcoin
                            </div>

                            <div className="order__box--item--time headline8">
                                26m ago
                            </div>

                            <div className="order__box--item--usd headline8">
                                3,980.93 USD
                            </div>

                            <p className="order__box--item--current w100 headline8">
                                0.5384 BTC
                            </p>
                        </div>

                        <div className="order__box--item w100 df aic">
                            <div className="order__box--item--event df aic headline8">
                                <img src="/assets/img/ethereum.svg" alt="icon" className="exchange__item--exchange--icon" />

                                Withdraw
                            </div>

                            <div className="order__box--item--time headline8">
                                26m ago
                            </div>

                            <div className="order__box--item--usd headline8">
                                3,980.93 USD
                            </div>

                            <p className="order__box--item--current w100 headline8">
                                0.5384 BTC
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;