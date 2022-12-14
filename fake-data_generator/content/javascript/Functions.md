---
id: 21
title: Functions
date: 'Oct 25 2022'
tags: ["javascript","guide"]
metaTags: ["javascript","guide"]
cover_image: https://velog.velcdn.com/images/xedni/post/d36b4026-f1ff-498e-b149-99e67a9b8691/title_javascript2.png
description: ''
---


      
        
        
          function showMessage() {
  alert( 'Hello everyone!' );
}
        
      
      
      
      
        
        
          function name(parameter1, parameter2, ... parameterN) {
 // body
}
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();
showMessage();
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable
        
      
      
      
            Global variables
            Variables declared outside of any function, such as the outer userName in the code above, are called global.
Global variables are visible from any function (unless shadowed by locals).
It???s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.

      
        
        
          
            
          
          
            
          
        
        
          function showMessage(from, text) { // parameters: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann
        
      
      
      
      
        
        
          showMessage("Ann");
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
        
      
      
      
      
        
        
          showMessage("Ann", undefined); // Ann: no text given
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
        
      
      
      
            Evaluation of default parameters
            In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.
In the example above, anotherFunction() isn???t called at all, if the text parameter is provided.
On the other hand, it???s independently called every time when text is missing.

            Default parameters in old JavaScript code
            Several years ago, JavaScript didn???t support the syntax for default parameters. So people used other ways to specify them.
Nowadays, we can come across them in old scripts.
For example, an explicit check for undefined:

      
        
        
          function showMessage(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }

  alert( from + ": " + text );
}
        
      
      
      ???Or using the || operator:

      
        
        
          function showMessage(from, text) {
  // If the value of text is falsy, assign the default value
  // this assumes that text == "" is the same as no text at all
  text = text || 'no text given';
  ...
}
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          function showMessage(text) {
  // ...

  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
  }

  alert(text);
}

showMessage(); // empty message
        
      
      
      
      
        
        
          function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
  ...
}
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
        
      
      
      
      
        
        
          function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}
        
      
      
      
            A function with an empty return or without it returns undefined
            If a function does not return a value, it is the same as if it returns undefined:

      
        
        
          
            
          
          
            
          
        
        
          function doNothing() { /* empty */ }

alert( doNothing() === undefined ); // true
        
      
      
      An empty return is also the same as return undefined:

      
        
        
          
            
          
          
            
          
        
        
          function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true
        
      
      
      
            Never add a newline between return and the value
            For a long expression in return, it might be tempting to put it on a separate line, like this:

      
        
        
          return
 (some + long + expression + or + whatever * f(a) + f(b))
        
      
      
      That doesn???t work, because JavaScript assumes a semicolon after return. That???ll work the same as:

      
        
        
          return;
 (some + long + expression + or + whatever * f(a) + f(b))
        
      
      
      So, it effectively becomes an empty return.
If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:

      
        
        
          return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
        
      
      
      And it will work just as we expect it to.

      
        
        
          showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false
        
      
      
      
            One function ??? one action
            A function should do exactly what is suggested by its name, no more.
Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).
A few examples of breaking this rule:

getAge ??? would be bad if it shows an alert with the age (should only get).
createForm ??? would be bad if it modifies the document, adding a form to it (should only create it and return).
checkPermission ??? would be bad if it displays the access granted/denied message (should only perform the check and return the result).

These examples assume common meanings of prefixes. You and your team are free to agree on other meanings, but usually they???re not much different. In any case, you should have a firm understanding of what a prefix means, what a prefixed function can and cannot do. All same-prefixed functions should obey the rules. And the team should share the knowledge.

            Ultrashort function names
            Functions that are used very often sometimes have ultrashort names.
For example, the jQuery framework defines a function with $. The Lodash library has its core function named _.
These are exceptions. Generally function names should be concise and descriptive.

      
        
        
          function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}
        
      
      
      
      
        
        
          function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
        
      
      
      
      
        
        
          function name(parameters, delimited, by, comma) {
  /* code */
}
        
      
      
      
