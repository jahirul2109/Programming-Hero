import React, { useState } from 'react'

const UseFormControl = (defult) => {

    const [value, setValue] = useState(defult);
    const [error , setError] = useState ('');

    const handleOnChange = (e) => {
        setValue(e.target.value);
        if (value.length < 6) {
            setError('Minimum 6 Charecter required')
        }
        else {
            setError('')
        }
    }
    console.log(value)
    return [ error , value , handleOnChange];
}

export default UseFormControl