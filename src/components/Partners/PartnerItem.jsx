import React from 'react';

const PartnerItem = ({img, name}) => {
    return(
        <div className='our__item card df fdc aic'>
            <div className='our__item--img--inner df aic jcc'>
                <img src={img} alt='partner' className='img' />
            </div>

            <p className='headline5 our__item--name text__center'>
                {name}
            </p>
        </div>
    )
}

export default PartnerItem;