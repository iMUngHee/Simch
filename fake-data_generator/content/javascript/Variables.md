---
id: 267
title: Variables
date: 'Oct 25 2022'
tags: ["javascript","guide"]
metaTags: ["javascript","guide"]
cover_image: https://velog.velcdn.com/images/xedni/post/d36b4026-f1ff-498e-b149-99e67a9b8691/title_javascript2.png
description: ''
---


      
        
        
          let message;
        
      
      
      
      
        
        
          let message;

message = 'Hello'; // store the string 'Hello' in the variable named message
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let message;
message = 'Hello!';

alert(message); // shows the variable content
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let message = 'Hello!'; // define the variable and assign the value

alert(message); // Hello!
        
      
      
      
      
        
        
          let user = 'John', age = 25, message = 'Hello';
        
      
      
      
      
        
        
          let user = 'John';
let age = 25;
let message = 'Hello';
        
      
      
      
      
        
        
          let user = 'John',
  age = 25,
  message = 'Hello';
        
      
      
      
      
        
        
          let user = 'John'
  , age = 25
  , message = 'Hello';
        
      
      
      
            var instead of let
            In older scripts, you may also find another keyword: var instead of let:

      
        
        
          var message = 'Hello';
        
      
      
      The var keyword is almost the same as let. It also declares a variable, but in a slightly different, “old-school” way.
There are subtle differences between let and var, but they do not matter for us yet. We’ll cover them in detail in the chapter The old "var".

      
        
        
          
            
          
          
            
          
        
        
          let message;

message = 'Hello!';

message = 'World!'; // value changed

alert(message);
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!
        
      
      
      
            Declaring twice triggers an error
            A variable should be declared only once.
A repeated declaration of the same variable is an error:

      
        
        
          
            
          
          
            
          
        
        
          let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared
        
      
      
      So, we should declare a variable once and then refer to it without let.

            Functional languages
            It’s interesting to note that there exist functional programming languages, like Scala or Erlang that forbid changing variable values.
In such languages, once the value is stored “in the box”, it’s there forever. If we need to store something else, the language forces us to create a new box (declare a new variable). We can’t reuse the old one.
Though it may seem a little odd at first sight, these languages are quite capable of serious development. More than that, there are areas like parallel computations where this limitation confers certain benefits. Studying such a language (even if you’re not planning to use it soon) is recommended to broaden the mind.

      
        
        
          let userName;
let test123;
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3
        
      
      
      
      
        
        
          let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name
        
      
      
      
            Case matters
            Variables named apple and APPLE are two different variables.

            Non-Latin letters are allowed, but not recommended
            It is possible to use any language, including cyrillic letters, Chinese logograms and so on, like this:

      
        
        
          let имя = '...';
let 我 = '...';
        
      
      
      Technically, there is no error here. Such names are allowed, but there is an international convention to use English in variable names. Even if we’re writing a small script, it may have a long life ahead. People from other countries may need to read it some time.

            Reserved names
            There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.
For example: let, class, return, and function are reserved.
The code below gives a syntax error:

      
        
        
          
            
          
          
            
          
        
        
          let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!
        
      
      
      
            An assignment without use strict
            Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.

      
        
        
          
            
          
          
            
          
        
        
          // note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5
        
      
      
      This is a bad practice and would cause an error in strict mode:

      
        
        
          "use strict";

num = 5; // error: num is not defined
        
      
      
      
      
        
        
          const myBirthday = '18.04.1982';
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
        
      
      
      
      
        
        
          const pageLoadTime = /* time taken by a webpage to load */;
        
      
      
      
            Reuse or create?
            And the last note. There are some lazy programmers who, instead of declaring new variables, tend to reuse existing ones.
As a result, their variables are like boxes into which people throw different things without changing their stickers. What’s inside the box now? Who knows? We need to come closer and check.
Such programmers save a little bit on variable declaration but lose ten times more on debugging.
An extra variable is good, not evil.
Modern JavaScript minifiers and browsers optimize code well enough, so it won’t create performance issues. Using different variables for different values can even help the engine optimize your code.

