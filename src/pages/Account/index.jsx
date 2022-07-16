import React from 'react';

const Account = () => {
    return(
        <div className='dashboard__padding swap w100 df fdc aifs'>
            <div className="wallets__title--inner w100 df aic jcsb">
                <h2 className="dashboard__title text__center">
                    My Account
                </h2>

                <div className="wallets__button--inner df aic">
                    <button className="button default__hover wallets__button headline8">
                        Send
                    </button>

                    <button className="button default__hover wallets__button df aic headline8">
                        <img src="/assets/img/arrow-up.svg" alt="icon" className="wallets__button--icon" />

                        Withdraw
                    </button>

                    <button className="button button__default wallets__button--last headline8">
                        <span className="df aic">
                            <img src="/assets/img/arrow-down.svg" alt="icon" className="wallets__button--icon" />

                            Deposit
                        </span>
                    </button>
                </div>
            </div>

            
        </div>
    )
}

export default Account;