//1. Variables ;

// programming requires us to store different values in money(RAM)
// While processing almost every tasks.
//rembering the money addresses associated with such values
// is not pratical,
// variables provide identifiers (or variable names)

// in traditional static programming languages,
// we declare a variable using the dadtype of value.
// Eg. let's say we want to store age of a person;>
  // int age; // -> Declartion (mermory allocation)
  // agse = 10;// -> Initialization
  // age = 12; // -> Re-assigment
     // OR
  // int age = 10; // ->Declartion and Initialization together
  // Some variables, one initialized, stays with the same vakue
  // througout the runtime. these are usually configuration values.
  // These are called 'constants'.
  // Their values are frozen.
  // These are usually declared along with keywords to denote their speciality.
  //  Values must be assigned during declartion.
       // const int AGE_LIMIT = 18; -> C++
       // final int AGE_LIMIT - 18; -> Java 

// 35 was developed as a client-side scripting language meant for web designers,
  // The coders were not very well versed in programming convertions and rules,
  // To help them write their logic without being affected by the rules,
  // Js included som features.


// 1. Usage of variables, without declaring datatypes - Dynamic typing.
   // The dadtype is guessed during runitime baased on assigned value rather than
   // hoping the coder will denote.
       // Var age = 10; -> var keyword denotes a generic variables with no specific type.

// 2. Usage of variables with no declaration; Direct assignment,
    age = 10;
    console.log(age);
    // var age; will be done automatically implicit; 
// 3. Automatic semi-colon insertion
   // In classic programming languages, statemnt are seprated by different delimiter symbols,
   // Usually its a ';' semi-colon symbol. Even though JS follows the same , some developers tend to froger
   // this .JS automatically inserts the delimiter at the statement ends while running to prevent error.
   console.log("Asdfast")
   
// 4. HOisting
    // Not evryone understands how variables and functions need to be declared before calling.
    // For example,
    f1()
    
    function f1(){
        // logic

    }
x = 10;
var x;

// DOesn't seem wrong to some people who are new to coding.

//JS Helps by hoisting the var and function declaration
// to the top of the script while running.

// ------------------------------------------------------------------------

// Variables declartion

// 1. const 
    // - block scope
    // - frozen value
    // - cannot be re- declartion or re-assigned.
// 2. let
    // - block scope
    // - value changes during runtime 
    // - cannot be re- declartion or re-assigned.
// 3. var
   // - function scope (Unless var is not enclosed in any function, then considerd global scope)
   // - Values changes during runtime
   // - can be re-declared and re-assigned.

// preference or usages
 
   // const >>> let >>>>>> var

// ---

{
    const a = 10;
    let b = 20;
    var c = 30;
    {
        console.log(a);
    }
} 
//console.log(a)
//console.log(b)
console.log(c)

