interface User {
    firstName : string,
    lastName : string,
    age : number
}


function isLegal ( user : User) : boolean{
    return user.age >= 18;
}


const user : User = {
    firstName : "sanchit",
    lastName : "mishra",
    age : 18
}
console.log(isLegal(user));
