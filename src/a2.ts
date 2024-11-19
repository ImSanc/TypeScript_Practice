interface User {
    firstName : string,
    lastName : string,
    age : number
}


function isLegal2 ( user : User) : boolean{
    return user.age >= 18;
}


const user : User = {
    firstName : "sanchit",
    lastName : "mishra",
    age : 18
}
console.log(isLegal2(user));
