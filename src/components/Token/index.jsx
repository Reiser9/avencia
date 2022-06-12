import React from 'react';
import Chart from 'react-apexcharts';

const series = [30, 10, 10, 20, 20, 5, 5];
const options = {
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    labels: ['Seed Sale', 'Public', 'Staking Rewards', 'Team', 'Treasury Lp liquidity', 'Marketing', 'Partnerships'],
    colors:['#9C42F5', '#FF00AA', '#5D2DE1', '#00BBFF', '#00B8B9', '#FF5E00', '#FFAB00'],
    stroke: {
        width: 0
    }
};

const Question = () => {
    return(
        <section className='token default__pad pr'>
            <img src='./assets/img/token-img.svg' alt='img' className='token__img pen' />

            <div className='container'>
                <div className='token__inner w100 df aic'>
                    <div className='token__wrapper df fdc aifs w100'>
                        <h2 className='headline1'>
                            Tokenomics
                        </h2>

                        <div className='token__box w100'>
                            <div className='token__item df aic'>
                                <div className='token__item--img--inner df aic jcc fs'>
                                    <img src='./assets/img/token1.svg' alt='icon' className='img__auto' />
                                </div>

                                <div className='df fdc aifs'>
                                    <p className='headline5 token__item--title'>
                                        30%
                                    </p>

                                    <p className='body3 token__item--text'>
                                        Seed Sale
                                    </p>
                                </div>
                            </div>

                            <div className='token__item df aic'>
                                <div className='token__item--img--inner df aic jcc fs'>
                                    <img src='./assets/img/token2.svg' alt='icon' className='img__auto' />
                                </div>

                                <div className='df fdc aifs'>
                                    <p className='headline5 token__item--title'>
                                        10%
                                    </p>

                                    <p className='body3 token__item--text'>
                                        Public
                                    </p>
                                </div>
                            </div>

                            <div className='token__item df aic'>
                                <div className='token__item--img--inner df aic jcc fs'>
                                    <img src='./assets/img/token3.svg' alt='icon' className='img__auto' />
                                </div>

                                <div className='df fdc aifs'>
                                    <p className='headline5 token__item--title'>
                                        10%
                                    </p>

                                    <p className='body3 token__item--text'>
                                        Staking Rewards
                                    </p>
                                </div>
                            </div>

                            <div className='token__item df aic'>
                                <div className='token__item--img--inner df aic jcc fs'>
                                    <img src='./assets/img/token4.svg' alt='icon' className='img__auto' />
                                </div>

                                <div className='df fdc aifs'>
                                    <p className='headline5 token__item--title'>
                                        20%
                                    </p>

                                    <p className='body3 token__item--text'>
                                        Team
                                    </p>
                                </div>
                            </div>

                            <div className='token__item df aic'>
                                <div className='token__item--img--inner df aic jcc fs'>
                                    <img src='./assets/img/token5.svg' alt='icon' className='img__auto' />
                                </div>

                                <div className='df fdc aifs'>
                                    <p className='headline5 token__item--title'>
                                        20%
                                    </p>

                                    <p className='body3 token__item--text'>
                                        Treasury Lp liquidity
                                    </p>
                                </div>
                            </div>

                            <div className='token__item df aic'>
                                <div className='token__item--img--inner df aic jcc fs'>
                                    <img src='./assets/img/token6.svg' alt='icon' className='img__auto' />
                                </div>

                                <div className='df fdc aifs'>
                                    <p className='headline5 token__item--title'>
                                        5%
                                    </p>

                                    <p className='body3 token__item--text'>
                                        Marketing
                                    </p>
                                </div>
                            </div>

                            <div className='token__item df aic'>
                                <div className='token__item--img--inner df aic jcc fs'>
                                    <img src='./assets/img/token7.svg' alt='icon' className='img__auto' />
                                </div>

                                <div className='df fdc aifs'>
                                    <p className='headline5 token__item--title'>
                                        5%
                                    </p>

                                    <p className='body3 token__item--text'>
                                        Partnerships
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='token__chart'>
                        <Chart options={options} series={series} type="donut" width={359} height={359} />

                        <img src='./assets/img/n.svg' alt='icon' className='token__chart--icon pen' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Question;