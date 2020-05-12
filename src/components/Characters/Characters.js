import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

import './Characters.scss';
import SingleCharacter from './SingleCharacter';
import LogiqueModale from './LogiqueModale';

const Characters = (props) => {
  const API_PUBLIC_KEY = '64d6ef8137f2108a3ce5c93a79cc0790';
  const hash = '6ce72967635ba8bc4194fff75ae2d5e9';

  const [searchValue, setSearchValue] = useState('');
  const [characterInfos, setCharacterInfos] = useState({ results: [] });

  const { view, toggle } = LogiqueModale();

  const handleChange = (event) => {
    setSearchValue(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchValue}&ts=1&limit=100&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
      .then((response) => {
        setCharacterInfos(response.data.data);
        console.log(response.data.data,'reponse de axios');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form className="form-search" onSubmit={handleSubmit}>
        <input
          className="input-value"
          value={searchValue}
          onChange={handleChange}
          type="text"
          placeholder=" Rechercher un personnage..."
        />
      </form>
      <div className="fiches">
        {characterInfos.results.map((result) => (
          <div onClick={toggle} className="fiche" key={result.id}>
            <h2 className="fiche-title">{result.name}</h2>
            <img className="image" src={`${result.thumbnail.path}.${result.thumbnail.extension}`} />
            <SingleCharacter view={view} setView={toggle} result={result} />
          </div>
        ))}
        {console.log(characterInfos.results[1], 'c mon info')}
      </div>
    </>
  );
};

export default Characters;
