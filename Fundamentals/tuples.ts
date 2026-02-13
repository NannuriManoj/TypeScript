let tUser: [string, number, boolean]        // for tuples type will be declare inside '[]'

tUser = ["hc", 131, true]   // order is important 

let rgb: [number, number, number] = [255, 123, 112]

type tupUser = [number, string]

const newtupUser: tupUser = [112, "example@google.com"]

newtupUser[1] = "hc.com"
// newtupUser.push(true)  // array methods are also accesible in tuples



