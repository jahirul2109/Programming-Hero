function Input (porps) {
    return (
        <div>
        <input type="text" placeholder="Enter Your name" value={porps.name} readOnly />
        <button>Submit</button>
        </div>

    )
}
export default Input ;