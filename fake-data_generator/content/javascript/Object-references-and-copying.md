---
id: 179
title: Object-references-and-copying
date: 'Oct 25 2022'
tags: ["javascript","guide"]
metaTags: ["javascript","guide"]
cover_image: https://velog.velcdn.com/images/xedni/post/d36b4026-f1ff-498e-b149-99e67a9b8691/title_javascript2.png
description: ''
---


      
        
        
          let message = "Hello!";
let phrase = message;
        
      
      
      
      
        
        
          let user = {
  name: "John"
};
        
      
      
      
      
        
        
          let user = { name: "John" };

let admin = user; // copy the reference
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let a = {};
let b = {}; // two independent objects

alert( a == b ); // false
        
      
      
      
            Const objects can be modified
            An important side effect of storing objects as references is that an object declared as const can be modified.
For instance:

      
        
        
          
            
          
          
            
          
        
        
          const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete
        
      
      
      It might seem that the line (*) would cause an error, but it does not. The value of user is constant, it must always reference the same object, but properties of that object are free to change.
In other words, the const user gives an error only if we try to set user=... as a whole.
That said, if we really need to make constant object properties, it???s also possible, but using totally different methods. We???ll mention that in the chapter Property flags and descriptors.

      
        
        
          
            
          
          
            
          
        
        
          let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert( user.name ); // still John in the original object
        
      
      
      
      
        
        
          Object.assign(dest, ...sources)
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // now user = { name: "Pete" }
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height ); // 182
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

let clone = structuredClone(user);
alert(clone.me === clone); // true
        
      
      
      
      
        
        
          
            
          
          
            
          
        
        
          // error
structuredClone({
  f: function() {}
});
        
      
      
      
