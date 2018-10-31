import React from "react";
import { Link } from 'react-router-dom';

const BackButtonComponent = () => {
    return(
        <Link to="/">
            <button className="standard__button__style">Back</button>
        </Link>
    )
}

export default BackButtonComponent;