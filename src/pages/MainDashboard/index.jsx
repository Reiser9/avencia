import React from 'react';

import MoreIcon from '../../assets/icons/MoreIcon';

import ReferalChart from '../../components/ReferalChart';
import BalanceChart from '../../components/BalanceChart';

const copyLink = "https://dashlite.net/?ref=4945KD48";

const MainDashboard = () => {
    const copy = () => {
        navigator.clipboard.writeText(copyLink).then(() => {
            alert("Copying to clipboard was successful!");
        });
    }

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
                        <div className="dashboard__overview--balance df aic jcsb">
                            <div className="sidebar__balance df fdc aifs">
                                <p className="sidebar__balance--text headline9">
                                    Balance
                                </p>

                                <p className="sidebar__balance--value headline4">
                                    $156,153,517,892
                                </p>
                            </div>

                            <div className="dashboard__overview--balance--wrapper df aic">
                                <button className="button default__hover chats__content--info--button df aic jcc">
                                    <img src="/assets/img/gear.svg" alt="icon" className="img__auto" />
                                </button>

                                <button className="button default__hover chats__content--info--button df aic jcc">
                                    <img src="/assets/img/swap-white.svg" alt="icon" className="img__auto" />
                                </button>

                                <button className="button button__default dashboard__overview--button">
                                    <span className="df aic">
                                        <img src="/assets/img/arrow-down.svg" alt="icon" className="dashboard__overview--icon" />

                                        Deposit
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="dashboard__overview--item df aic jcsb">
                            <div className="sidebar__balance df fdc aifs">
                                <p className="sidebar__balance--text headline9">
                                    Transactions
                                </p>

                                <p className="sidebar__balance--value small headline4">
                                    34,405
                                </p>
                            </div>

                            <button className="button default__hover chats__content--info--button df aic jcc">
                                <img src="/assets/img/send-dark.svg" alt="icon" className="img__auto" />
                            </button>
                        </div>

                        <div className="dashboard__overview--item df aic jcsb">
                            <div className="sidebar__balance df fdc aifs">
                                <p className="sidebar__balance--text headline9">
                                    Wallets
                                </p>

                                <p className="sidebar__balance--value small headline4">
                                    5
                                </p>
                            </div>

                            <button className="button default__hover chats__content--info--button df aic jcc">
                                <img src="/assets/img/card.svg" alt="icon" className="img__auto" />
                            </button>
                        </div>

                        <div className="dashboard__overview--item">
                            <div className="sidebar__balance df fdc aifs">
                                <p className="sidebar__balance--text headline9">
                                    Last Activity
                                </p>

                                <p className="sidebar__balance--value small headline4">
                                    19 Nov, 2019
                                </p>
                            </div>
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

                <div className="dashboard__item w100 df fdc aifs">
                    <div className="dashboard__overview--title--inner w100 df aic jcsb">
                        <p className="dashboard__overview--title">
                            Recent Activities
                        </p>

                        <div className="dashboard__main--tabs df aic">
                            <button className="button our__tab profila__tab active">
                                <span className='our__tab--text'>
                                    Buy
                                </span>
                            </button>

                            <button className="button our__tab profila__tab">
                                <span className='our__tab--text'>
                                    Sell
                                </span>
                            </button>

                            <button className="button our__tab profila__tab">
                                <span className='our__tab--text'>
                                    All
                                </span>
                            </button>
                        </div>

                        <button className="button wallets__item--other--icon">
                            <MoreIcon />
                        </button>
                    </div>

                    <div className="dashboard__overview--wrapper w100 df fdc aifs">
                        <div className="dashboard__overview--item--item w100 df aic">
                            <div className="dashboard__overview--box dashboard__overview--coin df aic headline8">
                                <img src="/assets/img/bitcoin.svg" alt="icon" className="exchange__item--exchange--icon" />

                                Buy Bitcoin
                            </div>

                            <div className="dashboard__overview--box dashboard__overview--text headline8">
                                26m ago
                            </div>

                            <div className="dashboard__overview--box dashboard__overview--text headline8">
                                3,980.93 USD
                            </div>

                            <div className="dashboard__overview--box dashboard__overview--text white headline8">
                                0.5384 BTC
                            </div>
                        </div>

                        <div className="dashboard__overview--item--item w100 df aic">
                            <div className="dashboard__overview--box dashboard__overview--coin df aic headline8">
                                <img src="/assets/img/ethereum.svg" alt="icon" className="exchange__item--exchange--icon" />

                                Withdraw
                            </div>

                            <div className="dashboard__overview--box dashboard__overview--text headline8">
                                3d 2h ago
                            </div>

                            <div className="dashboard__overview--box dashboard__overview--text headline8">
                                3,980.93 USD
                            </div>

                            <div className="dashboard__overview--box dashboard__overview--text white headline8">
                                0.5384 BTC
                            </div>
                        </div>

                        <div className="dashboard__overview--item--item w100 df aic">
                            <div className="dashboard__overview--box dashboard__overview--coin df aic headline8">
                                <img src="/assets/img/bitcoin.svg" alt="icon" className="exchange__item--exchange--icon" />

                                Buy Bitcoin
                            </div>

                            <div className="dashboard__overview--box dashboard__overview--text headline8">
                                26m ago
                            </div>

                            <div className="dashboard__overview--box dashboard__overview--text headline8">
                                3,980.93 USD
                            </div>

                            <div className="dashboard__overview--box dashboard__overview--text white headline8">
                                0.5384 BTC
                            </div>
                        </div>

                        <div className="dashboard__overview--item--item w100 df aic">
                            <div className="dashboard__overview--box dashboard__overview--coin df aic headline8">
                                <img src="/assets/img/ethereum.svg" alt="icon" className="exchange__item--exchange--icon" />

                                Withdraw
                            </div>

                            <div className="dashboard__overview--box dashboard__overview--text headline8">
                                3d 10h ago
                            </div>

                            <div className="dashboard__overview--box dashboard__overview--text headline8">
                                3,980.93 USD
                            </div>

                            <div className="dashboard__overview--box dashboard__overview--text white headline8">
                                0.5384 BTC
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard__item df fdc aifs">
                    <div className="dashboard__overview--title--inner w100 df aic jcsb">
                        <p className="dashboard__overview--title">
                        Balance Flow
                        </p>

                        <div className="dashboard__main--tabs df aic">
                            <button className="button our__tab profila__tab active">
                                <span className='our__tab--text'>
                                    This month
                                </span>
                            </button>

                            <button className="button our__tab profila__tab">
                                <span className='our__tab--text'>
                                    This year
                                </span>
                            </button>
                        </div>

                        <button className="button wallets__item--other--icon">
                            <MoreIcon />
                        </button>
                    </div>

                    <div className="balance__chart w100">
                        <BalanceChart />
                    </div>
                </div>

                <div className="dashboard__item df fdc aifs">
                    <div className="refs__inner w100 df aic jcsb">
                        <h2 className="refs__title">
                            Refer Us &amp; Earn
                        </h2>

                        <button className="button button__default refs__button">
                            <span className="df aic">
                                <img src="/assets/img/plus.svg" alt="icon" className="refs__icon" />

                                Invite
                            </span>
                        </button>
                    </div>

                    <p className="refs__text headline8">
                        Use the bellow link to invite your friends
                    </p>

                    <div className="refs__copy--inner w100 pr">
                        <input type="text" value={copyLink} readOnly className="input refs__copy--input" />

                        <img src="/assets/img/copy.svg" alt="copy" className="refs__copy" onClick={copy} />
                    </div>
                </div>

                <div className="dashboard__item df aife">
                    <div className="referal__box w100 df fdc aifs">
                        <p className="dashboard__overview--title">
                            My Referral
                        </p>

                        <div className="referal__text--item w100 df fdc aifs">
                            <p className="dashboard__overview--title referal__text--title">
                                394
                            </p>

                            <p className="dashboard__overview--title referal__text--text headline9">
                                Total Joined
                            </p>
                        </div>

                        <div className="referal__text--item w100 df fdc aifs">
                            <p className="dashboard__overview--title referal__text--title">
                                548.49
                            </p>

                            <p className="dashboard__overview--title referal__text--text headline9">
                                Referral Earn
                            </p>
                        </div>
                    </div>

                    <div className="referal__chart w100">
                        <ReferalChart />
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