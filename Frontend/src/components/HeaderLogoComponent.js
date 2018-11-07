import React from "react";
import { Link } from 'react-router-dom';

const HeaderLogoComponent = () => {
    return(
        <div className={'header__logo'}>
            <Link to="/">
            <img alt="MobiquityInc Logo" src="https://www.usvolleybal.nl/wp-content/uploads/2017/10/Logo.png" className={'header__logo__img'}></img>
            <img alt="MobiquityInc Logo" src="https://pbs.twimg.com/profile_images/892159922577821696/_aVRVun8_400x400.jpg" className={'header__logo__img--small hidden'}></img>
            </Link>
        </div>
    )
}

export default HeaderLogoComponent;