import { use, useState } from "react";
import Country from "../country/Country";

export default function Countries({ countriesPromise, variable }) {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFalg , setVisitedFlag] = useState ([])
    const allData = use(countriesPromise);
    const country = allData.countries;
    const handelVisitedCountries = (country, visited) => {
        if (visited) {
            let name = visitedCountries.find((c) => c.name.common === country.name.common);
            if (!name) {
                name = [...visitedCountries, country]
                setVisitedCountries(name)
            }
        } else {
            const reminig = visitedCountries.filter(
                c => c.name.common !== country.name.common
            )
            setVisitedCountries (reminig)
        }
    }
    const handleFlage = (flag)=> {
        const allFlag = [...visitedFalg, flag];
        setVisitedFlag(allFlag)
    }
    console.log(country[1]);
    return (
        <div className="w-11/12  py-10 mx-auto text-white ">
            <h1 className="text-center">All Country name is here </h1>
            
            <h1 className="text-center"> Total Visited Country {visitedCountries.length}</h1>
            <h1 className="text-center">Visited Country Flag :</h1>
            <div className="flex flex-wrap justify-center items-center w-8/12 mx-auto">
                {visitedFalg.map((flag , index)=> <img className="w-20 " src= {flag} key={index} alt="" />)}
            </div>
            <ul className="text-center">Visited Country name {visitedCountries.map((name, index) => <li key={index}> {name.name.common}</li>)} </ul>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 w-10/12 gap-10 ">
                    {
                        country.map((allCountry, index) => <Country key={index}
                            country={allCountry}
                            handelVisitedCountries={handelVisitedCountries}
                            handleFlage = {handleFlage}
                        ></Country>)
                    }
                </div>
            </div>
        </div>
    )
}