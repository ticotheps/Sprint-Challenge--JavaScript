# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.

    The biggest difference between the '.forEach()' and the '.map()' array methods is that the '.forEach()' method IS allowed to mutate the original
    array (with the provided function, one time, on each item of this array), whereas the '.map()' method IS NOT permitted to mutate the original array. INSTEAD, the '.map()' method creates a NEW array that contains the results of the called function that was applied to each item in the array. Also,
    the '.forEach()' method does NOT return anything, while the '.map()' method does return something (the new array with new values).

2. What is the difference between a function and a method?

    The difference between a 'function' and a 'method' is that functions are usually declared within 'the global scope' and is not required to be part of
    an object (it can stand alone, independent of other objects), whereas a 'method' is essentially a more permanent, built-in function of an object's prototype. 

3. What is closure?

    "Closure" can be technically defined as 'the combination of, a function and the lexical environment within which it was declared.' However, I like to
    think of the concept of "closure" as the ability of a function to have access to variables outside of it's own local scope, only if it has already FIRST attempted to define that variable inside of its own IMMEDIATE local scope.

4. Describe the four rules of the 'this' keyword.

    The four rules of the 'this' keyword are: Window binding, Implicit binding, Explicit binding, and New binding. Window binding refers to a default process whereby the compiler will place the context of the 'this' keyword on the 'window' of the program, which is the highest descendant on the "family tree" of objects. Implicit binding refers to the automatic binding of the 'this' keyword to the object to the DIRECT left of the "dot" used in the invocation of an object's method. Explicit binding refers to the MANUAL binding of the 'this' keyword (by the us, the developers) on specified objects, using the '.call()' method, the '.apply()' method, or the '.bind()' method. New binding refers to the binding of the 'this' keyword to a constructor function. 
    

5. Why do we need super() in an extended class?

    Use of the 'super()' keyword and the 'extends' keyword allows us to abstract away the need for the ".call()" method and the "Object.create()" method because that single 'super()' keyword is enough to give us complete access to all of the properties and methods of a parent class. Without this keyword, the compiler doesn't understand WHERE to place context for the properties of the associated subclass.

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
