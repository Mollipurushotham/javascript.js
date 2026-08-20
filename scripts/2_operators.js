// 1. Arithmetic operators
// +, -, *, /

// 2. Assigement operators
// % - Module
// ** exponentiation

// = | x=10| Assign
// += |x+=5| Increment by given value
// -= |x-=5| Decrement by given value
  // Similarly *=, /=, %=, **=

  //Increment/Decrement Operators
  //++, --
  // Pre-increment/decrement -> Inc/Dec happen before exeution of statement
  // for eg:
  let x = 10;
  console.log(++x); //result will be 11

  // 3. Comparison operators
  // ==  | Equal value
  // === | Equal value and type
  // !=  | Not equal value
  // !== | Not equal value or type
  // >, <, >=, <=

  // 4. Logical operators
  // And -> &&
  let age = 22;
  let hasLicense = true;
  console.log(age >=18 && hasLicense)
  //OR -> ||
  // Not -> |
  // 5. Bitwise operator
    // & -> AND
    // | -> OR
    // ^ -> XOR
    // ` -> NOT
    // << -> Left shift
    // >> -> Right shift
    // >>> -> Zero-fill right shift

// 6. Membership operator
let users = {'Raj': 20,
             'kumar': 22,
            'kiran' : 25 };
console.log('Raj' in users);

// 7. instanceof operators
class Student{}

const student = new Student();

console.log(student instanceof Student);

// 8. Ternary operator
// Deciding b/w 2 values for one variable
// Syntax
// Const <variables> = <condition> ? <exper1> : <expr2>;
const num = 10 > 2 ? 5 : 10;
console.log(num);
  
const user_age = 19;
const heavy_driving_age_limit =21;
const driving_age_limit = 18;

const message = user_age >= heavy_driving_age_limit ?
               "You can drive truck" :
               user_age <= driving_age_limit ?
               "You can drive truck " : "you cannot drive";
               
               
// 9 . NUllish coalescing operator
let username = "molli";

console.log('Hi $(username ?? "Guest"), Welcome to our Website')

let user = {
  'name' : "Arun",
  'age' : 32,
}
console.log(user.phone?.work);

