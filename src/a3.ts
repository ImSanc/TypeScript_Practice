interface Person {
    name : string;
    age : number;
    job ?: string;
    greet( greating : string) : void;
}

class CEO implements Person{
    name : string;
    age: number;
    job?: string;

    constructor(name : string , age : number, job ?: string ) {
        this.name = name;
        this.age = age;
    }

    greet(greating: string): void {
        console.log(greating+ ` ${this.name}`);
    }
}

const Person = new CEO("sanchit",24);

console.log(Person.greet("Good morning"))