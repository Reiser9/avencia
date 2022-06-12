import React from 'react';

const Vision = () => {
    return(
        <section className='vision'>
            <div className='container'>
                <div className='vision__inner df aic jcsb'>
                    <div className='vision__img--inner df pen fs'>
                        <img src='./assets/img/vision-img.svg' alt='img' className='img' />
                    </div>

                    <div className='vision__box w100'>
                        <div className='vision__text--inner w100 df fdc aifs'>
                            <h2 className='headline1'>
                                Our vision
                            </h2>

                            <p className='vision__text--subtitle headline6'>
                                By streamlining the complex world of crypto into one platform
                            </p>

                            <p className='vision__text--text'>
                                Using our innovative technologies and protocols, we aim to bring the most efficient and
                                effective trading experience to our retail and institutional customers by giving them
                                accessibility to every CeFI and DeFi ecosystem connected with the API keys <a href='https://google.com'>read more</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vision;