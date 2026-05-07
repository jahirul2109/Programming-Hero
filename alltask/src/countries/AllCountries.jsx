import { Suspense, useState } from "react";
import Country from "./country";

const countriesPromise =  fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())
export default function AllCountries () {

    return (
        <Suspense fallback = { <p> Data is loading</p> }>
            <Country countriesPromise = {countriesPromise}></Country>
        </Suspense>
    )    
}