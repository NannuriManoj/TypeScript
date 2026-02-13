const object = {
    name: "Manoj",
    age: 22,
    isActive: false
}           // not the way we do create objects in TypeScript, we try to pass through the functions

function createUser({name, isPaid}: { name: string, isPaid: boolean }){};

const user = {name:"Manoj", isPaid: false, email: "manoj@gmail.com"}

createUser({name:"Manoj", isPaid: false}) 
createUser(user);

function createCourse():{name: string, price: number}{
    return {name: "TypeScript", price: 499};
}

export{}