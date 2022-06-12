import React from 'react';

const Modal = ({active, setModal}) => {
    return(
        <div className={`modal${active ? ' active' : ''}`} onClick={setModal}>
            <div className='modal__inner w100 df aic jcc'>
                <div className='modal__content w100 df fdc aifs pr' onClick={(e) => e.stopPropagation()}>
                    <div className='w100 df aic jcsb'>
                        <h2 className='headline3'>
                            Contact Us
                        </h2>

                        <img src='./assets/img/cross.svg' alt='img' className='modal__cross' onClick={setModal} />
                    </div>

                    <div className='modal__wrapper w100 df fdc aifs'>
                        <div className='modal__input--inner w100 df fdc aifs'>
                            <p className='modal__input--title headline9'>
                                Your Email
                            </p>

                            <input placeholder='Insert your email' className='input modal__input w100' />
                        </div>

                        <div className='modal__input--inner w100 df fdc aifs'>
                            <p className='modal__input--title headline9'>
                                Question
                            </p>

                            <textarea placeholder='Insert your question' className='input modal__input modal__textarea w100'></textarea>
                        </div>
                    </div>

                    <button className='button button__default modal__button w100'>
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal;