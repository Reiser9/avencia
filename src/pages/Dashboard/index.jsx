import React from 'react';
import {Link} from 'react-router-dom';

import DashboardIcon from '../../assets/icons/DashboardIcon';
import AccountIcon from '../../assets/icons/AccountIcon';
import WalletIcon from '../../assets/icons/WalletIcon';
import SwapIcon from '../../assets/icons/SwapIcon';
import OrderIcon from '../../assets/icons/OrderIcon';
import ChatIcon from '../../assets/icons/ChatIcon';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import MoreIcon from '../../assets/icons/MoreIcon';
import ArrowDownIcon from '../../assets/icons/ArrowDownIcon';

const Dashboard = () => {
    return(
        <div className='content__wrapper w100 df'>
            <div className="sidebar w100 fs df fdc aifs">
                <div className="sidebar__balance--inner w100 df fdc aifs">
                    <Link to='/' className='sidebar__logo df'>
                        <img src='./assets/img/logo-dark.svg' alt='logo' className='img' />
                    </Link>

                    <div className="sidebar__balance--content w100 df aic jcsb">
                        <div className="sidebar__balance df fdc aifs">
                            <p className="sidebar__balance--text headline9">
                                Balance
                            </p>

                            <p className="sidebar__balance--value headline4">
                                $156,153,517,892
                            </p>
                        </div>

                        <button className="button sidebar__balance--icon--inner df aic jcc">
                            <img src="./assets/img/wave.svg" alt="img" className="img__auto" />
                        </button>
                    </div>

                    <div className="sidebar__profits w100">
                        <div className="sidebar__profits--content df fdc aifs">
                            <div className="sidebar__profits--item w100 df aic jcsb">
                                <p className="sidebar__profits--item--title df aic headline9">
                                    <img src="./assets/img/tag.svg" alt="icon" className="sidebar__profits--img" />

                                    Profits
                                </p>

                                <p className="sidebar__profits--procents">
                                    +13,5%
                                </p>

                                <p className="sidebar__profits--value headline9">
                                    + 0.0526 BTC
                                </p>
                            </div>

                            <div className="sidebar__profits--item w100 df aic jcsb">
                                <p className="sidebar__profits--item--title df aic headline9">
                                    <img src="./assets/img/time.svg" alt="icon" className="sidebar__profits--img" />

                                    Deposit in orders
                                </p>

                                <p className="sidebar__profits--value headline9">
                                    0.005400 BTC
                                </p>
                            </div>
                        </div>

                        <button className="button sidebar__profits--button sidebar__profits--deposit df jcc headline8">
                            <img src="./assets/img/arrow-down.svg" alt="icon" className='sidebar__profits--icon' />

                            Deposit
                        </button>

                        <button className="button sidebar__profits--button sidebar__profits--withdraw df jcc headline8">
                            <img src="./assets/img/arrow-up.svg" alt="icon" className='sidebar__profits--icon' />

                            Withdraw
                        </button>
                    </div>
                </div>

                <nav className="sidebar__nav w100">
                    <Link to='/' className="sidebar__nav--link w100 df aic">
                        <DashboardIcon />

                        Dashboard
                    </Link>

                    <Link to='/' className="sidebar__nav--link w100 df aic">
                        <AccountIcon />

                        My Account
                    </Link>

                    <Link to='/' className="sidebar__nav--link w100 df aic">
                        <WalletIcon />

                        Wallets
                    </Link>

                    <Link to='/' className="sidebar__nav--link w100 df aic">
                        <SwapIcon />

                        Swap / Exchange
                    </Link>

                    <Link to='/' className="sidebar__nav--link w100 df aic">
                        <OrderIcon />

                        Orders
                    </Link>

                    <Link to='/' className="sidebar__nav--link w100 df aic">
                        <ChatIcon />

                        Chats
                    </Link>

                    <Link to='/' className="sidebar__nav--link w100 df aic">
                        <ProfileIcon />

                        My Profile
                    </Link>

                    <button className="button sidebar__nav--link w100 df aic jcsb">
                        <span className='df aic'>
                            <MoreIcon />

                            Other
                        </span>

                        <ArrowDownIcon className='m0' />
                    </button>
                </nav>

                <div className="sidebar__balance--box w100 df fdc aifs">
                    <div className="sidebar__balance--text--inner w100 df aic jcsb">
                        <p className="sidebar__balance--title headline9">
                            Crypto Accounts(4)
                        </p>

                        <button className="button sidebar__balance--view headline9">
                            View All
                        </button>
                    </div>

                    <div className="wallet__content w100 df fdc aifs">
                        <div className="wallet__item w100 df aic">
                            <div className="wallet__item--icon--inner df aic jcc">
                                <img src="./assets/img/bitcoin.svg" alt="bitcoin" className="img__auto" />
                            </div>

                            <div className="wallet__item--text--inner">
                                <p className="wallet__item--text--text headline9">
                                    Bitcoin Wallet
                                </p>

                                <p className="wallet__item--text--value headline8">
                                    0.83675275 BTC
                                </p>
                            </div>
                        </div>
                    </div>

                    <button className="button wallet__add w100 df aic jcc headline8">
                        <img src="./assets/img/plus.svg" alt="icon" className="wallet__add--icon" />

                        Add wallet
                    </button>

                    <div className="sidebar__wrapper w100">
                        <button className="sidebar__button button df aic jcc headline8">
                            <img src="./assets/img/question-icon.svg" alt="icon" className="sidebar__button--icon" />

                            Support
                        </button>

                        <button className="sidebar__button button df aic jcc headline8">
                            <img src="./assets/img/world.svg" alt="icon" className="sidebar__button--icon" />

                            English

                            <img src="./assets/img/arrow-right-white.svg" alt="icon" className="sidebar__button--arrow" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="content w100">
                
            </div>
        </div>
    )
}

export default Dashboard;