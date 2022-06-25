import React from 'react';

import TarifItem from './TarifItem';

const dataTarifs = [
    {
        name: 'Bronze',
        point: '500',
        points: {
            account: true,
            virtualCard: true,
            debitCard: false,
            freeExchange: false,
            price: '$200 / month',
            support: true,
            cryptoBack: '0%'
        }
    },
    {
        name: 'Silver',
        point: '3,000',
        points: {
            account: true,
            virtualCard: true,
            debitCard: true,
            freeExchange: false,
            price: '$300 / month',
            support: true,
            cryptoBack: '0.5%'
        }
    },
    {
        name: 'Gold',
        point: '10,000',
        points: {
            account: true,
            virtualCard: true,
            debitCard: true,
            freeExchange: true,
            price: '$500 / month',
            support: true,
            cryptoBack: '1%'
        }
    },
    {
        name: 'Platinum',
        point: '50,000',
        points: {
            account: true,
            virtualCard: true,
            debitCard: true,
            freeExchange: true,
            price: '$750 / month',
            support: true,
            cryptoBack: '3%'
        }
    },
    {
        name: 'Diamond',
        point: '100,000',
        points: {
            account: true,
            virtualCard: true,
            debitCard: true,
            freeExchange: true,
            price: '$1000 / month',
            support: true,
            cryptoBack: '5%'
        }
    }
]

const Tarifs = () => {
    return(
        <section className='tarifs' id='tarifs'>
            <div className='container'>
                <div className='tarifs__inner w100'>
                    <div className='tarifs__item--empty df fdc aife'>
                        <h2 className='headline1 text__end'>
                            Our Tariffs
                        </h2>

                        <div className='tarifs__empty--wrapper w100 df fdc aife'>
                            <div className='tarifs__point headline9 text__end df aic'>
                                Free banking accounts
                            </div>

                            <div className='tarifs__point headline9 text__end df aic'>
                                Free Virtual Card
                            </div>

                            <div className='tarifs__point headline9 text__end df aic'>
                                Free debit card
                            </div>

                            <div className='tarifs__point headline9 text__end df aic'>
                                Free exchange &amp; transaction charges
                            </div>

                            <div className='tarifs__point headline9 text__end df aic'>
                                ATM Withdrawals
                            </div>

                            <div className='tarifs__point headline9 text__end df aic'>
                                24/7 customer live chat support
                            </div>

                            <div className='tarifs__point headline9 text__end df aic'>
                                Crypto back
                            </div>
                        </div>
                    </div>

                    {dataTarifs.map((d, id) => <TarifItem key={id} name={d.name} point={d.point} points={d.points}  />)}
                </div>
            </div>
        </section>
    )
}

export default Tarifs;