import React from 'react';

import TarifTextItem from './TarifTextItem';

const TarifItem = ({name, point, points}) => {
    const [pointsArr, setPointsArr] = React.useState([]);

    React.useEffect(() => {
        setPointsArr(Object.keys(points).map(keys => {
            return points[keys];
        }));
    }, [points])

    return(
        <div className={`tarifs__item ${name.toLowerCase()} card df fdc aic`}>
            <div className='tarifs__item--box w100 df fdc aic'>
                <div className='tarifs__item--img--inner df aic jcc'>
                    <img src='./assets/img/star-white.svg' alt='img' className='img__auto' />
                </div>

                <p className='tarifs__item--name text__center headline4'>
                    {name}
                </p>

                <p className='tarifs__item--number text__center headline9'>
                    {point}
                </p>
            </div>

            <div className='tarifs__wrapper w100 df fdc aic'>
                {pointsArr.map((d, id) => <TarifTextItem key={id} data={d} />)}
            </div>

            <button className='button button__default tarifs__item--button'>
                Get Started
            </button>
        </div>
    )
}

export default TarifItem;