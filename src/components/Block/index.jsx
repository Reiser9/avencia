import React from 'react';

const Block = () => {
    return(
        <section className='block'>
            <div className='container'>
                <div className='block__inner w100 df aic jcsb'>
                    <div className='block__text--inner w100 df fdc aifs'>
                        <h2 className='headline1'>
                            Avencia NFT
                        </h2>

                        <p className='headline6 block__text--subtitle'>
                            The NFT revolution is huge, which is why we will offer the ability to use NFTs as collateral for a loan
                        </p>

                        <p className='block__text--text'>
                            We have worked closely with DeFi and CeFi projects to enable us to bring liquidity to our customers in this straightforward way. We ensure that the lender recognises an increase in collateral value of the NFT during the loan period (many currently do not) <a href='https://google.com'>read more</a>
                        </p>

                        <button className='button button__default block__text--button'>
                            Connect wallet
                        </button>
                    </div>

                    <div className='block__img--inner df pen'>
                        <img src='./assets/img/block-img7.png' alt='img' className='img light' />
                        <img src='./assets/img/block-img7-dark.png' alt='img' className='img dark' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Block;