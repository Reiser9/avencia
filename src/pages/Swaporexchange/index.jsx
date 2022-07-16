import React from 'react';

const Swaporexchange = () => {
    const [tab, setTab] = React.useState('exchange');

    return(
        <div className='dashboard__padding swap w100 df fdc aifs'>
            <h2 className="dashboard__title text__center">
                Swap / Exchange
            </h2>

            <div className="profile__tabs w100 df aic">
                <button className={`button our__tab profila__tab${ tab === 'swap' ? ' active' : ''}`} onClick={() => setTab('swap')}>
                    <span className='our__tab--text'>
                        Swap
                    </span>
                </button>

                <button className={`button our__tab profila__tab${ tab === 'exchange' ? ' active' : ''}`} onClick={() => setTab('exchange')}>
                    <span className='our__tab--text'>
                        Exchange
                    </span>
                </button>

                {tab === 'exchange' && <div className="swap__search--inner pr w100">
                    <input type="text" className="default__input swap__search--input" placeholder='Search' />

                    <img src="/assets/img/search.svg" alt="search icon" className="swap__search--icon pen" />
                </div>}
            </div>

            {tab === 'swap' ?
            <div className="swap__inner w100">
                <div className="swap__content df fdc aifs jcsb">
                    <p className="swap__content--title">
                        Swap
                    </p>

                    <div className="swap__item w100 df fdc aifs">
                        <div className="swap__item--title--inner w100 df aic jcsb">
                            <p className="swap__item--title headline9">
                                You pay
                            </p>

                            <p className="swap__item--balance headline9">
                                Balance: 0.48248
                            </p>

                            <div className="swap__item--buttons df aic">
                                <button className="button swap__item--button headline9">
                                    Half
                                </button>

                                <button className="button swap__item--button headline9">
                                    Max
                                </button>
                            </div>
                        </div>

                        <div className="swap__item--input--inner w100 pr">
                            <div class="application__item--input--text">Amount</div>

                            <input type="number" className="default__input swap__item--input" placeholder="Input amount" />

                            <button className="button default__hover swap__item--swap df jcc aic">
                                <img src="/assets/img/swap.svg" alt="icon" className="swap__item--swap--icon" />
                            </button>
                        </div>
                    </div>

                    <div className="swap__item w100 df fdc aifs">
                        <p className="swap__item--title headline9">
                            You receive
                        </p>

                        <div className="swap__item--input--inner w100 pr">
                            <div class="application__item--input--text">Amount</div>

                            <input type="number" className="default__input swap__item--input" placeholder="Input amount" />
                        </div>
                    </div>

                    <button className="button button__default swap__content--button w100">
                        <span>
                            Swap
                        </span>
                    </button>
                </div>

                <div className="swap__example df fdc aic jcc pr">
                    <img src="/assets/img/swap-bg.png" alt="img" className="swap__example--bg pen" />

                    <div className="verification__text--inner w100 df fdc aic">
                        <p className="dash__title text__center">
                            Heading Example
                        </p>

                        <p className="dash__text welcome__text text__center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </p>

                        <div className="profile__button--inner w100 df aic jcc">
                            <button className="button profile__button default__hover">
                                <span>
                                    Learn More
                                </span>
                            </button>

                            <button className="button button__default profile__button--grad">
                                <span>
                                    Button
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            : <div className="exchange__inner w100 df fdc aifs">
                <p className="exchange__content--title">
                    Aggregated Exchange
                </p>
                
                <div className="exchange__content w100 df fdc aifs">
                    <div className="exchange__item w100 df aic">
                        <div className="exchange__item--exchange df aic headline8">
                            <img src="/assets/img/binance.svg" alt="icon" className="exchange__item--exchange--icon" />

                            Binance
                        </div>

                        <div className="exchange__item--pair df aic headline8">
                            <div className="exchange__item--pair--box pr">
                                <img src="/assets/img/bitcoin.svg" alt="icon" className="exchange__item--pair--icon" />
                                <img src="/assets/img/ethereum_classic.svg" alt="icon" className="exchange__item--pair--icon" />
                            </div>

                            BTC/USDT
                        </div>

                        <div className="exchange__item--price headline8">
                            40,250 USDT
                        </div>

                        <button className="button exchange__item--button headline8">
                            Exchange
                        </button>
                    </div>

                    <div className="exchange__item w100 df aic">
                        <div className="exchange__item--exchange df aic headline8">
                            <img src="/assets/img/bitfinex.svg" alt="icon" className="exchange__item--exchange--icon" />

                            Bitfinex
                        </div>

                        <div className="exchange__item--pair df aic headline8">
                            <div className="exchange__item--pair--box pr">
                                <img src="/assets/img/bitcoin.svg" alt="icon" className="exchange__item--pair--icon" />
                                <img src="/assets/img/ethereum_classic.svg" alt="icon" className="exchange__item--pair--icon" />
                            </div>

                            BTC/USDT
                        </div>

                        <div className="exchange__item--price headline8">
                            40,250 USDT
                        </div>

                        <button className="button exchange__item--button headline8">
                            Exchange
                        </button>
                    </div>

                    <div className="exchange__item w100 df aic">
                        <div className="exchange__item--exchange df aic headline8">
                            <img src="/assets/img/kraken.svg" alt="icon" className="exchange__item--exchange--icon" />

                            Kraken
                        </div>

                        <div className="exchange__item--pair df aic headline8">
                            <div className="exchange__item--pair--box pr">
                                <img src="/assets/img/bitcoin.svg" alt="icon" className="exchange__item--pair--icon" />
                                <img src="/assets/img/ethereum_classic.svg" alt="icon" className="exchange__item--pair--icon" />
                            </div>

                            BTC/USDT
                        </div>

                        <div className="exchange__item--price headline8">
                            40,250 USDT
                        </div>

                        <button className="button exchange__item--button headline8">
                            Exchange
                        </button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Swaporexchange;