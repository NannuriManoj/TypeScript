// union type is the combination of two or more types of data that we can include in properities and array

let score: number | string = 33;
score = 44;
score = '88';

function getDbId(id: number | string){
    // body 
}

type Emp = {
    name: string,
    id: number
}
type Admin = {
    username: string,
    id: number
}

let manoj: Emp | Admin = {name: "Manoj", id: 321};
manoj = {username: "mn", id: 321}

// const user: string | number [] = ["manoj",1]    // the most common mistake - the array here should be either string or number

const user: (string | number) [] = ["manoj",1] // to get the array or mixed type