---
id: 137
title: Debugging-in-the-browser
date: 'Oct 25 2022'
tags: ["javascript","guide"]
metaTags: ["javascript","guide"]
cover_image: https://velog.velcdn.com/images/xedni/post/d36b4026-f1ff-498e-b149-99e67a9b8691/title_javascript2.png
description: ''
---


            Conditional breakpoints
            Right click on the line number allows to create a conditional breakpoint. It only triggers when the given expression, that you should provide when you create it, is truthy.
That’s handy when we need to stop only for a certain variable value or for certain function parameters.

      
        
        
          function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;  // <-- the debugger stops here

  say(phrase);
}
        
      
      
      
            Continue to here
            Right click on a line of code opens the context menu with a great option called “Continue to here”.
That’s handy when we want to move multiple steps forward to the line, but we’re too lazy to set a breakpoint.

      
        
        
          
            
          
          
            
          
        
        
          // open console to see
for (let i = 0; i < 5; i++) {
  console.log("value,", i);
}
        
      
      
      
