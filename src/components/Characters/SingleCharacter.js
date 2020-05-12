import React from 'react';

import './SingleCharacter.scss';

const SingleCharacter = ({ view, setView, name}) => view ? (
   
    <React.Fragment>
    {console.log(name, 'name passé?')}
        <div className="overlay" />    
        <div className="wrapper">    
            <div className="character-infos" >
                <button type="button" className="close" onClick={setView}>
                    <span>&times;</span>
                </button>
                
                <h1>
                    {name}
                </h1>    
            </div>
        
        </div>
    
    </React.Fragment>

) : null;

export default SingleCharacter;
