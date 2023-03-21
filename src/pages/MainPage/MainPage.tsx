import React from 'react'
import { generatePath, Link } from 'react-router-dom';
import { ROUTE } from '../../router/routes';

export const MainPage = () => {
  const countries = [
    {id: 1, name: 'John' },
    {id: 2, name: 'Nill' },  
  ]
  return (
    <div>
        <h1>MAINPAGE</h1>
        {countries.map(country => {
          return (
            <Link to={generatePath(ROUTE.DETAILS, {id: country.name })} >
              {country.name}
            </Link >
          );  
        })}
    </div>
  );
};
