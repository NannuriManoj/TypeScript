"use strict";
// class Students {
//     studentName: string
//     age: number
//     readonly stength: number = 40;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(studentName: string, age: number){
//         this.studentName = studentName;
//         this.age = age;
//     }
// }
class Students {
    studentName;
    age;
    stength = 40;
    attendance = 40;
    constructor(studentName, age) {
        this.studentName = studentName;
        this.age = age;
        // if private key value should be accessed within the class only, but not outside the class
    }
    deleteToken() {
        console.log("Deleted token");
    }
    get attendanceCount() {
        return this.attendance;
    }
    set attendanceCount(attendanceCnt) {
        if (attendanceCnt <= 40) { // there is no return type for the set method not even void
            console.log("No full attendance");
        }
        this.attendance = attendanceCnt;
    }
}
class PlayGround extends Students {
    cricket = true;
    totalStundents() {
        // this.attendance = 40; this will give error if the attendance is initially set as private
        this.attendance = 40; // this is now acceptable because the attendance variable is set as protected
    } // protected keyword is used in the child class if the variable is inherited from the parent class
} // but not outside anywhere
const meda = new Students("Meda", 23);
meda.stength;
//# sourceMappingURL=index.js.map