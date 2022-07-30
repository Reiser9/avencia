import React from 'react';

const Bridge = () => {
    return(
        <div className='dashboard__padding bridge w100 df fdc aifs'>
            <h2 className='dashboard__title text__center'>
                Bridge
            </h2>

            <p className="bridge__text">
                Token Balance: 0.0
            </p>

            <p className="bridge__text">
                Required Transaction Fee to cross-chain Transfer: 0.0
            </p>

            <p className="bridge__text">
                Minimum Token Amount to Transfer: 0
            </p>

            <div className="bridge__inner w100 df aic">
                <div className="application__item--input bridge__input pr">
                    <div className="application__item--input--text">Transfer amount</div>

                    <input type="number" className="default__input" placeholder="0" />
                </div>

                <div className="bridge__select--content df aic">
                    <button className="button button__default bridge__select--button">
                        <span>
                            Button
                        </span>
                    </button>

                    <img src="/assets/img/arrow-right.svg" alt="arrow" className="bridge__arrow--img light" />
                    <img src="/assets/img/arrow-right-dark.svg" alt="arrow" className="bridge__arrow--img dark" />

                    <select className="select bridge__select">
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                    </select>
                </div>

                <button className="button button__default bridge__button">
                    <span>
                        Approve
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Bridge;