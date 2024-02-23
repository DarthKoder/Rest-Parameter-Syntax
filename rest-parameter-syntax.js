/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
/**
 * Create a simple arrow function, sumAll, which will take three parameters, a, b, and c,
 * and will return the sum of a + b + c. 
 * Call the function using the numbers 1, 2, and 3.
 * Log the sum to the console you can see that the sum is 6.} 
 */
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("Sum:", sum);

// Extra arguments are ignored
/* JavaScript will allow you to pass in as many arguments as you want regardless of how many are specified when you define the function, 
so I can simply pass 1, 2, 3, 4, 5, and 6, and the last three will just be ignored. 

If I log this to the console as sum2, the value is still 6, which is obviously not what we want. 
This is where the rest parameter syntax comes into play. */
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2:", sum2);

// Function using ...rest
/**
 * Using the three dots syntax here again, but this time it's going to squash any extra parameters passed into the function into a new parameter called rest, which will be an array within the function.
 * This parameter can technically be called anything you want, but I'm calling it rest here to demonstrate that it signifies the rest of the parameters. 
 * We can sum the first three variables easily enough. Just let sum = a + b + c. 
 * Now I'll use a for...of loop to iterate through the rest array and add each additional number to the existing sum. 
 * At the end I'll just return sum.
 * Now if I create a new variable called sum3, 
 * Set it equal to sum rest of the numbers 1 through 6, 
 * and log it to the console, I get the expected output of 21.
 */
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }

    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6,);
console.log("Sum3:", sum3);