import React from 'react';

const Main = () => {
    return(
        <section className='main pr'>
            <img src='./assets/img/main-bg.png' alt='img' className='main__bg light pen' />
            <img src='./assets/img/main-img.png' alt='img' className='main__img light pen' />

            <img src='./assets/img/main-bg-dark.png' alt='img' className='main__bg dark pen' />
            <img src='./assets/img/main-img-dark.png' alt='img' className='main__img dark pen' />

            <div className='container'>
                <div className='main__inner'>
                    <div className='main__text--inner w100 df fdc aifs pr'>
                        <h1 className='main__title headline1'>
                            Avencia is the <br/>first all in one aggregated crypto atm banking platform
                        </h1>

                        <button className='button button__default main__button'>
                            Connect wallet
                        </button>

                        <div className='main__point--inner df aic w100'>
                            <div className='main__point df fdc aifs pr'>
                                <p className='main__point--title headline4'>
                                    $134k+
                                </p>

                                <p className='main__point--text headline8'>
                                    earned on platform
                                </p>
                            </div>

                            <div className='main__point df fdc aifs pr'>
                                <p className='main__point--title headline4'>
                                    $134k+
                                </p>

                                <p className='main__point--text headline8'>
                                    earned on platform
                                </p>
                            </div>

                            <div className='main__point df fdc aifs pr'>
                                <p className='main__point--title headline4'>
                                    3k+
                                </p>

                                <p className='main__point--text headline8'>
                                    users on platform
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;