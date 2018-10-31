import React from "react";
import { Link } from 'react-router-dom';

const HeaderLogoComponent = () => {
    return(
        <div className={'header__logo'}>
            <Link to="/">
            <img alt="MobiquityInc Logo" src="https://www.usvolleybal.nl/wp-content/uploads/2017/10/Logo.png" className={'header__logo__img'}></img>
            </Link>
        </div>
    )
}

export default HeaderLogoComponent;