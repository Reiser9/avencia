import React from 'react';
import {NavLink, Link, Routes, Route, Navigate} from 'react-router-dom';

import DashboardIcon from '../../assets/icons/DashboardIcon';
import AccountIcon from '../../assets/icons/AccountIcon';
import WalletIcon from '../../assets/icons/WalletIcon';
import SwapIcon from '../../assets/icons/SwapIcon';
import OrderIcon from '../../assets/icons/OrderIcon';
import ChatIcon from '../../assets/icons/ChatIcon';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import MoreIcon from '../../assets/icons/MoreIcon';
import ArrowDownIcon from '../../assets/icons/ArrowDownIcon';

import MainDashboard from '../MainDashboard';
import Account from '../Account';
import Wallets from '../Wallets';
import Swaporexchange from '../Swaporexchange';
import Orders from '../Orders';
import Chats from '../Chats';
import Profile from '../Profile';
import Welcome from '../Welcome';
import Verification from '../Verification';
import Application from '../Application';
import Bridge from '../Bridge';
import Vesting from '../Vesting';

const Dashboard = () => {
    const [otherOpen, setOtherOpen] = React.useState(false);
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const closeSidebar = () => {
        setSidebarOpen(true);
    }

    return(
        <div className='content__wrapper w100 df'>
            {sidebarOpen && <div className="content__menu--mobile aic jcc" onClick={() => setSidebarOpen(false)}>
                <img src="/assets/img/menu.svg" alt="menu" className="content__menu--img light" />
                <img src="/assets/img/menu-dark.svg" alt="menu" className="content__menu--img dark" />
            </div>}

            <div className={`sidebar w100 fs df fdc aifs${sidebarOpen ? " disable" : ""}`}>
                <div className="sidebar__balance--inner w100 df fdc aifs">
                    <div className="sidebar__wrap">
                        <Link to='/' className='sidebar__logo df'>
                            <img src='/assets/img/logo.svg' alt='logo' className='img light' />
                            <img src='/assets/img/logo-dark.svg' alt='logo' className='img dark' />
                        </Link>

                        <img src="/assets/img/cross.svg" alt="cross" className="sidebar__close light" onClick={() => setSidebarOpen(true)} />
                        <img src="/assets/img/cross-dark.svg" alt="cross" className="sidebar__close dark" onClick={() => setSidebarOpen(true)} />
                    </div>

                    <div className="sidebar__balance--content w100 df aic jcsb">
                        <div className="sidebar__balance df fdc aifs">
                            <p className="sidebar__balance--text headline9">
                                Balance
                            </p>

                            <p className="sidebar__balance--value headline4">
                                $156,153,517,892
                            </p>
                        </div>

                        <button className="button sidebar__balance--icon--inner default__hover df aic jcc">
                            <img src="/assets/img/wave.svg" alt="img" className="img__auto light" />
                            <img src="/assets/img/wave-dark.svg" alt="img" className="img__auto dark" />
                        </button>
                    </div>

                    <div className="sidebar__profits w100">
                        <div className="sidebar__profits--content df fdc aifs">
                            <div className="sidebar__profits--item w100 df aic jcsb">
                                <p className="sidebar__profits--item--title df aic headline9">
                                    <img src="/assets/img/tag.svg" alt="icon" className="sidebar__profits--img light" />
                                    <img src="/assets/img/tag-dark.svg" alt="icon" className="sidebar__profits--img dark" />

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
                                    <img src="/assets/img/time.svg" alt="icon" className="sidebar__profits--img light" />
                                    <img src="/assets/img/time-dark.svg" alt="icon" className="sidebar__profits--img dark" />

                                    Deposit in orders
                                </p>

                                <p className="sidebar__profits--value headline9">
                                    0.005400 BTC
                                </p>
                            </div>
                        </div>

                        <button className="button sidebar__profits--button sidebar__profits--deposit default__hover df jcc headline8">
                            <img src="/assets/img/arrow-down.svg" alt="icon" className='sidebar__profits--icon' />

                            Deposit
                        </button>

                        <button className="button sidebar__profits--button sidebar__profits--withdraw default__hover df jcc headline8">
                            <img src="/assets/img/arrow-up.svg" alt="icon" className='sidebar__profits--icon light' />
                            <img src="/assets/img/arrow-up-dark.svg" alt="icon" className='sidebar__profits--icon dark' />

                            Withdraw
                        </button>
                    </div>
                </div>

                <nav className="sidebar__nav w100">
                    <NavLink end to='' className="sidebar__nav--link w100 df aic" onClick={closeSidebar}>
                        <DashboardIcon />

                        Dashboard
                    </NavLink>

                    <NavLink to='account' className="sidebar__nav--link w100 df aic" onClick={closeSidebar}>
                        <AccountIcon />

                        My Account
                    </NavLink>

                    <NavLink to='wallets' className="sidebar__nav--link w100 df aic" onClick={closeSidebar}>
                        <WalletIcon />

                        Wallets
                    </NavLink>

                    <NavLink to='swaporexchange' className="sidebar__nav--link w100 df aic" onClick={closeSidebar}>
                        <SwapIcon />

                        Swap / Exchange
                    </NavLink>

                    <NavLink to='orders' className="sidebar__nav--link w100 df aic" onClick={closeSidebar}>
                        <OrderIcon />

                        Orders
                    </NavLink>

                    <NavLink to='chats' className="sidebar__nav--link w100 df aic" onClick={closeSidebar}>
                        <ChatIcon />

                        Chats
                    </NavLink>

                    <NavLink to='profile' className="sidebar__nav--link w100 df aic" onClick={closeSidebar}>
                        <ProfileIcon />

                        My Profile
                    </NavLink>

                    <button className="button sidebar__nav--link w100 df aic jcsb" onClick={() => setOtherOpen(d => !d)}>
                        <span className='df aic'>
                            <MoreIcon />

                            Other
                        </span>

                        <ArrowDownIcon rotate={otherOpen} className='m0' />
                    </button>

                    <div className={`other__wrapper w100 fdc aifs${otherOpen ? ' active' : ''}`}>
                        <NavLink to='welcome' className="sidebar__nav--link level2 w100 df aic" onClick={closeSidebar}>
                            Welcome
                        </NavLink>

                        <NavLink to='verification' className="sidebar__nav--link level2 w100 df aic" onClick={closeSidebar}>
                            KYC Verification
                        </NavLink>

                        <NavLink to='application' className="sidebar__nav--link level2 w100 df aic" onClick={closeSidebar}>
                            KYC Application
                        </NavLink>

                        <NavLink to='bridge' className="sidebar__nav--link level2 w100 df aic" onClick={closeSidebar}>
                            Bridge
                        </NavLink>

                        <NavLink to='vesting' className="sidebar__nav--link level2 w100 df aic" onClick={closeSidebar}>
                            Vesting
                        </NavLink>
                    </div>
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
                                <img src="/assets/img/bitcoin.svg" alt="bitcoin" className="img__auto" />
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

                    <button className="button wallet__add w100 default__hover df aic jcc headline8">
                        <img src="/assets/img/plus.svg" alt="icon" className="wallet__add--icon light" />
                        <img src="/assets/img/plus-dark.svg" alt="icon" className="wallet__add--icon dark" />

                        Add wallet
                    </button>

                    <div className="sidebar__wrapper w100">
                        <button className="sidebar__button button default__hover df aic jcc headline8">
                            <img src="/assets/img/question-icon.svg" alt="icon" className="sidebar__button--icon light" />
                            <img src="/assets/img/question-icon-dark.svg" alt="icon" className="sidebar__button--icon dark" />

                            Support
                        </button>

                        <button className="sidebar__button button default__hover df aic jcc headline8">
                            <img src="/assets/img/world.svg" alt="icon" className="sidebar__button--icon light" />
                            <img src="/assets/img/world-dark.svg" alt="icon" className="sidebar__button--icon dark" />

                            English

                            <img src="/assets/img/arrow-right-white.svg" alt="icon" className="sidebar__button--arrow light" />
                            <img src="/assets/img/arrow-right-white-dark.svg" alt="icon" className="sidebar__button--arrow dark" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="content w100 df fdc aifs">
                <div className="content__header w100 df aic jcfe">
                    <button className="button mess content__header--wrapper default__hover df aic jcc">
                        <img src="/assets/img/message-white.svg" alt="icon" className="img__auto light" />
                        <img src="/assets/img/message-white-dark.svg" alt="icon" className="img__auto dark" />
                    </button>

                    <button className="button mess content__header--wrapper default__hover df aic jcc pr">
                        <img src="/assets/img/notify.svg" alt="icon" className="img__auto light" />
                        <img src="/assets/img/notify-dark.svg" alt="icon" className="img__auto dark" />

                        <span className="content__header--notify--index headline8">
                            9+
                        </span>
                    </button>

                    <div className="content__header--profile df aic">
                        <div className="content__header--img--inner">
                            <img src="/assets/img/ava.png" alt="ava" className="img100" />
                        </div>

                        <div className="content__header--info--inner df fdc aifs">
                            <p className="content__header--info--name headline6">
                                vino_costa
                            </p>

                            <p className="content__header--info--verify headline9">
                                Unverified
                            </p>
                        </div>

                        <button className="button content__header--wrapper default__hover df aic jcc pr">
                            <img src="/assets/img/arrow-down-white.svg" alt="icon" className="img__auto light" />
                            <img src="/assets/img/arrow-down-white-dark.svg" alt="icon" className="img__auto dark" />
                        </button>
                    </div>
                </div>

                <Routes path="/dashboard/">
                    <Route index element={<MainDashboard />} />
                    <Route path="account" element={<Account />} />
                    <Route path="wallets" element={<Wallets />} />
                    <Route path="swaporexchange" element={<Swaporexchange />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="chats" element={<Chats />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="welcome" element={<Welcome />} />
                    <Route path="verification" element={<Verification />} />
                    <Route path="application" element={<Application />} />
                    <Route path="bridge" element={<Bridge />} />
                    <Route path="vesting" element={<Vesting />} />
                    <Route path="*" element={<Navigate to={"/dashboard"} />} />
                </Routes>
            </div>
        </div>
    )
}

export default Dashboard;