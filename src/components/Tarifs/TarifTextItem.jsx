import React from 'react';

const TarifTextItem = ({data}) => {
    return(
        <>
            <div className={`tarifs__point${typeof data == 'string' ? ' headline9' : ''} df aic`}>
                {typeof data == 'string'
                ? data
                : <img src={`./assets/img/${data ? 'check' : 'cross'}.svg`} alt='check' className='img__auto' />}
            </div>
        </>
    )
}

export default TarifTextItem;