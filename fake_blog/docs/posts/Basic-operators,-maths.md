---
id: 260
title: Basic-operators,-maths
date: 'Oct 25 2022'
tags: ["javascript","guide"]
metaTags: ["javascript","guide"]
cover_image: https://velog.velcdn.com/images/xedni/post/d36b4026-f1ff-498e-b149-99e67a9b8691/title_javascript2.png
description: ''
---


      
        
        
          
            
          
          
            
          
        
        
          alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
alert( 8 % 3 ); // 2, a remainder of 8 divided by 3
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)
        
      
      
      
      
        
        
          let s = "my" + "string";
alert(s); // mystring
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert(2 + 2 + '1' ); // "41" and not "221"
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert('1' + 2 + 2); // "122" and not "14"
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          // No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
        
      
      
      
      
        
        
          let x = 2 * 2 + 1;

alert( x ); // 5
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
        
      
      
      
      
        
        
          c = 2 + 2;
b = c;
a = c;
        
      
      
      
      
        
        
          let n = 2;
n = n + 5;
n = n * 2;
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let n = 2;

n *= 3 + 5; // right part evaluated first, same as n *= 8

alert( n ); // 16
        
      
      
      
            Important:
            Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

      
        
        
          
            
          
          
            
          
        
        
          let counter = 1;
let a = ++counter; // (*)

alert(a); // 2
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let counter = 1;
let a = counter++; // (*) changed ++counter to counter++

alert(a); // 1
        
      
      
      
            Increment/decrement among other operators
            The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.
For instance:

      
        
        
          
            
          
          
            
          
        
        
          let counter = 1;
alert( 2 * ++counter ); // 4
        
      
      
      Compare with:

      
        
        
          
            
          
          
            
          
        
        
          let counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value
        
      
      
      Though technically okay, such notation usually makes code less readable. One line does multiple things – not good.
While reading code, a fast “vertical” eye-scan can easily miss something like counter++ and it won’t be obvious that the variable increased.
We advise a style of “one line – one action”:

      
        
        
          
            
          
          
            
          
        
        
          let counter = 1;
alert( 2 * counter );
counter++;
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)
        
      
      
      
            Comma has a very low precedence
            Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.
Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.

      
        
        
          // three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
        
      
      
      
