import React from 'react';

import WhyItem from './WhyItem';

const DataWhy = [
    {
        img: './assets/img/why1.svg',
        title: 'Crypto Back',
        text: 'from 5% to 1% on every in-store purchase paid in Avencia Tokens'
    },
    {
        img: './assets/img/why2.svg',
        title: 'Institutional Offers',
        text: 'discount by institution/merchant networks, paid in Avencia Tokens'
    },
    {
        img: './assets/img/why3.svg',
        title: 'Travel Offers',
        text: 'up to 5% for eligible foreign transactions paid in Avencia Tokens'
    },
    {
        img: './assets/img/why4.svg',
        title: 'Business Rewards',
        text: 'Business incentives for using platform paid in Avencia Tokens'
    },
    {
        img: './assets/img/why5.svg',
        title: 'Referral Bonus',
        text: '20 Avencia tokens on signing up through your referral link'
    },
    {
        img: './assets/img/why6.svg',
        title: 'Deposit Incentive',
        text: 'Reward 5% in Avencia Token'
    },
    {
        img: './assets/img/why7.svg',
        title: 'Sign-up Bonus',
        text: '10 Avencia tokens when you sign up on Avencia App'
    }
]

const Why = () => {
    return(
        <section className='why default__pad' id='why'>
            <div className='container'>
                <div className='why__inner w100'>
                    <div className='why__item--big'>
                        <div className='why__item--box df fdc aifs w100'>
                            <h2 className='headline1'>
                                Why Avencia
                            </h2>

                            <p className='why__item--box--text'>
                                Avencia is the first fully compliant, CeDeFi exchange that provides full exposure of traditional fiar currency with our extensive ATM network.
                            </p>
                        </div>
                    </div>

                    {DataWhy.map((d, id) => <WhyItem key={id} img={d.img} title={d.title} text={d.text} />)}

                    <div className='why__mobile w100'>
                        {DataWhy.map((d, id) => <WhyItem key={id} img={d.img} title={d.title} text={d.text} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why;