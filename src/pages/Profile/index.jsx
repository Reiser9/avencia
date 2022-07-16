import React from 'react';

const Profile = () => {
    return(
        <div className='dashboard__padding profile w100 df fdc aifs'>
            <h2 className="dashboard__title text__center">
                My Profile
            </h2>

            <div className="profile__tabs w100 df aic fw">
                <button className="button our__tab profila__tab active">
                    <span className='our__tab--text'>
                        Personal
                    </span>
                </button>

                <button className="button our__tab profila__tab">
                    <span className='our__tab--text'>
                        Security
                    </span>
                </button>

                <button className="button our__tab profila__tab">
                    <span className='our__tab--text'>
                        Notifications
                    </span>
                </button>

                <button className="button our__tab profila__tab">
                    <span className='our__tab--text'>
                        Connect Social
                    </span>
                </button>
            </div>

            <div className="welcome__content w100 df fdc aic pr">
                <img src="/assets/img/welcome-bg.png" alt="bg" className="verification__bg pen" />

                <div className="verification__text--inner w100 df fdc aic">
                    <p className="dash__title text__center">
                        Upgrade Your Account
                    </p>

                    <p className="dash__text welcome__text text__center">
                        Upgrade your account to unlock full feature and increase your limit of transaction amount
                    </p>

                    <div className="profile__button--inner w100 df aic jcc">
                        <button className="button profile__button default__hover">
                            <span>
                                Learn More
                            </span>
                        </button>

                        <button className="button button__default profile__button--grad">
                            <span>
                                Upgrade
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="profile__inner w100">
                <div className="profile__item df fdc aifs">
                    <div className="profile__item--title--inner w100 df aic jcsb">
                        <p className="profile__item--title">
                            Personal Information
                        </p>

                        <button className="button profile__item--edit">
                            Edit
                        </button>
                    </div>

                    <div className="application__item--box w100">
                        <div className="application__item--input pr">
                            <div className="application__item--input--text">
                                Full name
                            </div>

                            <input type="text" className="default__input" placeholder='Input your full name' />
                        </div>

                        <div className="application__item--input pr">
                            <div className="application__item--input--text">
                                Display name
                            </div>

                            <input type="text" className="default__input" placeholder='Input your display name' />
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

                            <input type="text" className="default__input" placeholder='Input your date of birth' />
                        </div>

                        <div className="application__item--input pr">
                            <div className="application__item--input--text">
                                Address
                            </div>

                            <input type="text" className="default__input" placeholder='Input your address' />
                        </div>
                    </div>
                </div>

                <div className="profile__item df fdc aifs">
                    <div className="profile__item--title--inner w100 df aic jcsb">
                        <p className="profile__item--title">
                            Preferences
                        </p>

                        <button className="button profile__item--edit">
                            Edit
                        </button>
                    </div>

                    <div className="application__item--box full__items w100">
                        <div className="application__item--input pr">
                            <div className="application__item--input--text">
                                Language
                            </div>

                            <input type="text" className="default__input" placeholder='Input language' />
                        </div>

                        <div className="application__item--input pr">
                            <div className="application__item--input--text">
                                Date format
                            </div>

                            <input type="text" className="default__input" placeholder='Input date format' />
                        </div>

                        <div className="application__item--input pr">
                            <div className="application__item--input--text">
                                Date of birth
                            </div>

                            <input type="text" className="default__input" placeholder='Input date of birth' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;