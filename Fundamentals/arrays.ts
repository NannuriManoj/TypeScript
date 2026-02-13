const superHero: string[] = [];  // declaration of array
const hero: Array<number> = [];  // another way of declaring an array

type info = {
    name: string,
    age: number,
    isActive: boolean
} 

const allInfo: info[] = [];  // creating a 'array' of type object - 'info' 

allInfo.push({name:"Manoj",age: 23, isActive: false})