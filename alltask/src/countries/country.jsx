import { use } from "react";

export default function Country ({countriesPromise, variable}) {
    const allData = use(countriesPromise);
    const country = allData.countries;
    console.log(country);
    return (
        <>
        <h1>All Country name is here </h1>
        <ul>
            {country.map((des, index)=> <li key={index}>{des.name.common}</li>)}
        </ul>
        </>
    )
}