import React from 'react';

const ArrowDownIcon = ({rotate, className}) => {
    return(
        <svg className={`${className}${rotate ? ' rotate' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="icon__dash" d="M11.9961 16.75C12.332 16.75 12.6211 16.6172 12.8789 16.3594L18.7305 10.3594C18.9336 10.1562 19.043 9.90625 19.043 9.60938C19.043 9 18.5586 8.51562 17.957 8.51562C17.6602 8.51562 17.3789 8.63281 17.1602 8.85156L12.0039 14.1641L6.83984 8.85156C6.62109 8.64062 6.34766 8.51562 6.04297 8.51562C5.44141 8.51562 4.95703 9 4.95703 9.60938C4.95703 9.90625 5.06641 10.1562 5.26953 10.3672L11.1211 16.3594C11.3945 16.625 11.668 16.75 11.9961 16.75Z"/>
        </svg>
    )
}

export default ArrowDownIcon;