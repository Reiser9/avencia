import React from 'react';

const ReviewItem = ({img, name, text, rate}) => {
    return(
        <div className='review__item df fdc aifs'>
            <div className='review__item--text card headline5'>
                {text}
            </div>

            <div className='review__item--author--inner w100 df aic'>
                <div className='review__item--author--img--inner df fs'>
                    <img src={img} alt='img' className='img' />
                </div>

                <div className='w100 df fdc aifs'>
                    <p className='headline6'>
                        {name}
                    </p>

                    <div className='review__item--rate--inner headline8 df aic'>
                        <img src='./assets/img/star.svg' alt='rate' className='review__item--rate fs' />

                        {rate}/5
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewItem;