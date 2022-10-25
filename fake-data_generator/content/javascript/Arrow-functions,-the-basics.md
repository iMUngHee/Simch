---
id: 239
title: Arrow-functions,-the-basics
date: 'Oct 25 2022'
tags: ["javascript","guide"]
metaTags: ["javascript","guide"]
cover_image: https://velog.velcdn.com/images/xedni/post/d36b4026-f1ff-498e-b149-99e67a9b8691/title_javascript2.png
description: ''
---


      
        
        
          let func = (arg1, arg2, ..., argN) => expression;
        
      
      
      
      
        
        
          let func = function(arg1, arg2, ..., argN) {
  return expression;
};
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3
        
      
      
      
            More to come
            Here we praised arrow functions for brevity. But that’s not all!
Arrow functions have other interesting features.
To study them in-depth, we first need to get to know some other aspects of JavaScript, so we’ll return to arrow functions later in the chapter Arrow functions revisited.
For now, we can already use arrow functions for one-line actions and callbacks.

