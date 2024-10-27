
const result : number = sum(1,2);
 
function sum(num1 : number , num2 : number) :number{
    return num1+num2;
}

function isLegal( age : number){
    if(age>=18){
        return true;
    }
    else
    {
        return false;
    }
}

const legal : boolean = takeFn(isLegal);

function takeFn( isLegal : Function) : boolean{
    setTimeout(()=>{
       console.log( isLegal(18));
    },1000);
    console.log("timer running");
    return true;
}