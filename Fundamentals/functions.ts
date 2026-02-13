// the function below is implicitly 'any', so it can access and accept any value which shouldn't be doing

// function addNum(num){
//     return num + num;
// }

function addNum(num : number){  // we are able to return any other type as well, current we are only mentioning only the arguments can be of type 'number'.
    // return num + 2;
    return "ballaya" // see no error, we need to solve this
}
addNum(2);  // only able to pass numbers (no spearate type for integers and float, both comes under 'number' type)

function addNum2(num: number): number{
    return num * 2;   // now we cannot return other types of values except numbers 
}

function getString(val: string){
    return val;
}
getString("Manoj"); // only string type is able to pass as the argument.

function signUp(name: string, email: string, age: number){}


// age is default
const loginUser = (name: string, email: string, age: number = 18) => {}

signUp("Manoj", "manoj@gmail.com", 22); // if atleast one parameter is not passed then it throws an error
loginUser("Manoj","manoj@gmail.com");  // as age is passed a 'default' value no need compulsory to pass as argument while calling the function


function consoleError(errMsg: string): void{    // the function return nothing
    console.log(errMsg);
}

function handleError(errMsg: string): never{    // function never returns - used to catch errors or run forever
    throw new Error(errMsg);
}

export {}