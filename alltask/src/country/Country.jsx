import { useState } from "react"

export default function Country({ country, handelVisitedCountries }) {
    const [visited, setVisited] = useState(false);
    handelVisitedCountries(country)
    // console.log(country)
    return (
        <div className="border border-green-400">
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>{country.name.common}</h1>
            <button className="btn cursor-pointer border rounded-lg bg-green-700 text-white" onClick={() => {
                setVisited((pre) => !pre)

            }}> {visited ? "visited" : "Not Visited"}</button>
        </div>
    )
}