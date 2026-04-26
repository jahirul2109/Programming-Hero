import Teacher from "./teacher";
function NewComponent() {
    const teachers = ['jahriul', 'jahidul', 'Enamul', 'amirul', 'khairul'];
    const doctors = [
        { name: "kudradur Khuda", age: null, possition: "carditologist" , id : 1 },
        { name: "Kudusur Rahaman", age: 59, possition: "Nurologist", id : 2 },
        { name: "Mofiz chowdhury", age: 38, possition: "orthopadik", id : 3 },
    ];
    return (
        <div>
            <p>There are maney similar name here please see above</p>
            <div>{doctors.map(doctor => { return <Teacher doctor={doctor} key = {doctor.id}></Teacher> })}</div>
            {/* <ul> {teachers.map( (teacher) =>{ return <Teacher name = {teacher}></Teacher>})}</ul> */}
        </div>
    )
}


export default NewComponent;