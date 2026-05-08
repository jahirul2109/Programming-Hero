import { Suspense, useState } from "react";
import Countries from "./countries/Countries";
const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
    .then(res => res.json())
export default function AllCountries() {

    return (
        <Suspense fallback={<p> Data is loading</p>}>
            <Countries countriesPromise={countriesPromise}></Countries>
        </Suspense>
    )
}