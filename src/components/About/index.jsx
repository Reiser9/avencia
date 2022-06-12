import React from 'react';

const About = () => {
    return(
        <section className='about default__pad pr' id='about'>
            <img src='./assets/img/about-bg.svg' alt='img' className='about__bg pen' />
            <img src='./assets/img/about-bg2.png' alt='img' className='about__bg2 pen' />

            <div className='container'>
                <div className='about__inner card w100 df aifs jcsb pr'>
                    <h2 className='about__title headline1'>
                        About Avencia
                    </h2>

                    <div className='about__wrapper w100'>
                        <p className='about__text w100'>
                            Avencia Digital is the world's first crypto-regulated bank account powered by crypto services and ecosystems, allowing retail and institutional participants to access every benefit of Centralized and Decentralized financial products with the traditional bank accounts and payment services
                        </p>
                    </div>

                    <div className='about__wrapper w100 df fdc aifs'>
                        <p className='about__text w100'>
                            Innovations in Crypto applications are promising to transform how we look at finances in the future. While adoption is growing, applications still have little interaction with the real world. It still is a costly and complex conversion from Crypto to fiat currencies before users can use their assets in mainstream transactions
                        </p>

                        <button className='button button__default about__button'>
                            Connect wallet
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;