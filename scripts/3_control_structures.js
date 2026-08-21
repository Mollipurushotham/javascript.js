// COntrol Structured -> Programming paradims which contorls flow of execution 

// 1. Conditions
    // 1. if
    const AGE_LIMIT = 18;

    let age = 20;

    if (age >= AGE_LIMIT){
        console.log("Yeay, you can drive.");
    }
    console.log(this.location.href);

    if (undefined){
        console.log("asf");
    }

    //v11. if .... else
        let userAuthenticated = true;
       
      if (userAuthenticated) {
        console.log("welcome to your profile");
      } else {
        console.log("please login to continue....");
      }

      // 111. else if 
      const heavy_driving_age_limit = 21;

      age =30;

      if (age >= heavy_driving_age_limit){
        console.log("you can drive trucks");
      } else if (age >= AGE_LIMIT){
        console.log("you can drive cars");
      } else {
        console.log("you can ride cycle");
      }

      // iV . Nested if

      let Age = 30;
      let hesLicense = true;

      if (Age >= 18){
        if (hesLicense){
            console.log("you can drive a car");
        } else {
            console.log("you need to get a license.")
        }
      } else {
        console.log(`you can drive in ${18 - age } years`);
      }

      // Simpliying the above, we can also write
      if (age >= 18 &&  hesLicense){
        console.log("you can drive.");
      }

      // Falsy Value 
           // 1. flase
           // 2. 0
           // 3. -0
           // 4. 0n
           // 5. ""
           // 6. null
           // 7. underfined
           // 8. new

           // v. switch - matching one variable against multiple fixed values
           let menu =`
           wwlcome
           1. Balance
           2. Data
           3. Recharge
           0. Exit
           `
           let choice = prompt(menu);
           let balance = 20;
           let data_balance = 200;
           choice = Number(choice)
           switch (choice){
            case 1:
                console.log(`you have Rs.${balance} in your talktime.`);
                break
            case 2:
                console.log(`you have ${data_balance} MB left.`);
                break;
            case 3: 
                console.log(`please go to nearset store`);
                
            case 0:
                console.log("thank you for visibilitiy us. \nBye");
                break;
                default:
                console.log(" check your input")
            }