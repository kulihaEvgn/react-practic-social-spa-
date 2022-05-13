import React from 'react'
import preloader from '../../../asets/preloader.gif';

type PropsType = {};

const Preloader: React.FC<PropsType> = () => {
    return (
        <div>
            <img src={preloader} alt='loading' />
        </div>
    )
}

export default Preloader