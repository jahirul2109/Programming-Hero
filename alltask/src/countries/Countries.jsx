import { use, useState } from "react";
import './Countries.css';
import Country from "../country/Country";

export default function Countries ({countriesPromise, variable}) {
    const [visitedCountries , setVisitedCountries] = useState ([])
    const allData = use(countriesPromise);
    const country = allData.countries;
    const handelVisitedCountries = (country) => {
        const name = [...visitedCountries, country];
        setVisitedCountries(name)
    }
    console.log(country[1]);
    return (
        <div className="w-11/12  py-10 ">
        <h1 className="text-center">All Country name is here </h1>
        <ul className="text-center">Visited Country name {visitedCountries.map((name)=> <li> {name.name.common}</li>)} </ul>
        <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 w-10/12 ">
        {
            country.map((allCountry , index) => <Country  key={index} 
            country = { allCountry}
            handelVisitedCountries = {handelVisitedCountries}
            ></Country>)
        }
        </div>
        </div>
        </div>
    )
}