
/** This is how you give arugment an type */
helloWorld("Sanchit");

function helloWorld( name : string){
    console.log("Hello good afternoon, "+name);
}

/** this is how you give function a return type 
 * in this case even if we dont give return type as we are adding 2 numbers then it infers the type (type inference)
*/
const sum : number = getSum(1,2);
console.log(sum);

function getSum( num1 : number , num2 : number) : number{
    return num1 + num2;
}

/** this is a example of type inference as without return type */
const isOver18 : boolean = isLegal(18);

function isLegal( age : number){
    return age>=18;
}