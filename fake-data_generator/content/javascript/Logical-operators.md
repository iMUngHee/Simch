---
id: 186
title: Logical-operators
date: 'Oct 25 2022'
tags: ["javascript","guide"]
metaTags: ["javascript","guide"]
cover_image: https://velog.velcdn.com/images/xedni/post/d36b4026-f1ff-498e-b149-99e67a9b8691/title_javascript2.png
description: ''
---


      
        
        
          result = a || b;
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          if (1 || 0) { // works just like if( true || false )
  alert( 'truthy!' );
}
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}
        
      
      
      
      
        
        
          result = value1 || value2 || value3;
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)
        
      
      
      
      
        
        
          result = a && b;
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          if (1 && 0) { // evaluated as true && false
  alert( "won't work, because the result is falsy" );
}
        
      
      
      
      
        
        
          result = value1 && value2 && value3;
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          // if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert( 1 && 2 && null && 3 ); // null
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert( 1 && 2 && 3 ); // 3, the last one
        
      
      
      
            Precedence of AND && is higher than OR ||
            The precedence of AND && operator is higher than OR ||.
So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).

            Don???t replace if with || or &&
            Sometimes, people use the AND && operator as a "shorter way to write if".
For instance:

      
        
        
          
            
          
          
            
          
        
        
          let x = 1;

(x > 0) && alert( 'Greater than zero!' );
        
      
      
      The action in the right part of && would execute only if the evaluation reaches it. That is, only if (x > 0) is true.
So we basically have an analogue for:

      
        
        
          
            
          
          
            
          
        
        
          let x = 1;

if (x > 0) alert( 'Greater than zero!' );
        
      
      
      Although, the variant with && appears shorter, if is more obvious and tends to be a little bit more readable. So we recommend using every construct for its purpose: use if if we want if and use && if we want AND.

      
        
        
          result = !value;
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert( !true ); // false
alert( !0 ); // true
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert( !!"non-empty string" ); // true
alert( !!null ); // false
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false
        
      
      
      
