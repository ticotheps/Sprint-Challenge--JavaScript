// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(arg1, arg2, callback) {
  return callback(arg1, arg2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2) {
  const sum = num1+num2; 
  return sum;
}
console.log(add(1,3));

function multiply(num1, num2) {
  const product = num1*num2; 
  return product;
}
console.log(multiply(10,3));

function greeting(firstName, lastName) { 
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}
console.log(greeting("Stephon", "Marbury"));

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

//  The function 'nestedFunction()' has the ability to access the variable 'internal', despite 'internal' being outside of its
//  immediate local scope. First, 'nestedFunction() will search within its OWN local scope for the 'internal' variable.
//  Upon realizing that the 'internal' variable is not defined within its immediate local scope, it looks 'outward' due to
//  the concept of 'closure', which can be defined as the combination of, a function and the lexical environment within which it
//  was declared. So, 'closure' is what allows the 'nestedFunction()' the ability to "reach out" and "grab" the value of the
//  'internal' variable because 'internal' STILL falls within the same immediate GLOBAL scope (of the function 'myFunction') 
//  as 'nestedFunction'.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();