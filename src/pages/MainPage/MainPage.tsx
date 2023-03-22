import React, { useEffect, useState } from 'react'
import { generatePath, Link } from 'react-router-dom';
import { CountryList } from '../../components/organisms/CountryList/CountryList';
import { ROUTE } from '../../router/routes';

export const MainPage = () => {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(setCountries);
  }, []);
  
  return (
    <div>
         <CountryList countries={countries} />   
    </div>
  );
};
