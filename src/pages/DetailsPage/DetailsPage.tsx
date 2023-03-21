import React from 'react'
import { useParams } from 'react-router-dom'

export const DetailsPage = () => {
  const { name } = useParams();

  return (
     <div>
         <h1>{name}</h1>
     </div>
  );
};