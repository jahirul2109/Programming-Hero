export default function Teacher({ doctor: { name, age, possition } }) {
    // const {name , age , possition} = doctor;
    console.log(name)
    return (<>
        <h1>Name :{name} </h1>
        <p>age : {age ? age : "Not found"} </p>
        <p>Positon : {possition} </p>
    </>)
}