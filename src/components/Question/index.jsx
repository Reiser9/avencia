import React from 'react';

const Question = ({openModal}) => {
    return(
        <section className='question default__pad'>
            <div className='container'>
                <div className='question__inner card w100'>
                    <img src='./assets/img/question-bg.svg' alt='bg' className='question__bg pen' />
                    <img src='./assets/img/question.svg' alt='question' className='question__img pen' />

                    <div className='question__text--inner df fdc aifs'>
                        <h2 className='headline1'>
                            Have Other Questions About Avensia?
                        </h2>

                        <p className='question__text--text'>
                            We are always here to answer questions.<br/>If you have a question about our products, don't hesitate to send it to our team
                        </p>

                        <button className='button button__default question__text--button' onClick={openModal}>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Question;