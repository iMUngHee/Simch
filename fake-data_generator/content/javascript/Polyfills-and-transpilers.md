---
id: 133
title: Polyfills-and-transpilers
date: 'Oct 25 2022'
tags: ["javascript","guide"]
metaTags: ["javascript","guide"]
cover_image: https://velog.velcdn.com/images/xedni/post/d36b4026-f1ff-498e-b149-99e67a9b8691/title_javascript2.png
description: ''
---


      
        
        
          // before running the transpiler
height = height ?? 100;

// after running the transpiler
height = (height !== undefined && height !== null) ? height : 100;
        
      
      
      
      
        
        
          if (!Math.trunc) { // if no such function
  // implement it
  Math.trunc = function(number) {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    // they are covered later in the tutorial
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}
        
      
      
      
