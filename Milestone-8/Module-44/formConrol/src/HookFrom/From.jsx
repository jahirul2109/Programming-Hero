import React from 'react'
import UseFormControl from '../Hooks/UseFormControl';

const From = () => {
    const [ error ,value , handleOnChange ] = UseFormControl('');
    const handleform = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.username.value;
        console.log( value , email)
    }
  return (
    <div>
        <form onSubmit={handleform}>
            <input type="text" name="username" value={value} onChange={handleOnChange} placeholder='Your Name' />
            <br />
            <input type="email" name="email" placeholder='email' />
            <input type="submit" value="Submit" />
        </form>
        <p style={{color : "red"}}>{error}</p>
    </div>
  )
}

export default From