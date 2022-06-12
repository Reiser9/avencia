import React from 'react';

const TeamItem = ({img, name, role}) => {
    return(
        <div className='team__item card df fdc aifs'>
            <div className='team__item--img--inner df'>
                <img src={img} alt='team img' className='img' />
            </div>

            <p className='team__item--name headline5'>
                {name}
            </p>

            <p className='team__item--role headline8'>
                {role}
            </p>
        </div>
    )
}

export default TeamItem;