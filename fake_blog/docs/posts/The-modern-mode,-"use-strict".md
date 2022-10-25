---
id: 250
title: The-modern-mode,-"use-strict"
date: 'Oct 25 2022'
tags: ["javascript","guide"]
metaTags: ["javascript","guide"]
cover_image: https://velog.velcdn.com/images/xedni/post/d36b4026-f1ff-498e-b149-99e67a9b8691/title_javascript2.png
description: ''
---


      
        
        
          "use strict";

// this code works the modern way
...
        
      
      
      
            Ensure that “use strict” is at the top
            Please make sure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.
Strict mode isn’t enabled here:

      
        
        
          alert("some code");
// "use strict" below is ignored--it must be at the top

"use strict";

// strict mode is not activated
        
      
      
      Only comments may appear above "use strict".

            There’s no way to cancel use strict
            There is no directive like "no use strict" that reverts the engine to old behavior.
Once we enter strict mode, there’s no going back.

      
        
        
          'use strict'; <Shift+Enter for a newline>
//  ...your code
<Enter to run>
        
      
      
      
      
        
        
          (function() {
  'use strict';

  // ...your code here...
})()
        
      
      
      
