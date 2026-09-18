// // COntrol Structured -> Programming paradims which contorls flow of execution 

// // 1. Conditions
//     // 1. if
//     const AGE_LIMIT = 18;

//     let age = 20;

//     if (age >= AGE_LIMIT){
//         console.log("Yeay, you can drive.");
//     }
//     console.log(this.location.href);

//     if (undefined){
//         console.log("asf");
//     }

//     //v11. if .... else
//         let userAuthenticated = true;

//       if (userAuthenticated) {
//         console.log("welcome to your profile");
//       } else {
//         console.log("please login to continue....");
//       }

//       // 111. else if 
//       const heavy_driving_age_limit = 21;

//       age =30;

//       if (age >= heavy_driving_age_limit){
//         console.log("you can drive trucks");
//       } else if (age >= AGE_LIMIT){
//         console.log("you can drive cars");
//       } else {
//         console.log("you can ride cycle");
//       }

//       // iV . Nested if

//       let Age = 30;
//       let hesLicense = true;

//       if (Age >= 18){
//         if (hesLicense){
//             console.log("you can drive a car");
//         } else {
//             console.log("you need to get a license.")
//         }
//       } else {
//         console.log(`you can drive in ${18 - age } years`);
//       }

//       // Simpliying the above, we can also write
//       if (age >= 18 &&  hesLicense){
//         console.log("you can drive.");
//       }

//       // Falsy Value 
//            // 1. flase
//            // 2. 0
//            // 3. -0
//            // 4. 0n
//            // 5. ""
//            // 6. null
//            // 7. underfined
//            // 8. new

//            // v. switch - matching one variable against multiple fixed values
//            let menu =`
//            wwlcome
//            1. Balance
//            2. Data
//            3. Recharge
//            0. Exit
//            `
//            let choice = prompt(menu);
//            let balance = 20;
//            let data_balance = 200;
//            choice = Number(choice)
//            switch (choice){
//             case 1:
//                 console.log(`you have Rs.${balance} in your talktime.`);
//                 break
//             case 2:
//                 console.log(`you have ${data_balance} MB left.`);
//                 break;
//             case 3: 
//                 console.log(`please go to nearset store`);

//             case 0:
//                 console.log("thank you for visibilitiy us. \nBye");
//                 break;
//                 default:
//                 console.log(" check your input")
//             } 

// 2. Loops ` Repeated Execution of code block

// for loop
// for (exprt1; expr2; expr3){
//     // code block
// }
// expr1 :> Executes once before first iteration
// - Usaually used for counter variable initialization
// expr2 :> Evaluated before started of each iteration
// - Usaually used for checking termination condition
// expr3 :> Executes after each iteration
// - Usaually used for counter variable increment/decrement on counter variable update

// printing 1 - 5
// for (let i = 1; i <= 5; i++){
//     console.log(i);
// }

// for (let i = 1; i <= 5;){
//   console.log(i++);
// }

// for (let i = 1 ; ;) {
//   console.log(i++);

//   if (i > 5){
//     break;
//   }

// }

// // *
// // * *
// // * * *
// // * * * *
// // * * * * *
// for (let i = 1; i <= 5; i++){
//   let row = ""; 
//   for (let j = 1; j <= i; j++){
//     row += "* ";
//   }
//   console.log(row);
// }

// for (let i = 1; i <= 5; i++){
//   console.log("* ".repeat(i));
// }

// //            *
// //          * *
// //        * * *
// //      * * * *
// //    * * * * *
// for (let i = 1; i <= 5; i++){
//    console.log('  '.repeat(5 - i) + `* `.repeat(i));
// }
// //     *
// //    * *
// //   * * *
// //  * * * *
// // * * * * *
// //  * * * *
// //   * * *
// //    * *
// //     *
// for (let row = 1; row < 10; row++){
//   if (row <= 5){
//     console.log(" ".repeat(5-row) + "* ".repeat(row));
//   } else {
//     console.log("  ".repeat(row - 5) + "* ".repeat(10 - row));
//   }
// }

// const students = [
//   'shimna',
//   'puru',
//   'jaya',
//   'ragul',
// ]
// students.push('sreeja');


// // print all students with serial numbers along side.

// for (let i = 0; i < students.length; i++){
//   console.log(`${i + 1}. ${students[i]}`);
// }

// for (let student of students){
//   console.log(student);
// }

// for (let [student_index, student] of students.entries()){
//   console.log(`${student_index + 1}. ${student}`);
// }

// for (let student_index in students){
//   console.log(`${parseInt(student_index) + 1} ~ ${students[student_index]}`);
// }

// while loop

// while (truth_value){
//     // code block
// }

// print 1 to 10
// let i = 1;
// while (i <= 10){
//   console.log(i++);
// }

// let students = [
//   'nanna',
//   'amma',
// ]

// while(students.length != 0){
//   console.log(students.pop());
// }

// do while loop
// do {
//     // code block
// } 
// while (truth_value);

// let's find the factorial of 5

// let [fact, n] =[1, 5];
// console.log(typeof n); 

// while (n > 1){
//   fact *= n--;
// }
// console.log(typeof n);
// console.log(fact);


// let a1 = [1,2,3];
// let a2 = [4,5,6];

// let c =[...a1, ...a2];
// console.log(c);
// let [a, b, ...rest] = c;
// console.log(rest);
//

//fibonacci series
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ,,,

// fib(n) = fib(n-1) + fib(n-2);

// let n = 5;
// let [first, second] = [0, 1];
// let result;
// for(let count = 0; count < 5; count++){
//   //console.log(first);
//   result = first;
//   let next = first + second;

//    next = first + second;
//   first = second;
//   second = next;

// }
// console.log(result);

// class student {
//   #password;
//   study() {
//     console.log("this");
//   }
//   learn() {
//     console.log("that");
//   }
// }


// 3. Exception Handling : Execution of risky code block expecting exceptions

function withdrawMoney(blance, amount) {

  try {
    // Risky code block
    if (amount <= 0) {
       throw new Error("Amount must be greater than zero.");
    }
    if (amount > blance) {
      throw new Error("Insufficient balance.");
    }
    blance -= amount;
    console.log(`your withdrawal of Rs. ${amount} was sucessful.
      Blance is Rs. ${blance}`);
  }
  catch (err) {
    // error handling
    console.log(`Transaction failed!
       ${err}`);
  }
  finally {
    // clean-up
    console.log("Thank you !!")
  }
}
withdrawMoney(blance = 2000, amount = 3000);

