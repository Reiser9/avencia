import React from 'react';

const Verification = () => {
    return(
        <div className='dashboard__padding verification w100 df fdc aic'>
            <h2 className="dashboard__title text__center">
                KYC Verification
            </h2>

            <div className="verification__content w100 df fdc aic pr">
                <img src="/assets/img/verification-bg.png" alt="bg" className="verification__bg pen" />

                <div className="verification__text--inner w100 df fdc aic">
                    <p className="dash__title text__center">
                        Let&lsquo;s Finish Registration
                    </p>

                    <p className="dash__text verification__text--text text__center">
                        You have not submitted your necessary documents to verify your identity. In order to purchase our tokens, please verify your identity
                    </p>

                    <button className="button button__default verification__text--button">
                        <span>
                            Complete Your KYC
                        </span>
                    </button>

                    <div className="verification__text--contact text__center">
                        If you have any question, please contact our support team <a href="https://google.com">info@softnio.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verification;