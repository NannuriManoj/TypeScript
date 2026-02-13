let greeting: string = "Hello Manoj";

console.log(greeting);

let userId: number = 81;    // defining 'number' type in here is not a good practice as userId is immediately -
                            // - assigned to a 'number value' such that TypeScript is intelligent to automatically identify it as number.
let userId2 = 79;   // we cannot also assign 'userId2' anyother type like string and boolean as it is assigned to type number eventhough the type is not defined

let isNumber: boolean = false;

// 'any' is type that disables the TypeScript's type checking
let value: any = 10;

// any type value is passed to the variable value - 'no errors'
value = 'Manoj';
value = true;
value = [1,2,3];
value = {};

// below the function implicitly 'any' but the best practice is in tsconfig.json - 'noImplicitAny' should be set to 'false' 
// function add(a, b) {
//   return a + b;
// }
