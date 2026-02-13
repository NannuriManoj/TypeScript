// an interface declaration is another way to name an object type

// below is the example from the docs
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });

// below is a detailed example

interface IntUser {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface IntUser {                         // interface re-opening (interface with same name with additional properties)
    githubToken: string
}

interface IntAdmin extends IntUser {        // inherit properties from parent
    role: "admin" | "ta" | "learner"
}

const man: IntAdmin = { dbId: 22, email: "h@h.com", userId: 2211,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "manoj10", off: 10) => {
    return 10
}
}
man.email = "manoj@gmail.com"
// hitesh.dbId = 33


