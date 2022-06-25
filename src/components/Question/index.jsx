import React from 'react';

const Question = ({openModal}) => {
    return(
        <section className='question default__pad'>
            <div className='container'>
                <div className='question__inner card w100'>
                    <img src='./assets/img/question-bg.svg' alt='bg' className='question__bg light pen' />
                    <img src='./assets/img/question.svg' alt='question' className='question__img light pen' />

                    <img src='./assets/img/question-bg-dark.svg' alt='bg' className='question__bg dark pen' />
                    <img src='./assets/img/question-dark.svg' alt='question' className='question__img dark pen' />

                    <div className='question__text--inner df fdc aifs'>
                        <h2 className='headline1'>
                            Have Other Questions About Avencia?
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