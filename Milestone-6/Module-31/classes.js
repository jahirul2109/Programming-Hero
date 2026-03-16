class Person {
    constructor(name , age , ability , work) {
        this.name = name;
        this.age = age;
        this.ability = ability;
        this.work = work;
    }
    play () {
        console.log(`My name is ${this.name} I am ${this.age} Years Old i also do ${this.work} `)
    }
}

const newPerson = new Person ('jairul', 12, "mara khai ", "akam");
// console.log(newPerson);
// newPerson.play()

class PowerfullWoman extends Person {
    constructor (name, age , work , ability , status ) {
        super (name, age , work , ability) 
        this.status = status ;
    }
    
};

const woman = new PowerfullWoman ("hena", 20 , "cekha", "biya", "mingle akter single");
console.log (woman)