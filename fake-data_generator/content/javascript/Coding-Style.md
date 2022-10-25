---
id: 24
title: Coding-Style
date: 'Oct 25 2022'
tags: ["javascript","guide"]
metaTags: ["javascript","guide"]
cover_image: https://velog.velcdn.com/images/xedni/post/d36b4026-f1ff-498e-b149-99e67a9b8691/title_javascript2.png
description: ''
---


            There are no “you must” rules
            Nothing is set in stone here. These are style preferences, not religious dogmas.

      
        
        
          if (condition) {
  // do this
  // ...and that
  // ...and that
}
        
      
      
      
      
        
        
          // backtick quotes ` allow to split the string into multiple lines
let str = `
  ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;
        
      
      
      
      
        
        
          if (
  id === 123 &&
  moonPhase === 'Waning Gibbous' &&
  zodiacSign === 'Libra'
) {
  letTheSorceryBegin();
}
        
      
      
      
      
        
        
          for (let i = 0; i < 10; i++) {
  if (cond) {
    ... // <- one more nesting level
  }
}
        
      
      
      
      
        
        
          for (let i = 0; i < 10; i++) {
  if (!cond) continue;
  ...  // <- no extra nesting level
}
        
      
      
      
      
        
        
          function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
  } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
}
        
      
      
      
      
        
        
          function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
    return;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
        
      
      
      
      
        
        
          {
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "no-console": 0,
    "indent": 2
  }
}
        
      
      
      
