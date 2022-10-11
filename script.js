 /* 
    SCRIPT.JS

    This is where you'll complete the SkillBuilder. Look at the Markdown tab (in the same pane as the console) for detailed README instuctions!
*/

function calculateCarpet() {
  // 👇 Write your code here 👇
  
let room1Width = getRoomWidth(1);
let room1Length = getRoomLength(1);
var sqFt1 = room1Length * room1Width;

  
let room2Width = getRoomWidth(2);
let room2Length = getRoomLength(2);
var sqFt2 = room2Length * room2Width;

let totalArea = sqFt1 + sqFt2;
totalArea = totalArea + (totalArea * 0.1);
showResult(totalArea);

  
console.log("click");

}

calculateCarpetTest();


/* LEVEL UP! (optional) 
	1. Function explanations: 
    // validateResult function: To utilize the form correctly, data entered into a text field must be in the correct format and be of a specific kind. For example, elements like the room width and length roll must be written in numbers rather than letters other wise you'll get an error or the Not a Number "NaN" result.

  // calculateCarpetTest function: Checks if a string matches another one. Returning true if it discovers a match and false otherwise, like we have here if we entered the values provided for each room the expected result of '11.00' if it is not '11.00' that means something is wrong.

	2. Custom styles added: 


*/