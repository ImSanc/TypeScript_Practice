type ID =  string | number;

interface Department {
    departmentId : ID,
    process : string
}

interface Employee {
    empCde : ID
    name : string,
    role : string,
    salary: number,
    departmentId : ID
}

//Naming are bit incorrect but in Union the object should either be one or the other 
// it can have additional values as Union does "duck typing" where it ignores extra values but makes sure atleast it 
// statisfies one condition
type EmployeeDetails = Department | Employee ;


//Intersection is need when we want to make sure a merge of different properties 
//it enforces that the data is merged to verify the condition
type partialEmployeeDetails = Department & Employee;

function createEmployee( employeeDetails : EmployeeDetails){

    return employeeDetails;
}

function createPartialEmployee( employeeDetails : partialEmployeeDetails){

    return employeeDetails;
}

const output1 =  createEmployee( { empCde : "1", name : "sanchit" , role : "SDE" , salary : 100000 , departmentId : 1, process : "development"} );
console.log(output1);

const output2 =  createPartialEmployee( { empCde : "1", name : "sanchit" , role : "SDE" , salary : 100000
     ,departmentId : 1, process : "development"} );
console.log(output1);
