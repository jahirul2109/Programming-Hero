import { useState } from "react";

export default function Toggle() {
    const [ isLo, setIsLo ] = useState(false);
    const name = "jahirul";
    return (
        <>
           <h1 className="">{`${isLo ? `his Name is ${name}` : "Name is hide"}`}</h1>
            <input
                type="checkbox"
                name=""
                id="toggle"
                className="hidden"
                checked={isLo}
                onChange={() => setIsLo(!isLo)}
            />
            <label htmlFor="toggle"
                className={`w-16 h-8 flex items-center shadow-md rounded-full p-2 cursor-pointer transition duration-300 ${isLo ? "bg-green-500" : "bg-gray-500"}`}
            >
                <div className= {` bg-white w-6 h-6 rounded-full shadow-md transform transition duration-300 ${isLo ? 'translate-x-8' : ''}`} >
            </div>
        </label >
        <span className="font-semibold">
            {isLo ? "Hide" : 'Show'}
        </span>
        </>
    )
}