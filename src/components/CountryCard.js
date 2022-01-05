import React, { useState } from 'react';
import countries from './countries';

const CountryCard = () => {
  const [index, setIndex] = useState(0);
  const { name, capital, language, currency, flag } = countries[index];

  const randomCountry = () => {
    let randomCountry = Math.floor(Math.random() * countries.length);
    setIndex(randomCountry);
  };
  return (
    <div>
      <h2 className='title'>Random Countries</h2>
      <div className='card-container'>
        <div>
          <img src={flag} alt='' />
          <h3>Country : {name}</h3>
          <h3>Capital : {capital}</h3>
          <h3>Language : {language.name}</h3>
          <h3>Currency : {currency.name}</h3>
        </div>
      </div>
      <div>
        <button onClick={randomCountry}>Select Country</button>
      </div>
    </div>
  );
};

export default CountryCard;
