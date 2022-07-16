import React from 'react';

const Application = () => {
    return(
        <div className='dashboard__padding application w100 df fdc aic'>
            <h2 className="dashboard__title text__center">
                KYC Application
            </h2>

            <div className="application__content w100 df jcc">
                <div className="application__wrapper w100 df fdc aifs">
                    <div className="application__item w100 df fdc aifs">
                        <h3 className="application__item--title headline4">
                            Personal Details
                        </h3>

                        <div className="application__item--box w100">
                            <div className="application__item--input pr">
                                <div className="application__item--input--text">
                                    First name
                                </div>

                                <input type="text" className="default__input" placeholder='Input your first name' />
                            </div>

                            <div className="application__item--input pr">
                                <div className="application__item--input--text">
                                    Last name
                                </div>

                                <input type="text" className="default__input" placeholder='Input your last name' />
                            </div>

                            <div className="application__item--input pr">
                                <div className="application__item--input--text">
                                    Email
                                </div>

                                <input type="text" className="default__input" placeholder='Input your email' />
                            </div>

                            <div className="application__item--input pr">
                                <div className="application__item--input--text">
                                    Phone number
                                </div>

                                <input type="text" className="default__input" placeholder='Input your phone number' />
                            </div>

                            <div className="application__item--input pr">
                                <div className="application__item--input--text">
                                    Date of birth
                                </div>

                                <input type="text" className="default__input" placeholder='mm/dd/yyyy' />
                            </div>

                            <div className="application__item--input pr">
                                <div className="application__item--input--text">
                                    Telegram username
                                </div>

                                <input type="text" className="default__input" placeholder='Input your telegram username' />
                            </div>
                        </div>
                    </div>

                    <div className="application__item w100 df fdc aifs">
                        <h3 className="application__item--title headline4">
                            Your Address
                        </h3>

                        <div className="application__item--box w100">
                            <div className="application__item--input pr full">
                                <div className="application__item--input--text">
                                    Address
                                </div>

                                <input type="text" className="default__input" placeholder='Input your address' />
                            </div>

                            <div className="application__item--input pr">
                                <div className="application__item--input--text">
                                    City
                                </div>

                                <input type="text" className="default__input" placeholder='Input your city' />
                            </div>

                            <div className="application__item--input pr">
                                <div className="application__item--input--text">
                                    State
                                </div>

                                <input type="text" className="default__input" placeholder='Input your state' />
                            </div>

                            <div className="application__item--input pr">
                                <div className="application__item--input--text">
                                    Nationality
                                </div>

                                <input type="text" className="default__input" placeholder='Input your nationality' />
                            </div>

                            <div className="application__item--input pr">
                                <div className="application__item--input--text">
                                    Zip code
                                </div>

                                <input type="text" className="default__input" placeholder='Input your zip code' />
                            </div>
                        </div>
                    </div>

                    <div className="application__item w100 df fdc aifs">
                        <h3 className="application__item--title headline4">
                            Personal Details
                        </h3>

                        <div className="application__item--data--choose w100 df aic fw">
                            <button className="button application__item--data active df aic">
                                <span className="application__item--data--circle pr"></span>

                                passport
                            </button>

                            <button className="button application__item--data df aic">
                                <span className="application__item--data--circle pr"></span>

                                national ID
                            </button>

                            <button className="button application__item--data df aic">
                                <span className="application__item--data--circle pr"></span>
                                driving license
                            </button>
                        </div>

                        <div className="application__item--points w100 df fdc aifs">
                            <p className="application__points--title">
                                Please make sure to:
                            </p>

                            <div className="welcome__kys--point df aic">
                                <div className="welcome__kys--point--icon df">
                                    <img src="/assets/img/check-white.svg" alt="icon" className="img" />
                                </div>

                                Chosen credential must not be expaired
                            </div>

                            <div className="welcome__kys--point df aic">
                                <div className="welcome__kys--point--icon df">
                                    <img src="/assets/img/check-white.svg" alt="icon" className="img" />
                                </div>

                                Document should be good condition and clearly visible
                            </div>

                            <div className="welcome__kys--point df aic">
                                <div className="welcome__kys--point--icon df">
                                    <img src="/assets/img/check-white.svg" alt="icon" className="img" />
                                </div>

                                Make sure that there is no light glare on the card
                            </div>
                        </div>

                        <div className="application__upload--inner w100 pr">
                            <div className="application__upload--box w100 df fdc aifs">
                                <p className="application__upload--title">
                                    Upload Your Front Copy
                                </p>

                                <p className="application__upload--text headline9">
                                    JPG, PNG, WEBM or PDF. Max: 6 MB
                                </p>

                                <input className="input__file" id="front" type="file" accept=".png, .jpg, .webm, .pdf" />

                                <label htmlFor="front" className="application__upload--button default__hover df aic">
                                    <img src="/assets/img/out.svg" alt="icon" className="application__upload--button--icon" />

                                    Upload Copy
                                </label>
                            </div>

                            <img src="/assets/img/front.svg" alt="front" className="application__upload--img pen" />
                        </div>

                        <div className="application__upload--inner w100 pr">
                            <div className="application__upload--box w100 df fdc aifs">
                                <p className="application__upload--title">
                                    Upload Your Back Copy
                                </p>

                                <p className="application__upload--text headline9">
                                    JPG, PNG, WEBM or PDF. Max: 6 MB
                                </p>

                                <input className="input__file" id="front" type="file" accept=".png, .jpg, .webm, .pdf" />

                                <label htmlFor="front" className="application__upload--button default__hover df aic">
                                    <img src="/assets/img/out.svg" alt="icon" className="application__upload--button--icon" />

                                    Upload Copy
                                </label>
                            </div>

                            <img src="/assets/img/back.svg" alt="back" className="application__upload--img pen" />
                        </div>

                        <div className="application__agree--inner w100 df fdc aifs">
                            <input className="input__checkbox" id="agree1" type="checkbox" />

                            <label htmlFor="agree1" className="application__agree--label pr">
                                I Have Read <a href="https://google.com">Terms Of Condition</a> and <a href="https://google.com">Privacy Policy</a>
                            </label>

                            <input className="input__checkbox" id="agree2" type="checkbox" />

                            <label htmlFor="agree2" className="application__agree--label pr">
                                All Personal Information I Entered Is Correct
                            </label>
                        </div>

                        <button className="button button__default application__item--button w100 headline8">
                            <span>
                                Proccess for Verify
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Application;