---
id: 234
title: Bringing-forward-the-End-of-Life-Date-for-Node.js-16-|-Node.js
date: 'Oct 25 2022'
tags: ["node","news"]
metaTags: ["node","news"]
cover_image: https://velog.velcdn.com/images/mayinjanuary/post/e1ff9d4e-541f-418f-b411-4ab9f39aee16/nodejs.png
description: ''
---


        
          Bringing forward the End-of-Life Date for Node.js 16
          by Richard Lau, 2022-06-08
        

        Changing the End-of-Life Date for Node.js 16 to September 11th, 2023SummaryWe are moving the End-of-Life date of Node.js 16 by seven months to coincide with the end of support of OpenSSL 1.1.1 on September 11th, 2023.
Why?When we put together Node.js 16 the hope was that we would be able to include OpenSSL 3. Unfortunately, the timing of the releases did not allow that to be possible, and we released Node.js 16 with OpenSSL 1.1.1. OpenSSL 1.1.1 is scheduled to be supported up until September 11th, 2023, which is seven months before the planned End-of-Life date of Node.js 16 (April 2024).
We have evaluated the following options:

Do nothing. Node.js 16 will be at risk for any vulnerabilities in OpenSSL 1.1.1 for the last seven months of its lifetime.
End support for Node.js 16 early in September 2023 to coincide with EOL of OpenSSL 1.1.1. We have precedent for doing this when we ended support for Node.js 8 four months early to coincide with the EOL of OpenSSL 1.0.2.
Attempt a switch to OpenSSL 3. Based on issues reported against Node.js 17 and 18 (which are on OpenSSL 3) and adjustments that needed to be made to our test suite, this is considered risky and will likely cause compatibility issues for some applications.
Attempt to replace OpenSSL 1.1.1 with the version of OpenSSL 1.1.1 from CentOS Stream 8. CentOS Stream 8 is upstream Red Hat Enterprise Linux 8 (RHEL 8) and its openssl package would be supported for the duration of RHEL 8 (until May 31st, 2024). Unfortunately, the changes made to OpenSSL for CentOS Stream 8 result in differences (e.g., removal of several algorithms) which would cause compatibility issues for some applications.

After consideration, we have decided that the least risky option is to avoid the potential breaking change of an in-release OpenSSL switch and bring forward the End-of-Life date of Node.js 16 to be on the same day as the end of support of OpenSSL 1.1.1, September 11th, 2023.

      
