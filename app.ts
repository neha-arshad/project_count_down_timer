#! usr/bin/env node
import inquirer from "inquirer";
import {differenceInSeconds, interval,} from "date-fns"

const response = await inquirer.prompt({
  type: "number",
  name: "user",
  message: "please enter the amount of sec",
	validate: (input) => {
    if (isNaN(input)) {
      return "Please enter Valid number";
		}
	 else if (input > 60) {
		 return "plese enter must be in 60";
		}
		 else {
			 return true;
		 }
  },
});
let value = response.user

 function startTime(val: number){
	const intTime = new Date()
	intTime.setSeconds(intTime.getSeconds() + val)
	console.log(intTime);
	const intervalTime = new Date(intTime);
	console.log(intervalTime);

	setInterval(() => {
		const currentTime = new Date();
		const timeDiff = differenceInSeconds(intervalTime, currentTime)
		

		if (timeDiff <= 0){
			console.log("Timer has expired");
			
			
			process.exit();
		}
		
		const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
		const sec = Math.floor(timeDiff % 60);
		console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
	}, 1000)
	
 }
 startTime(value);
 
