import React from 'react';

const PartnerTab = ({name, active, callback}) => {
    return(
        <button onClick={callback} className={`button our__tab${active ? ' active' : ''}`}>
            <span className='our__tab--text'>
                {name}
            </span>
        </button>
    )
}

export default PartnerTab;