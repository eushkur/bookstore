import React, { useEffect, useState } from 'react'
import { CountryList } from '../../components/organisms/CountryList/CountryList'

export const FavoritesPage = () => {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/currency/dollar')
      .then(res => res.json())
      .then(setCountries);
  }, []);
  return (
    <div>
        <h1>Favorites</h1>
        <CountryList countries={countries} />
    </div>
  )
}
