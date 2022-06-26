import React from 'react';

import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Vision from './components/Vision';
import Features from './components/Features';
import Why from './components/Why';
import Tokeninfo from './components/Tokeninfo';
import Tarifs from './components/Tarifs';
import Mobile from './components/Mobile';
import Lending from './components/Lending';
import Custody from './components/Custody';
import Talk from './components/Talk';
import Review from './components/Review';
import Partners from './components/Partners';
import Question from './components/Question';
import Token from './components/Token';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Modal from './components/Modal';
import Footer from './components/Footer';

const App = () => {
    const [modal, setModal] = React.useState(false);

    const openModal = () => {
        setModal(true);
        document.body.style.overflow = 'hidden';
    }

    const closeModal = () => {
        setModal(false);
        document.body.style.overflow = 'visible';
    }

    return(
        <>
            <Header />

            <Main />

            <About />

            <Vision />

            <Features />

            <Why />

            <Tokeninfo />

            <Tarifs />

            <Mobile />

            <section className='block bg'>
                <div className='container'>
                    <div className='block__inner w100 df aic jcsb'>
                        <div className='block__img--inner df pen'>
                            <img src='./assets/img/block-img1.png' alt='img' className='img light' />
                            <img src='./assets/img/block-img1-dark.png' alt='img' className='img dark' />
                        </div>

                        <div className='block__text--inner w100 df fdc aifs'>
                            <h2 className='headline1'>
                                Aggregated Exchange
                            </h2>

                            <p className='headline6 block__text--subtitle'>
                                Our groundbreaking aggregator means users never have to leave the Avencia platform
                            </p>

                            <p className='block__text--text'>
                                Users can pick and choose the best trading rates from dozen of other crypto exchanges, pulled in instantly
                            </p>

                            <button className='button button__default block__text--button'>
                                Connect wallet
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='block bg pr'>
                <img src='./assets/img/snake-right.png' alt='img' className='snake__right light pen' />
                <img src='./assets/img/snake-right-dark.png' alt='img' className='snake__right dark pen' />

                <div className='container'>
                    <div className='block__inner w100 df aic jcsb'>
                        <div className='block__text--inner w100 df fdc aifs'>
                            <h2 className='headline1'>
                                Aggregated Staking
                            </h2>

                            <p className='headline6 block__text--subtitle'>
                               By conducting constant network monitoring, our customers can enjoy high profitability with peace of mind
                            </p>

                            <p className='block__text--text'>
                                Users can pick and choose the best trading rates from dozen of other crypto exchanges, pulled in instantly
                            </p>

                            <button className='button button__default block__text--button'>
                                Connect wallet
                            </button>
                        </div>

                        <div className='block__img--inner df pen'>
                            <img src='./assets/img/block-img2.png' alt='img' className='img light' />
                            <img src='./assets/img/block-img2-dark.png' alt='img' className='img dark' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='block bg pr'>
                <img src='./assets/img/snake-left.png' alt='img' className='snake__left light pen' />
                <img src='./assets/img/snake-left-dark.png' alt='img' className='snake__left dark pen' />

                <div className='container'>
                    <div className='block__inner w100 df aic jcsb'>
                        <div className='block__img--inner df pen'>
                            <img src='./assets/img/block-img3.png' alt='img' className='img light' />
                            <img src='./assets/img/block-img3-dark.png' alt='img' className='img dark' />
                        </div>

                        <div className='block__text--inner w100 df fdc aifs'>
                            <h2 className='headline1'>
                                Avencia Bank
                            </h2>

                            <p className='block__text--text'>
                                Our exceptional online banking experience allows for transfer of existing central bank-issued currencies, as well as the new generation of cryptocurrencies
                            </p>

                            <button className='button button__default block__text--button'>
                                Connect wallet
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Lending />

            <section className='block'>
                <div className='container'>
                    <div className='block__inner w100 df aic jcsb'>
                        <div className='block__img--inner df pen'>
                            <img src='./assets/img/block-img4.svg' alt='img' className='img light' />
                            <img src='./assets/img/block-img4-dark.svg' alt='img' className='img dark' />
                        </div>

                        <div className='block__text--inner w100 df fdc aifs'>
                            <h2 className='headline1'>
                                Worldwide crypto ATMs
                            </h2>

                            <p className='headline6 block__text--subtitle'>
                                Avencia-branded crypto ATMs' global coverage will enable anyone to top up their crypto wallet using cash and withdraw their funds
                            </p>

                            <p className='block__text--text'>
                                Individuals can also transfer and buy Crypto via an Avencia ATM. Buying Crypto requires a simple KYC check, entering the address of the crypto wallet they wish to deposit money into, inserting the physical order money into the ATM, and finally confirming the transaction <a href='https://google.com'>read more</a>
                            </p>

                            <button className='button button__default block__text--button'>
                                Connect wallet
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='block'>
                <div className='container'>
                    <div className='block__inner w100 df aic jcsb'>
                        <div className='block__text--inner w100 df fdc aifs'>
                            <h2 className='headline1'>
                                Avencia Wallet
                            </h2>

                            <p className='headline6 block__text--subtitle'>
                                The Avencia wallet is a mobile app available on both iOS or Android. It can receive, hold and send supported cryptocurrencies
                            </p>

                            <p className='block__text--text'>
                                It can receive, hold and send supported ryptocurrencies. Our wallets come with an inbuilt AML and compliance system which analyse transaction patterns on the Blockchain address. We will notify users that they begin transacting with any address involved in a crime or suspicious activity
                            </p>

                            <button className='button button__default block__text--button'>
                                Connect wallet
                            </button>
                        </div>

                        <div className='block__img--inner df pen'>
                            <img src='./assets/img/block-img5.png' alt='img' className='img light' />
                            <img src='./assets/img/block-img5-dark.png' alt='img' className='img dark' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='block pr'>
                <img src='./assets/img/snake.png' alt='img' className='snake__img light pen' />
                <img src='./assets/img/snake-dark.png' alt='img' className='snake__img dark pen' />

                <div className='container'>
                    <div className='block__inner w100 df aic jcsb'>
                        <div className='block__img--inner df pen'>
                            <img src='./assets/img/block-img6.svg' alt='img' className='img light' />
                            <img src='./assets/img/block-img6-dark.svg' alt='img' className='img dark' />
                        </div>

                        <div className='block__text--inner w100 df fdc aifs'>
                            <h2 className='headline1'>
                                Avencia Card
                            </h2>

                            <p className='headline6 block__text--subtitle'>
                                The Avencia card allows users to spend supported cryptocurrencies (when paired with their Avencia wallet)
                            </p>

                            <p className='block__text--text'>
                                The card works via tap, swipe or chip-and-pin at 42 million payment terminals worldwide, with the merchant receiving payment in their local currency, allowing for seamless transactions <a href='https://google.com'>read more</a>
                            </p>

                            <button className='button button__default block__text--button'>
                                Connect wallet
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='block'>
                <div className='container'>
                    <div className='block__inner w100 df aic jcsb'>
                        <div className='block__text--inner w100 df fdc aifs'>
                            <h2 className='headline1'>
                                Avencia NFT
                            </h2>

                            <p className='headline6 block__text--subtitle'>
                                The NFT revolution is huge, which is why we will offer the ability to use NFTs as collateral for a loan
                            </p>

                            <p className='block__text--text'>
                                We have worked closely with DeFi and CeFi projects to enable us to bring liquidity to our customers in this straightforward way. We ensure that the lender recognises an increase in collateral value of the NFT during the loan period (many currently do not) <a href='https://google.com'>read more</a>
                            </p>

                            <button className='button button__default block__text--button'>
                                Connect wallet
                            </button>
                        </div>

                        <div className='block__img--inner df pen'>
                            <img src='./assets/img/block-img7.png' alt='img' className='img light' />
                            <img src='./assets/img/block-img7-dark.png' alt='img' className='img dark' />
                        </div>
                    </div>
                </div>
            </section>

            <Custody />

            <Talk />

            <Review />

            <Partners />

            <Question openModal={openModal} />

            <Token />

            <Roadmap />
            
            <Team />

            <Footer />

            <Modal active={modal} setModal={closeModal} />
        </>
    )
}

export default App;