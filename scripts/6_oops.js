// In programming, objects are utilized is represent entities

// Entities are any tangible or intangible, distinct object, person, place,
  // connect or even and event, about which, date can be stored and manged in a database.
  // Example : student , Employee, Department, Bank Account, Transaction, etc
// ========================================================================================//
// JavaScript allows you to create object in different ways
// Let's look at some

// 1. Object literal
// Using the literal syntax of object to directly form the key:value pairs

const student1 = {
    id : 3124,
    firstName : "Jason",
    lastName : "Roy",
    location : "BLR"
}
// Printing the object entirely

console.log(student1);

// Accessing individual values
console.log(`The student of id : ${student1.id} is ${student1.firstName}`);

//========================================================================================//
console.log("-".repeat(50));


// 2. Object Constructor
// Constructing a generic, empty object using object constructor;

const student2 = new Object();
student2.id = 1234;
student2.firstName = "sushmitha";
student2.lastName = "Raman";
student2.location = "BLR";

console.log(student2);

// Accessing individual values

console.log(`The student of id : ${student2.id} is ${student2.firstName}`);

//========================================================================================//
console.log("-".repeat(50));

// 3. Using ES6 class syntax
// For bluepirnting the schema for all objects belonging to same entity type

class student {
    constructor(id, fname, lname, location = "BLR"){
        this.id = id;
        this.firstName = fname;
        this.lastName = lname;
        this.location = location
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
// Deliberately leaving out values for location parmeter so that it will assume the defults value
const student3 = new student(41234, "Rajesh", "Ndiu");
console.log(student3);
// Accessing individual values
console.log(`The student of id : ${student3.id} is ${student3.firstName}`);