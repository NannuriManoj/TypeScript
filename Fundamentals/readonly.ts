type Users = {
    readonly _id: number;   // readonly keyword ensures a property or array cannot be reassgin its value after its intial configuration
    name: string;
    email: string;
    isActive: boolean
    contact?: number        // '?' - is used to set a property to be 'optional' (? -> optional)
}

let myUser: Users = {
    _id: 243,
    name: "Manoj",
    email: "manoj@gmail.com",
    isActive: false
}

// myUser._id = 2445;  // this is not possible because of 'readonly' keyword

type cardNum = {
    cardNumber: number
}

type cardNaam = {
    cardName: string
}

type cardDetails = cardNum & cardNaam; // can combine the two 'typealias' objects into single type

let u: cardDetails = { 
    cardNumber: 12334455,
    cardName: " "
}
