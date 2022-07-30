import React from 'react';

const Vesting = () => {
    return(
        <div className='dashboard__padding vesting w100 df fdc aifs'>
            <h2 className='dashboard__title text__center'>
                Vesting
            </h2>

            <div className="vesting__upload--inner w100 df fdc aifs">
                <p className="vesting__upload">
                    Select CSV
                </p>

                <div className="vesting__upload--input">
                    <input type="file" className="input" accept=".csv, text/csv, .xlsx" disabled />
                </div>
            </div>

            <p className="bridge__text">
                Not Allocated Amount in Vesting Contract: 0
            </p>

            <button className="button button__default vesting__button">
                <span>
                    Create Vesting Schedules
                </span>
            </button>

            <div className="vesting__content w100 df aic">
                <div className="application__item--input vesting__input pr">
                    <div className="application__item--input--text">Deposit amount</div>

                    <input type="number" className="default__input" placeholder="0" />
                </div>

                <button className="button button__default vesting__button--deposit fs">
                    <span>
                        Create Vesting Schedules
                    </span>
                </button>
            </div>

            <div className="vesting__table w100 df fdc aifs">
                <div className="vesting__table--item df aic w100">
                    <p className="vesting__table--box vesting__table--no">
                        No
                    </p>

                    <p className="vesting__table--box vesting__table--address">
                        Address
                    </p>

                    <p className="vesting__table--box vesting__table--start">
                        Start(UTC)
                    </p>

                    <p className="vesting__table--box vesting__table--period">
                        Period
                    </p>

                    <p className="vesting__table--box vesting__table--cliff">
                        Cliff
                    </p>

                    <p className="vesting__table--box vesting__table--interval">
                        Interval
                    </p>

                    <p className="vesting__table--box vesting__table--amount">
                        Amount
                    </p>
                </div>

                <div className="vesting__table--item df aic w100">
                    <p className="vesting__table--box vesting__table--no">
                        No data
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Vesting;