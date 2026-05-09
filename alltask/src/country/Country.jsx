import { useState } from "react"

export default function Country({ country, handelVisitedCountries, handleFlage }) {
    const [visited, setVisited] = useState(false);
    const [addFlag, setFlag] = useState(false);

    const hangdleAddFlag = ()=> {
        setFlag (pre => !pre)
        handleFlage(country.flags.flags.png)
    }
    // console.log(country)
    const handelVisite = () => {
        const newVisited = !visited;
        setVisited((pre) => !pre)
        handelVisitedCountries(country, newVisited);


    }
    return (
        <div className={` py-4 px-5 ${visited ? "bg-green-400 transition  duration-300" : "border-2  border-green-500 transition duration-300 "}`}>
            <img className="w-full rounded-lg" src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>{country.name.common}</h1>
            <p>Population {country.population.population}</p>
            <p>
                {(country.population.population) > 30000000 ? "Big Country " : "Small Country"}
            </p>
         <div className="flex justify-between flex-nowrap items-center">
                        <button className="btn cursor-pointer border rounded-lg py-3 px-5 transition duration-300 bg-green-700 text-white" onClick={() => {
                handelVisite()
            }}> {visited ? "Visited" : "Not Visited"}</button>
            <button className="btn cursor-pointer border rounded-lg py-3 px-5 transition duration-300 bg-green-700 text-white" onClick={() => {
                hangdleAddFlag()
            }}> Add Flag </button>
         </div>
        </div>
    )
}