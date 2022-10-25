---
id: 217
title: JavaScript-specials
date: 'Oct 25 2022'
tags: ["javascript","guide"]
metaTags: ["javascript","guide"]
cover_image: https://velog.velcdn.com/images/xedni/post/d36b4026-f1ff-498e-b149-99e67a9b8691/title_javascript2.png
description: ''
---


      
        
        
          
            
          
          
            
          
        
        
          alert('Hello'); alert('World');
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert('Hello')
alert('World')
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert("There will be an error after this message")

[1, 2].forEach(alert)
        
      
      
      
      
        
        
          function f() {
  // no semicolon needed after function declaration
}

for(;;) {
  // no semicolon needed after the loop
}
        
      
      
      
      
        
        
          'use strict';

...
        
      
      
      
      
        
        
          let x = 5;
x = "John";
        
      
      
      
      
        
        
          typeof null == "object" // error in the language
typeof function(){} == "function" // functions are treated specially
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let age = prompt('Your age?', 18);

switch (age) {
  case 18:
    alert("Won't work"); // the result of prompt is a string, not a number
    break;

  case "18":
    alert("This works!");
    break;

  default:
    alert("Any value not equal to one above");
}
        
      
      
      
