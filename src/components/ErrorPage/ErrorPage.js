import React from 'react';
import { Link } from 'react-router-dom';

import './ErrorPage.scss';

import Error from '../../images/error.gif';

const ErrorPage = () => {
    return (
        <div className="container">
            <h1>Hey Mec! Tu t'es perdu?</h1>
            <img className="image-error" src={Error} alt="error page" />
            <Link to="/home"><h1 className="button-home">GO-HOME</h1></Link>
        </div>
    )
}

export default ErrorPage;
