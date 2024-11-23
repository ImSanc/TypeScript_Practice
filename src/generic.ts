import sanchit ,{b}from "./import";
type InputType = number[] | string[];
type InputType2 = number | string;

function getEl1( arr : InputType) : InputType2{
    return arr[0];
}

console.log( getEl1( ["sanchit","mishra"]));

//right way to use Generic

function getEl2<T> (args : T[]) : T {
    return args[0];
}

const output1 = getEl2([1,2,3]);
const output2 = getEl2(["1","2","3"]);
const output3 = getEl2([1, "sanchit",2]);