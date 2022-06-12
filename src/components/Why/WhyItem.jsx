import React from 'react';

const WhyItem = ({img, title, text}) => {
    return(
        <div className='why__item card df aifs'>
            <div className='why__item--img--inner df aic jcc fs'>
                <img src={img} alt='icon' className='img__auto' />
            </div>

            <div className='why__item--text--inner df fdc aifs'>
                <p className='why__item--text--title headline5'>
                    {title}
                </p>

                <p className='why__item--text--text body2'>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default WhyItem;