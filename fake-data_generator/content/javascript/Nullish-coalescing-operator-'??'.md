---
id: 156
title: Nullish-coalescing-operator-'??'
date: 'Oct 25 2022'
tags: ["javascript","guide"]
metaTags: ["javascript","guide"]
cover_image: https://velog.velcdn.com/images/xedni/post/d36b4026-f1ff-498e-b149-99e67a9b8691/title_javascript2.png
description: ''
---


            A recent addition
            
            This is a recent addition to the language.
            Old browsers may need polyfills.
            
      
        
        
          result = (a !== null && a !== undefined) ? a : b;
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let user = "John";

alert(user ?? "Anonymous"); // John (user is not null/udefined)
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
        
      
      
      
      
        
        
          // without parentheses
let area = height ?? 100 * width ?? 50;

// ...works this way (not what we want):
let area = height ?? (100 * width) ?? 50;
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let x = 1 && 2 ?? 3; // Syntax error
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let x = (1 && 2) ?? 3; // Works

alert(x); // 2
        
      
      
      
