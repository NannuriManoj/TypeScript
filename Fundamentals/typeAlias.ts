type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user: User){    // pass the type as object
    // body 
}
createUser({name: " ", email: " ", isActive: true}) // can call the function like this

function newUser(user: User): User{
    return {name: "", email: "", isActive: true}    // can pass the return type as User object
}
