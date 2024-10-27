


greet("Sanchit");
let result : number= sum(10,11);
console.log( sum(11,11));

const legal = isLegal(19);
console.log( isLegal(19));
callFuc(random);


//How to pass type of a parameter
function greet(name : string){
    console.log(`Hello ${name}`);
}

//set parameter and return type
function sum( num1 : number , num2 : number) : number{
    return num1+num2;
}

//set parameter and return type
function isLegal( age : number) : boolean{
    return age >=18;
}

//Passing a function to a function
function callFuc( internalFunction : ()=> void){
    setTimeout( internalFunction);
}

function random2(num : number ) : string{
    return num>0 ? "Fuck you" : "nahh let it be " ;
}

function random() : void{
    const value = Math.random() < 0.5 ;

    console.log( value ? "Fuck you" : "nahh let it be " );
}