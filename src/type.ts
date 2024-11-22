//This is for union 
//Where we want to union 2 or more property
type Id = string | number;

function logId (ID : Id){
    console.log(ID);
}


//This is for intersection where you want every unique property

type User3 = {
    name : string,
    department : string
}

interface Role {
    name : string,
    role : string
}

type TeamLead = User3 & Role;

const teamLead : TeamLead = {
    name: "sanchit",
    department : "dev",
    role : "Lead",
}

//how to give array as an argument
// we just add [] in front the type of argument it can be object or primitive

console.log( findMax([1,2,3,4,5]));

function findMax ( arr : number[]){

    let max = Number.MIN_VALUE;

    arr.forEach( num =>{
        if(max<num){
            max = num;
        }
    });

    return max;
}