---
id: 6
title: Loops--while-and-for
date: 'Oct 25 2022'
tags: ["javascript","guide"]
metaTags: ["javascript","guide"]
cover_image: https://velog.velcdn.com/images/xedni/post/d36b4026-f1ff-498e-b149-99e67a9b8691/title_javascript2.png
description: ''
---


            The for…of and for…in loops
            A small announcement for advanced readers.
This article covers only basic loops: while, do..while and for(..;..;..).
If you came to this article searching for other types of loops, here are the pointers:

See for…in to loop over object properties.
See for…of and iterables for looping over arrays and iterable objects.

Otherwise, please read on.

      
        
        
          while (condition) {
  // code
  // so-called "loop body"
}
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}
        
      
      
      
            Curly braces are not required for a single-line body
            If the loop body has a single statement, we can omit the curly braces {…}:

      
        
        
          
            
          
          
            
          
        
        
          let i = 3;
while (i) alert(i--);
        
      
      
      
      
        
        
          do {
  // loop body
} while (condition);
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
        
      
      
      
      
        
        
          for (begin; condition; step) {
  // ... loop body ...
}
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}
        
      
      
      
      
        
        
          Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...
        
      
      
      
      
        
        
          // for (let i = 0; i < 3; i++) alert(i)

// run begin
let i = 0
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// ...finish, because now i == 3
        
      
      
      
            Inline variable declaration
            Here, the “counter” variable i is declared right in the loop. This is called an “inline” variable declaration. Such variables are visible only inside the loop.

      
        
        
          
            
          
          
            
          
        
        
          for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // error, no such variable
        
      
      
      Instead of defining a variable, we could use an existing one:

      
        
        
          
            
          
          
            
          
        
        
          let i = 0;

for (i = 0; i < 3; i++) { // use an existing variable
  alert(i); // 0, 1, 2
}

alert(i); // 3, visible, because declared outside of the loop
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let i = 0;

for (; i < 3;) {
  alert( i++ );
}
        
      
      
      
      
        
        
          for (;;) {
  // repeats without limits
}
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
        
      
      
      
            The continue directive helps decrease nesting
            A loop that shows odd values could look like this:

      
        
        
          
            
          
          
            
          
        
        
          for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i );
  }

}
        
      
      
      From a technical point of view, this is identical to the example above. Surely, we can just wrap the code in an if block instead of using continue.
But as a side effect, this created one more level of nesting (the alert call inside the curly braces). If the code inside of if is longer than a few lines, that may decrease the overall readability.

            No break/continue to the right side of ‘?’
            Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.
For example, if we take this code:

      
        
        
          if (i > 5) {
  alert(i);
} else {
  continue;
}
        
      
      
      …and rewrite it using a question mark:

      
        
        
          (i > 5) ? alert(i) : continue; // continue isn't allowed here
        
      
      
      …it stops working: there’s a syntax error.
This is just another reason not to use the question mark operator ? instead of if.

      
        
        
          
            
          
          
            
          
        
        
          for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // what if we want to exit from here to Done (below)?
  }
}

alert('Done!');
        
      
      
      
      
        
        
          labelName: for (...) {
  ...
}
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');
        
      
      
      
      
        
        
          outer:
for (let i = 0; i < 3; i++) { ... }
        
      
      
      
            Labels do not allow to “jump” anywhere
            Labels do not allow us to jump into an arbitrary place in the code.
For example, it is impossible to do this:

      
        
        
          break label; // jump to the label below (doesn't work)

label: for (...)
        
      
      
      A break directive must be inside a code block. Technically, any labelled code block will do, e.g.:

      
        
        
          label: {
  // ...
  break label; // works
  // ...
}
        
      
      
      …Although, 99.9% of the time break is used inside loops, as we’ve seen in the examples above.
A continue is only possible from inside a loop.

