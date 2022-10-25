---
id: 190
title: Type-Conversions
date: 'Oct 25 2022'
tags: ["javascript","guide"]
metaTags: ["javascript","guide"]
cover_image: https://velog.velcdn.com/images/xedni/post/d36b4026-f1ff-498e-b149-99e67a9b8691/title_javascript2.png
description: ''
---


            Not talking about objects yet
            In this chapter, we won’t cover objects. For now, we’ll just be talking about primitives.
Later, after we learn about objects, in the chapter Object to primitive conversion we’ll see how objects fit in.

      
        
        
          
            
          
          
            
          
        
        
          let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert( "6" / "2" ); // 3, strings are converted to numbers
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
        
      
      
      
            Please note: the string with zero "0" is true
            Some languages (namely PHP) treat "0" as false. But in JavaScript, a non-empty string is always true.

      
        
        
          
            
          
          
            
          
        
        
          alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)
        
      
      
      
