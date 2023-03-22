import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "../../../router/routes";


interface CountryListProps {
  countries: any[];
}

export const CountryList = ({ countries } : CountryListProps) => {
  return (
    <div className="d-flex flex-wrap gap-3">
      {countries.map(country => {
        return (
          <div className="bg-info p-3 rounded" style={{ width: "300" }}>
             <Link to={generatePath(ROUTE.DETAILS, { name: country.name.common })}>
                   {country.name.common}
             </Link>
          </div>
         );  
      })}
    </div>
  );
};

